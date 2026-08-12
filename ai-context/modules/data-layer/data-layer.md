---
file: ai-context/modules/data-layer/data-layer.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-29T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: tech-lead
update_triggers:
  - "Any file added, removed, or renamed under src/data/"
  - "Any schema change to an existing dataset"
verification_command: "npm run build"
anchors:
  - data:src/data/countryDetailsData.js
  - data:src/data/department.js
  - data:src/data/departments.jsx
  - data:src/data/doctors.js
  - data:src/data/eventsData.js
  - data:src/data/membershipData.js
  - data:src/data/navLinks.js
  - data:src/data/publicationsData.js
memory_links:
  - CLAUDE.md
  - ai-context/modules/doctors/doctors.md
  - ai-context/modules/departments-services/departments-services.md
  - ai-context/modules/events-congresses/events-congresses.md
  - ai-context/modules/membership/membership.md
  - ai-context/modules/publications/publications.md
  - ai-context/modules/navigation/navigation.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: data-layer

## Scope

All static datasets. This module is the "backend for now" -- every domain
module reads from files here.

## Dataset registry

| File                                 | Consumers (modules)                     | Notes                                                 |
|--------------------------------------|-----------------------------------------|-------------------------------------------------------|
| `src/data/navLinks.js`               | navigation                              | Source of truth for the nav tree.                     |
| `src/data/doctors.js`                | doctors, appointment                    | Roster; `id` is the URL param for `/doctors/:doctorId`.|
| `src/data/department.js`             | departments-services, appointment       | See "duplication" note.                               |
| `src/data/departments.jsx`           | departments-services, appointment       | See "duplication" note; contains JSX (icons).         |
| `src/data/eventsData.js`             | events-congresses                       | Powers calendar + list views + `/events/:slug` detail page. Exports `eventsData` and `getEventBySlug()`; `slug` is the URL param. |
| `src/data/membershipData.js`         | membership                              | Society roster per country.                           |
| `src/data/countryDetailsData.js`     | membership                              | Extended country content.                             |
| `src/data/publicationsData.js`       | publications                            | Publications + PDF links.                             |

## Rules

1. **One dataset per concern.** Do not create parallel files for the same
   concern (see `department.js` vs `departments.jsx`).
2. **Stable field names.** Renames must be applied to every consumer in the
   same commit.
3. **No inline data blobs.** Component files should import from `src/data/`,
   not declare arrays of records inline.
4. **Assets by path.** When a dataset references an image or PDF, use the
   absolute public path (`/foo.webp`), not a bundler import.

## Duplication to resolve

- `department.js` and `departments.jsx` cover overlapping content. Before
  editing either, grep for imports of each and pick one to keep. The `.jsx`
  variant is only justified if the data structurally requires JSX (icon
  components); otherwise consolidate into `.js`.

## Change checklist

1. Update dataset.
2. Update the row above (add / remove / move rows).
3. Bump `last_verified`.
4. Update each consumer module's memory if the schema changed.
5. `npm run memory:audit` and `npm run build`.
