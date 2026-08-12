---
file: ai-context/modules/appointment/appointment.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-25T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: feature-owner
update_triggers:
  - "Appointment page edits"
  - "AppointmentForm component edits"
  - "Doctor / department dataset shape changes (form depends on them)"
  - "Any backend endpoint added for appointment submission"
verification_command: "npm run build"
anchors:
  - code:src/pages/Appointment.jsx
  - code:src/components/AppointmentForm.jsx
memory_links:
  - CLAUDE.md
  - ai-context/modules/doctors/doctors.md
  - ai-context/modules/departments-services/departments-services.md
  - ai-context/modules/data-layer/data-layer.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: appointment

## Scope

The appointment-booking flow: department -> doctor -> date/time -> submit.

## Key files

| File                                     | Role                                     |
|------------------------------------------|------------------------------------------|
| `src/pages/Appointment.jsx`              | Page shell + wrapper for the form.       |
| `src/components/AppointmentForm.jsx`     | Multi-step / controlled form component.  |

## Data dependencies

- Reads department list from `src/data/department(s).*` -- see
  [`departments-services`](../departments-services/departments-services.md).
- Reads doctor list (filtered by department) from `src/data/doctors.js` -- see
  [`doctors`](../doctors/doctors.md).

## State + submission

- Currently **client-only**: submission does not hit a backend. Any success
  message is local UI state; forms reset on submit.
- Do NOT introduce fetch/axios calls to an external endpoint without first
  logging the endpoint + auth expectations in `state.md`.

## Change checklist

1. Update page/form.
2. If field names change, check consumers in `doctors` / `departments-services`.
3. If a backend is wired in, add the endpoint contract here and to `state.md`.
4. Bump `last_verified`.
5. `npm run memory:audit` and `npm run build`.
