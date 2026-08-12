---
file: ai-context/modules/membership/membership.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-29T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: feature-owner
update_triggers:
  - "Membership / Countrydetails page edits"
  - "src/data/membershipData.js or countryDetailsData.js changes"
verification_command: "npm run build"
anchors:
  - code:src/pages/Membership.jsx
  - code:src/pages/Countrydetails.jsx
  - data:src/data/membershipData.js
  - data:src/data/countryDetailsData.js
memory_links:
  - CLAUDE.md
  - ai-context/modules/routing-shell/routing-shell.md
  - ai-context/modules/data-layer/data-layer.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: membership

## Scope

Member-society directory: overview page, per-country membership detail, and
the country details listing.

## Key files

| File                                     | Role                                     |
|------------------------------------------|------------------------------------------|
| `src/pages/Membership.jsx`               | **The only** membership page: index + country detail + not-found. |
| `src/pages/Countrydetails.jsx`           | Country-level content page.              |
| `src/data/membershipData.js`             | Society roster per country.              |
| `src/data/countryDetailsData.js`         | Extended country content (bios, images). |

## Routing

- `/membership`             -> `Membership` (index view)
- `/membership/:country`    -> `Membership` (detail view)
- `/MembershipPage`         -> redirect to `/membership`
- `/Countrydetails`         -> `Countrydetails`

The `:country` param must be a key that exists in `membershipData.js`. Case
handling is currently caller-driven -- confirm before adding new links.

## One page, three views (merged 2026-07-29)

There was a second page, `MembershipPage.jsx` -- a near-copy that called
`useParams()` for `country` on a paramless route, so it always rendered
"Country Not Found" (it also referenced a non-existent `data.logo`). It is
**deleted**. Do not recreate it; extend `Membership.jsx` instead.

`Membership.jsx` switches on the route param and renders one of three local
view components:

| Route                  | `country` | View               |
|------------------------|-----------|--------------------|
| `/membership`          | undefined | `MembershipIndex`  |
| `/membership/:country` | in data   | `CountryDetail`    |
| `/membership/:country` | unknown   | `CountryNotFound`  |

Both routes point at the same element in `src/App.jsx`.

Index view rules:

- Content comes from `navLinks.js` via `buildRegions()`: region -> country,
  matching each nav path's last segment against a `membershipData` key.
  Countries with no data entry are **skipped**, not rendered as dead links, and
  empty regions disappear.
- Because the menu and this page read the same source, adding a country means
  editing `navLinks.js` + `membershipData.js` only -- no page edit.
- Verified 2026-07-29: all 19 nav paths resolve (Central 6, West 7, East 5,
  Oceania 1); zero unresolved.

Shared `FlagCircle` takes padding as a `pad` prop, not via `className`, so
callers can't produce two competing padding utilities (source order does not
decide the winner in the generated CSS).

## Country header layout (2026-07-29)

`Membership.jsx` header = navy gradient band + flag circle overlapping its
bottom edge + centered country name. Sizes are tuned so the whole block sits
above the fold under the 290px `PageHero`:

- Band `h-28 md:h-32`, flag `w-28 h-28 md:w-32 md:h-32` at
  `-bottom-14 md:-bottom-16` (overhangs the band by exactly half its height).
- The country block uses `mt-[6.5rem] md:mt-[7.5rem]` -- flag overhang (56/64px)
  **plus** ~48px of clearance. If the flag size or `-bottom-*` changes, this
  margin must change with it or the title collides with the flag.
- Flag frame is `bg-white p-2` + `ring-1 ring-slate-200` (not a 10px white
  border), matching the card framing used elsewhere.

## Data contract

`membershipData.js` and `countryDetailsData.js` share the country as their
join key. Adding a country requires entries in both files (or a documented
"details pending" state).

## Change checklist

1. Update page/data.
2. Cross-check the two data files for join-key consistency.
3. Bump `last_verified`.
4. `npm run memory:audit` and `npm run build`.
