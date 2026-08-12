---
file: ai-context/state.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-29T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: tech-lead
update_triggers:
  - "A task is started, completed, or blocked"
  - "A memory file is added, renamed, moved, or archived"
  - "Any decision that changes routing, data shape, or shared conventions"
verification_command: "npm run memory:audit"
anchors: []
memory_links:
  - CLAUDE.md
  - ai-context/README.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../CLAUDE.md).
> This file is the live task/blocker board. Keep it under 100 lines.
> Prune completed items into `ai-context/archive/` when it grows.

# State

## Active tasks

_None._

## Recently completed

- `2026-07-29` -- Hero **right column only** redesigned: larger rounded image
  with soft shadow, 3 glass stat cards (CSS float loop in `index.css`),
  low-opacity blue/dotted/cross decoration, 0.8s entrance. Left column, stats
  grid, and hero height untouched. `modules/home/`.

All four `2026-07-29` items below have contracts in their module files -- read
those, not this summary, before touching the same code.

- `2026-07-29` -- Membership merged into one page. Deleted the duplicate
  `MembershipPage.jsx` (a paramless copy that always showed "Country Not
  Found"); `Membership.jsx` now serves the index at `/membership`, the detail
  at `/membership/:country`, and not-found. `/MembershipPage` redirects.
  `modules/membership/`.
- `2026-07-29` -- Contact consolidated: deleted `ContactUs.jsx`, `/ContactUs`
  redirects to `/contact`, page rebuilt in the site palette with real FAOPS
  details (old copy had Q9-hospital template data). `modules/contact-faq/`.
- `2026-07-29` -- Gallery albums open a carousel via new
  `src/components/gallery/GalleryLightbox.jsx` (arrows, keyboard, thumbnails,
  swipe), wired into `FAOPS2022` + `FAOPS2023`. `modules/gallery-media/`.
- `2026-07-29` -- `Membership.jsx` header compacted to fit above the fold with
  explicit flag-to-title clearance; `/membership` back link ->
  `/MembershipPage`. `modules/membership/`.
- `2026-07-29` -- Mobile nav reaches level three: region rows were dead
  `Link`s, now collapsible country accordions. `modules/navigation/`.
- `2026-07-29` -- Events "Read More" opens `/events/:slug` (new
  `EventDetails.jsx`, extended `eventsData.js` + `getEventBySlug()`, deleted
  `EventModal.jsx`). `modules/events-congresses/`.
- `2026-07-25` -- Home hero + footer restyle (`modules/home/home.md`) and
  memory-kit scaffold install; history in
  [archive/2026-07-home-hero-restyle.md](archive/2026-07-home-hero-restyle.md).

## Blockers

_None._

## Open decisions

- **Testing.** No framework yet. If safety-sensitive logic lands, decide
  Vitest + RTL vs. deferring. Track here before adding deps.
- **Backend.** None wired; Appointment + Contact forms are client-only. Log
  future endpoints/envs here first.
- **`gallerygrid` route casing.** `src/App.jsx` renders `<gallerygrid />`
  (lowercase = unknown DOM tag). Rename to `GalleryGrid.jsx` or repoint the
  route. See `modules/gallery-media/gallery-media.md`.
- **Dead code.** Commented FAOPS2024 route in `src/App.jsx`;
  `SocietyCongresses.jsx` has no route; empty `New folder/` at repo root.

## Module status snapshot

Documented contracts (read before editing): `events-congresses`, `navigation`,
`membership`, `gallery-media`, `contact-faq`, `home`, `routing-shell`.

Still scaffold: `about-governance` (largest, watch the 250-line cap),
`doctors`, `departments-services` (duplicate `department.js` +
`departments.jsx`), `appointment` (client-only form), `publications`, `legal`,
`data-layer`.

## Conventions in force

- JSX only, no TS.
- Tailwind CSS 4 utilities, no CSS modules.
- Framer Motion for transitions.
- Icons: `lucide-react` and `react-icons`.
- Static assets served from `public/` and referenced by absolute path.
- Route table lives in `src/App.jsx`.
