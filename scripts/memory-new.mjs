#!/usr/bin/env node
// memory-new.mjs
// Scaffolds a new memory node with correct frontmatter and preamble.
// Usage:
//   npm run memory:new -- ai-context/modules/<name>/<name>.md
//   npm run memory:new -- ai-context/modules/<name>/<name>.md --parent CLAUDE.md --owner tech-lead

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();

function parseArgs(argv) {
  const args = { positional: [], flags: {} };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (!next || next.startsWith("--")) { args.flags[key] = true; }
      else { args.flags[key] = next; i++; }
    } else {
      args.positional.push(a);
    }
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const target = args.positional[0];
  if (!target) {
    console.error("usage: npm run memory:new -- <relative-path.md> [--parent <path>] [--owner <role>]");
    process.exit(1);
  }
  const rel = target.replace(/\\/g, "/");
  if (!rel.endsWith(".md")) {
    console.error("target must end in .md");
    process.exit(1);
  }
  const absolute = path.join(ROOT, rel);

  try {
    await fs.stat(absolute);
    console.error(`refusing to overwrite existing file: ${rel}`);
    process.exit(1);
  } catch { /* ok, does not exist */ }

  const parent = args.flags.parent || "CLAUDE.md";
  const owner = args.flags.owner || "feature-owner";
  const now = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");

  const depth = rel.split("/").length - 1; // how deep from repo root
  const backToRoot = depth === 0 ? "." : Array(depth).fill("..").join("/");
  const claudeLink = `${backToRoot}/CLAUDE.md`;

  const title = path.basename(rel, ".md")
    .split(/[-_]/).map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");

  const content = `---
file: ${rel}
parent: ${parent}
children: []
last_verified: ${now}
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: ${owner}
update_triggers:
  - "Describe when this file must be updated"
verification_command: "npm run build"
anchors: []
memory_links:
  - ${parent}
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](${claudeLink}).

# ${title}

## Scope

Describe the scope of this module or memory node.

## Key files

| File | Role |
|------|------|
|      |      |

## Change checklist

1. Update code + this file in the same turn.
2. Bump \`last_verified\`.
3. \`npm run memory:audit\` and \`npm run build\`.
`;

  await fs.mkdir(path.dirname(absolute), { recursive: true });
  await fs.writeFile(absolute, content, "utf8");

  console.log(`created ${rel}`);
  console.log(`Next: add "${rel}" to the children: list of "${parent}", then run npm run memory:audit`);
}

main().catch((e) => { console.error(e); process.exit(1); });
