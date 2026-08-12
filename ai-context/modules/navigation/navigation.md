---
file: ai-context/modules/navigation/navigation.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-29T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: feature-owner
update_triggers:
  - "TopBar / Navbar / MobileMenu / DesktopDropdown edits"
  - "Footer or EmergencyBanner edits"
  - "New route added or existing route renamed (nav links must match)"
  - "Nav data updated in src/data/navLinks.js"
  - "Footer gallery tile / image styling changes"
verification_command: "npm run build"
anchors:
  - code:src/components/layout/TopBar.jsx
  - code:src/components/layout/Navbar.jsx
  - code:src/components/layout/DesktopDropdown.jsx
  - code:src/components/layout/MobileMenu.jsx
  - code:src/components/Footer.jsx
  - code:src/components/EmergencyBanner.jsx
  - data:src/data/navLinks.js
memory_links:
  - CLAUDE.md
  - ai-context/modules/routing-shell/routing-shell.md
  - ai-context/modules/data-layer/data-layer.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: navigation

## Scope

All persistent chrome around every page: top utility bar, main navigation
(desktop + mobile), site footer, and the fixed emergency contact banner.

## Key files

| File                                          | Role                                     |
|-----------------------------------------------|------------------------------------------|
| `src/components/layout/TopBar.jsx`            | Contact strip above the main nav.        |
| `src/components/layout/Navbar.jsx`            | Desktop nav (branding + link groups).    |
| `src/components/layout/DesktopDropdown.jsx`   | Nested menu for grouped links.           |
| `src/components/layout/MobileMenu.jsx`        | Hamburger-driven mobile drawer.          |
| `src/components/Footer.jsx`                   | Footer with columns + copyright.         |
| `src/components/EmergencyBanner.jsx`          | Fixed "Emergency" CTA (bottom-right).    |
| `src/data/navLinks.js`                        | Source of truth for nav structure.       |

## Rules

1. Nav labels + hrefs live in `src/data/navLinks.js`. Editing markup in
   `Navbar.jsx` for a new link is wrong -- extend the data file instead.
2. Any route added in `src/App.jsx` that should be user-reachable must be
   reflected in `navLinks.js` (or intentionally excluded and noted here).
3. Casing in `href` must match the route path exactly. Because `App.jsx` mixes
   cased paths (`/History`, `/Vision`, etc.) with lowercase (`/about`), copy the
   exact string from the route table in `routing-shell` memory.

## Nav depth contract (2026-07-29)

`navLinks.js` is **three levels deep** under `Membership`: group -> region ->
country. Regions (`Central / West / East / Oceania Region`) are grouping nodes
with `children` and **no `path`** -- never render them as links.

- `DesktopDropdown.jsx` special-cases `item.title === "Membership"` and renders
  a 4-column grid: region heading + country links.
- `MobileMenu.jsx` renders a two-level accordion: tapping a group expands its
  regions, tapping a region expands its countries. State is
  `activeDropdown` (group title) + `activeSubDropdown` (`"Group::Region"` key);
  only one region stays open at a time and switching groups resets it.
- On drawer open, `findActiveBranch(pathname)` seeds both states so the branch
  containing the current route is already expanded.
- Any node **without** `children` still renders as a flat `Link`, so adding a
  third level to another group works with no component change.
- React keys fall back to `title` because grouping nodes have no `path`.

## Footer image style contract (2026-07-25)

Footer gallery tiles use the site-wide "framed rectangle" convention adapted
for a dark background:

- **No rounded corners on `<img>` or its wrapper `<Link>`.**
- **Border:** `border-2 border-white/15` at rest, `hover:border-[#F7DB07]`.
- **Shadow:** `shadow-lg shadow-slate-950/40`.
- **Image sizing:** `w-full aspect-square object-cover`, hover
  `scale-110 duration-500`.

If new imagery is added to the footer or navigation chrome, apply the same
frame (adjusting border opacity for the surrounding surface color).

## Change checklist

1. Update `navLinks.js` (or the affected component).
2. Cross-check against the route table in
   [`routing-shell.md`](../routing-shell/routing-shell.md) -- no dead links,
   no orphan routes.
3. If footer imagery changes, keep it aligned with the frame contract above.
4. Bump `last_verified`.
5. `npm run memory:audit` and `npm run build`.
