---
file: CLAUDE.md
parent: null
children:
  - ai-context/state.md
  - ai-context/README.md
  - ai-context/archive/README.md
  - ai-context/modules/routing-shell/routing-shell.md
  - ai-context/modules/navigation/navigation.md
  - ai-context/modules/home/home.md
  - ai-context/modules/about-governance/about-governance.md
  - ai-context/modules/doctors/doctors.md
  - ai-context/modules/departments-services/departments-services.md
  - ai-context/modules/appointment/appointment.md
  - ai-context/modules/events-congresses/events-congresses.md
  - ai-context/modules/membership/membership.md
  - ai-context/modules/gallery-media/gallery-media.md
  - ai-context/modules/publications/publications.md
  - ai-context/modules/contact-faq/contact-faq.md
  - ai-context/modules/legal/legal.md
  - ai-context/modules/data-layer/data-layer.md
last_verified: 2026-07-25T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: tech-lead
update_triggers:
  - "package.json dependencies or scripts change"
  - "New top-level directory added under src/"
  - "Routing shell (App.jsx / MainLayout) changes"
  - "New module memory file added under ai-context/modules/"
verification_command: "npm run build"
anchors:
  - code:package.json:1-45
  - code:src/App.jsx:1-120
  - code:src/main.jsx:1-15
  - code:src/layout/MainLayout.jsx:1-40
memory_links: []
---

> **You are reading a memory file.** Full protocol lives here in this file.
> Quick rules:
> 1. **Self-heal on read** -- if any claim below mismatches code reality, fix
>    THIS FILE before acting.
> 2. **Doubly-linked** -- parent + children declared in frontmatter; audit
>    enforces both directions.
> 3. **On exit** -- bump `last_verified`, update `state.md`, run
>    `npm run memory:audit`.
> 4. **Cite, don't duplicate** -- link to schemas / data files / commits as
>    source of truth.
>
> Audit: `npm run memory:audit` -- Doctor: `npm run memory:doctor`
> New node: `npm run memory:new -- <path>`

# FAOPS / Q9 Multi-Speciality Hospital -- Root Memory Node

## Project Snapshot

- **Product:** Marketing + informational site for FAOPS (Federation of Asia and
  Oceania Perinatal Societies) branded as "Q9 Multi Speciality Hospital".
- **Kind:** Client-only React SPA (no backend deployed yet).
- **Framework:** React 19, Vite 6, React Router 7, Tailwind CSS 4, Framer Motion.
- **Package manager:** `npm` (see `package-lock.json`).
- **Entry:** `src/main.jsx` -> `<App />` -> React Router tree in `src/App.jsx`.
- **Shell:** `src/layout/MainLayout.jsx` (TopBar + Navbar + Outlet + Footer +
  EmergencyBanner).

## Ground Rules for Agents

1. **Read this file first.** Then `ai-context/state.md`. Then the specific
   module file(s) under `ai-context/modules/` that cover the code you are about
   to touch. Read the actual source before proposing changes.
2. **Match the existing style.** JSX function components, Tailwind utility
   classes, Framer Motion for animations, `lucide-react` / `react-icons` for
   icons. No TypeScript in this repo -- keep it JSX.
3. **Routing lives in `src/App.jsx`.** Every new page must be added there and
   documented in `ai-context/modules/routing-shell/routing-shell.md` plus its
   domain module.
4. **Static data goes in `src/data/`.** Do not inline large data blobs in
   components; extend the matching file under `src/data/` and note it in
   `ai-context/modules/data-layer/data-layer.md`.
5. **Assets go in `public/`.** Reference by absolute path (`/foo.webp`). Avoid
   importing large media through the bundler.
6. **No test framework installed.** Do not add one implicitly; if a change is
   safety-sensitive, propose it in `state.md` and wait for approval.

## Directory Map

```
Hospital-website-main/
  CLAUDE.md                     <- you are here
  .cursorrules                  <- LLM protocol summary for IDEs
  ai-context/
    README.md                   <- memory tree index
    state.md                    <- live task/blocker board (<=100 lines)
    modules/<name>/<name>.md    <- module memory nodes (<=250 lines each)
    archive/                    <- older logs pruned from state.md / modules
  scripts/
    memory-audit.mjs
    memory-doctor.mjs
    memory-new.mjs
  src/
    App.jsx, main.jsx, index.css
    layout/MainLayout.jsx
    components/                 <- shared UI, plus about/ events/ layout/ subdirs
    pages/                      <- one file per route
    data/                       <- static datasets (doctors, departments, ...)
    utils/                      <- helpers (cn.js)
  public/                       <- images, PDFs, gallery/
```

## Memory Protocol (Full)

### Context loading (mandatory)
On every new session touching this repo, read in order:
1. `CLAUDE.md` (this file)
2. `ai-context/state.md`
3. The module file(s) for the code area you will touch. Refer to the module map
   in `.cursorrules` or `ai-context/README.md`.

### Self-healing on read
If a memory file's claim contradicts current source (missing file, renamed
symbol, dead route), **fix the memory file before acting on the task**. Then bump
`last_verified`.

### Bidirectional links
- Every non-root memory file declares `parent:` in frontmatter.
- Every parent lists all its children in `children:`.
- The audit script fails if either direction is missing.

### Size caps
- `ai-context/state.md`         -- max 100 lines
- `ai-context/modules/**/*.md`  -- max 250 lines
- On overflow: prune done items or move older sections into
  `ai-context/archive/<year>-<slug>.md`.

### Drift prevention
Any code change under a module's paths (see `.cursorrules` module map) requires
a same-turn edit to the module's memory file. New route -> update
`routing-shell` + the domain module.

### Anchors
Cite code, don't duplicate. Frontmatter `anchors:` accepts:
- `code:<path>:<line-range>`
- `data:<path>`
- `asset:<path>`

### Verification (end of turn)
1. `npm run memory:audit`
2. `npm run build` (Vite -- confirms the app compiles)
3. Fix violations before declaring done.

## Roles

- **tech-lead** owns this file, `state.md`, and `routing-shell`.
- **feature-owner** owns individual module files; see each module's frontmatter
  `owner_role`.
