---
file: ai-context/archive/README.md
parent: CLAUDE.md
children:
  - ai-context/archive/2026-07-home-hero-restyle.md
last_verified: 2026-07-25T15:30:00Z
next_review_due: code-change-bound
lifecycle_stage: archive
owner_role: tech-lead
update_triggers:
  - "A section is pruned from state.md or a module file into this directory"
verification_command: "npm run memory:audit"
anchors: []
memory_links:
  - CLAUDE.md
  - ai-context/state.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../CLAUDE.md).
> This directory holds pruned history from `state.md` and module files.
> Files here are **read-only** references -- do not edit past entries;
> only append new archive slugs.

# Archive Index

_Empty._ When `state.md` or a module file grows past its size cap, move the
oldest resolved sections into a file named:

```
ai-context/archive/<YYYY>-<slug>.md
```

Example: `ai-context/archive/2026-q3-appointment-refactor.md`.

Each archived file should carry its own frontmatter:

```yaml
---
file: ai-context/archive/<slug>.md
parent: ai-context/archive/README.md
children: []
last_verified: <original completion date>
lifecycle_stage: archive
owner_role: <role that owned the work>
anchors: []
---
```

Update this README's `children:` list when you add an archive file.
