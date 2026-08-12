#!/usr/bin/env node
// memory-doctor.mjs
// Deeper health check on top of memory-audit:
//  - flags nodes whose last_verified is > N days old (default 90)
//  - flags nodes with empty anchors: []
//  - flags nodes whose declared anchors point to missing files
// Non-fatal by default (exits 0). Pass --strict to fail on findings.

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const STALE_DAYS = Number(process.env.MEMORY_STALE_DAYS ?? 90);
const STRICT = process.argv.includes("--strict");

// Reuse the parser from memory-audit.mjs by dynamic import.
const audit = await import(path.join(ROOT, "scripts", "memory-audit.mjs")).catch(() => null);
// If import doesn't expose helpers, re-implement the minimum we need here.
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
    if (!line) { currentKey = null; continue; }
    const listMatch = line.match(/^\s+-\s+(.+)$/);
    if (listMatch && currentKey) {
      const val = unquote(listMatch[1].trim());
      if (!Array.isArray(out[currentKey])) out[currentKey] = [];
      out[currentKey].push(val);
      continue;
    }
    const kvMatch = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!kvMatch) { currentKey = null; continue; }
    const [, key, rawVal] = kvMatch;
    const val = rawVal.trim();
    if (val === "") { out[key] = []; currentKey = key; }
    else if (val === "[]") { out[key] = []; currentKey = null; }
    else if (val === "null" || val === "~") { out[key] = null; currentKey = null; }
    else { out[key] = unquote(val); currentKey = null; }
  }
  return out;
}
function unquote(s) {
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
}
async function walk(dir, out = []) {
  let entries;
  try { entries = await fs.readdir(dir, { withFileTypes: true }); }
  catch { return out; }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git") continue;
      await walk(full, out);
    } else if (entry.isFile() && full.endsWith(".md")) out.push(full);
  }
  return out;
}

async function main() {
  const files = [path.join(ROOT, "CLAUDE.md"), ...(await walk(path.join(ROOT, "ai-context")))];
  const findings = [];
  const now = Date.now();
  const staleMs = STALE_DAYS * 24 * 60 * 60 * 1000;

  for (const full of files) {
    const rel = path.relative(ROOT, full).replace(/\\/g, "/");
    let text;
    try { text = await fs.readFile(full, "utf8"); } catch { continue; }
    const fm = parseFrontmatter(text);
    if (!fm) continue;

    if (fm.last_verified) {
      const t = new Date(fm.last_verified).getTime();
      if (!Number.isNaN(t) && now - t > staleMs) {
        findings.push(`[${rel}] stale: last_verified ${fm.last_verified} (> ${STALE_DAYS} days)`);
      }
    }

    if (Array.isArray(fm.anchors) && fm.anchors.length === 0 && rel !== "ai-context/state.md" && rel !== "ai-context/README.md" && rel !== "ai-context/archive/README.md") {
      findings.push(`[${rel}] no anchors declared -- documentation is un-grounded`);
    }

    if (Array.isArray(fm.anchors)) {
      for (const a of fm.anchors) {
        // format: code:<path>:<range> | data:<path> | asset:<path>
        const m = String(a).match(/^([a-z]+):([^:]+)(?::(.+))?$/);
        if (!m) {
          findings.push(`[${rel}] anchor "${a}" is malformed (expected kind:path[:range])`);
          continue;
        }
        const [, kind, apath] = m;
        if (!["code", "data", "asset", "schema", "db"].includes(kind)) {
          findings.push(`[${rel}] anchor "${a}" uses unknown kind "${kind}"`);
        }
        if (["code", "data", "asset", "schema"].includes(kind)) {
          const absolute = path.join(ROOT, apath);
          try {
            await fs.stat(absolute);
          } catch {
            findings.push(`[${rel}] anchor points to missing path: ${apath}`);
          }
        }
      }
    }
  }

  if (findings.length === 0) {
    console.log(`memory-doctor: clean bill of health (staleness threshold ${STALE_DAYS} days).`);
    return;
  }

  console.log(`memory-doctor: ${findings.length} finding${findings.length === 1 ? "" : "s"}`);
  for (const f of findings) console.log(`  - ${f}`);

  if (STRICT) process.exit(1);
}

main().catch((e) => { console.error(e); process.exit(1); });
