---
file: ai-context/modules/departments-services/departments-services.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-25T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: feature-owner
update_triggers:
  - "Departments / DepartmentDetails / Services page edits"
  - "DepartmentCard edits"
  - "src/data/department.js or src/data/departments.jsx changes"
verification_command: "npm run build"
anchors:
  - code:src/pages/Departments.jsx
  - code:src/pages/DepartmentDetails.jsx
  - code:src/pages/Services.jsx
  - code:src/components/DepartmentCard.jsx
  - data:src/data/department.js
  - data:src/data/departments.jsx
memory_links:
  - CLAUDE.md
  - ai-context/modules/routing-shell/routing-shell.md
  - ai-context/modules/data-layer/data-layer.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: departments-services

## Scope

Medical departments listing + detail, and the services overview page.

## Key files

| File                                     | Role                                       |
|------------------------------------------|--------------------------------------------|
| `src/pages/Departments.jsx`              | Departments listing.                       |
| `src/pages/DepartmentDetails.jsx`        | Detail page, route `/departments/:id`.     |
| `src/pages/Services.jsx`                 | Cross-department services overview.        |
| `src/components/DepartmentCard.jsx`      | Presentational card used in listings.      |
| `src/data/department.js`                 | Static dataset (see note).                 |
| `src/data/departments.jsx`               | Static dataset (see note).                 |

## Note on data duplication

There are two data files with similar names: `department.js` and
`departments.jsx`. Before editing either:
1. Grep the codebase to identify which consumers import which file.
2. Prefer consolidating into a single `.js` module unless the `.jsx` variant
   embeds JSX (icons, elements) intentionally.
3. Log any consolidation decision in `state.md` and update `data-layer` memory.

## Routing

- `/departments`         -> `Departments`
- `/departments/:id`     -> `DepartmentDetails`
- `/services`            -> `Services`

The `:id` param must match the id key used in the departments dataset.

## Change checklist

1. Update page/component/data.
2. Reconcile the two data files if you touch them (see note above).
3. Bump `last_verified`.
4. `npm run memory:audit` and `npm run build`.
