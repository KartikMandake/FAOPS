---
file: ai-context/modules/doctors/doctors.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-25T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: feature-owner
update_triggers:
  - "Doctors listing or profile page edits"
  - "DoctorCard edits"
  - "src/data/doctors.js schema or content changes"
verification_command: "npm run build"
anchors:
  - code:src/pages/Doctors.jsx
  - code:src/pages/DoctorProfile.jsx
  - code:src/components/DoctorCard.jsx
  - data:src/data/doctors.js
memory_links:
  - CLAUDE.md
  - ai-context/modules/routing-shell/routing-shell.md
  - ai-context/modules/data-layer/data-layer.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: doctors

## Scope

Doctor directory (listing + profile detail).

## Key files

| File                                | Role                                          |
|-------------------------------------|-----------------------------------------------|
| `src/pages/Doctors.jsx`             | Grid/list view of doctors.                    |
| `src/pages/DoctorProfile.jsx`       | Detail page, route `/doctors/:doctorId`.      |
| `src/components/DoctorCard.jsx`     | Presentational card used in the listing.      |
| `src/data/doctors.js`               | Source of truth for the doctor roster.        |

## Data contract

`doctors.js` is the single source of truth for doctor records. Any addition,
removal, or field rename must:
1. Update every consumer (`Doctors.jsx`, `DoctorProfile.jsx`, `DoctorCard.jsx`,
   plus `Appointment.jsx` if it references specialists).
2. Be reflected in `ai-context/modules/data-layer/data-layer.md`.

## Routing

- `/doctors`              -> `Doctors`
- `/doctors/:doctorId`    -> `DoctorProfile`

The `:doctorId` param must match the id field used in `doctors.js`.

## Change checklist

1. Update page/component/data.
2. If the record schema changes, update `data-layer` memory.
3. Bump `last_verified`.
4. `npm run memory:audit` and `npm run build`.
