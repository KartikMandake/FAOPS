---
file: ai-context/modules/publications/publications.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-25T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: feature-owner
update_triggers:
  - "Publications page (src/pages/Pulication.jsx) edits"
  - "src/data/publicationsData.js edits"
  - "New PDF added under public/*.pdf"
verification_command: "npm run build"
anchors:
  - code:src/pages/Pulication.jsx
  - data:src/data/publicationsData.js
  - asset:public/
memory_links:
  - CLAUDE.md
  - ai-context/modules/routing-shell/routing-shell.md
  - ai-context/modules/data-layer/data-layer.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: publications

## Scope

Publications / abstract books / scientific programs listing, with linked
PDF downloads.

## Key files

| File                                | Role                                            |
|-------------------------------------|-------------------------------------------------|
| `src/pages/Pulication.jsx`          | Publications page (route `/Publications`).      |
| `src/data/publicationsData.js`      | Source of truth for publication metadata.       |
| `public/*.pdf`                      | Actual PDF assets (Brunei program, abstract books, scientific programs, etc.). |

## Notes

- **Filename typo.** Page file is `Pulication.jsx` (missing "b"). The route in
  `src/App.jsx` is `/Publications` (correct). Rename the file only when you
  can update the import in `App.jsx` in the same commit; otherwise leave it.
- PDF assets are referenced by absolute path (`/FAOPS2018.pdf`). Do not import
  PDFs through the bundler.

## Change checklist

1. Update page/data.
2. If adding a PDF, drop it into `public/` and add its entry to
   `publicationsData.js`.
3. Bump `last_verified`.
4. `npm run memory:audit` and `npm run build`.
