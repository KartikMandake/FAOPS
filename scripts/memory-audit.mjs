#!/usr/bin/env node
// memory-audit.mjs
// Validates the memory-kit tree rooted at CLAUDE.md:
//  - frontmatter parses and required keys are present
//  - last_verified is a valid ISO-8601 timestamp
//  - parent files exist and list this file in their children
//  - every child in `children:` exists and points back with `parent:`
//  - state.md <= 100 lines, module files <= 250 lines
// Exits 1 if any violations are found.

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const REQUIRED_KEYS = [
  "file",
  "parent",
  "children",
  "last_verified",
  "lifecycle_stage",
  "owner_role",
  "anchors",
];
const SIZE_CAPS = [
  { match: (rel) => rel === "ai-context/state.md", max: 100, label: "state.md" },
  {
    match: (rel) => rel.startsWith("ai-context/modules/") && rel.endsWith(".md"),
    max: 250,
    label: "module memory file",
  },
];

// --- tiny frontmatter parser -------------------------------------------------
// Supports:
//   key: scalar
//   key: null
//   key: []
//   key:
//     - item
//     - item
// Values with `#` are trimmed after the hash; wrap in quotes if you need it.
function parseFrontmatter(text) {
  if (!text.startsWith("---\n") && !text.startsWith("---\r\n")) return null;
  const rest = text.replace(/^---\r?\n/, "");
  const closeIdx = rest.search(/\r?\n---\r?\n/);
  if (closeIdx === -1) return null;
  const block = rest.slice(0, closeIdx);
  const lines = block.split(/\r?\n/);

  const out = {};
  let currentKey = null;
  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+#.*$/, "").replace(/\s+$/, "");
    if (!line) {
      currentKey = null;
      continue;
    }
    // list continuation
    const listMatch = line.match(/^\s+-\s+(.+)$/);
    if (listMatch && currentKey) {
      const val = unquote(listMatch[1].trim());
      if (!Array.isArray(out[currentKey])) out[currentKey] = [];
      out[currentKey].push(val);
      continue;
    }
    // top-level key
    const kvMatch = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!kvMatch) {
      currentKey = null;
      continue;
    }
    const [, key, rawVal] = kvMatch;
    const val = rawVal.trim();
    if (val === "") {
      out[key] = [];
      currentKey = key;
    } else if (val === "[]") {
      out[key] = [];
      currentKey = null;
    } else if (val === "null" || val === "~") {
      out[key] = null;
      currentKey = null;
    } else {
      out[key] = unquote(val);
      currentKey = null;
    }
  }
  return out;
}
function unquote(s) {
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
}

// --- filesystem walker -------------------------------------------------------
async function walk(dir, out = []) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git") continue;
      await walk(full, out);
    } else if (entry.isFile() && full.endsWith(".md")) {
      out.push(full);
    }
  }
  return out;
}

// --- main --------------------------------------------------------------------
async function main() {
  const claudePath = path.join(ROOT, "CLAUDE.md");
  const aiCtxDir = path.join(ROOT, "ai-context");

  const memoryFiles = [claudePath, ...(await walk(aiCtxDir))].filter(Boolean);
  const nodes = new Map(); // relPath -> { data, lineCount, rel }
  const errors = [];
  const warnings = [];

  for (const full of memoryFiles) {
    const rel = path.relative(ROOT, full).replace(/\\/g, "/");
    let text;
    try {
      text = await fs.readFile(full, "utf8");
    } catch (e) {
      errors.push(`[${rel}] cannot read: ${e.message}`);
      continue;
    }
    const fm = parseFrontmatter(text);
    if (!fm) {
      errors.push(`[${rel}] missing or malformed YAML frontmatter`);
      continue;
    }
    const lineCount = text.split(/\r?\n/).length;
    nodes.set(rel, { data: fm, lineCount, rel });
  }

  // Per-node validation
  for (const [rel, node] of nodes) {
    const { data, lineCount } = node;

    for (const key of REQUIRED_KEYS) {
      if (!(key in data)) {
        errors.push(`[${rel}] missing required frontmatter key: ${key}`);
      }
    }

    if (data.file && data.file !== rel) {
      warnings.push(`[${rel}] frontmatter file: "${data.file}" does not match its own path`);
    }

    if (data.last_verified) {
      const d = new Date(data.last_verified);
      if (Number.isNaN(d.getTime())) {
        errors.push(`[${rel}] last_verified is not a valid ISO-8601 timestamp: "${data.last_verified}"`);
      }
    }

    for (const cap of SIZE_CAPS) {
      if (cap.match(rel) && lineCount > cap.max) {
        errors.push(`[${rel}] ${cap.label} exceeds ${cap.max} lines (found ${lineCount})`);
      }
    }
  }

  // Bidirectional link validation
  for (const [rel, node] of nodes) {
    const { data } = node;
    const parent = data.parent;
    if (parent && parent !== "null") {
      if (!nodes.has(parent)) {
        errors.push(`[${rel}] parent "${parent}" not found in memory tree`);
      } else {
        const parentChildren = nodes.get(parent).data.children || [];
        if (!parentChildren.includes(rel)) {
          errors.push(`[${rel}] parent "${parent}" does not list this file in its children:`);
        }
      }
    }
    const children = data.children || [];
    for (const child of children) {
      if (!nodes.has(child)) {
        errors.push(`[${rel}] child "${child}" not found in memory tree`);
        continue;
      }
      const childParent = nodes.get(child).data.parent;
      if (childParent !== rel) {
        errors.push(
          `[${rel}] child "${child}" declares parent "${childParent ?? "null"}" (expected "${rel}")`,
        );
      }
    }
  }

  const total = nodes.size;
  console.log(`memory-audit: scanned ${total} node${total === 1 ? "" : "s"}`);
  for (const w of warnings) console.log(`  warn  ${w}`);
  for (const e of errors) console.log(`  error ${e}`);

  if (errors.length > 0) {
    console.log(`\nFAIL: ${errors.length} error${errors.length === 1 ? "" : "s"}`);
    process.exit(1);
  }
  console.log(`OK: memory tree is healthy${warnings.length ? ` (${warnings.length} warning(s))` : ""}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
