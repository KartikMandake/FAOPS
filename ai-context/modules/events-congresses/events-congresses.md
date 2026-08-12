---
file: ai-context/modules/events-congresses/events-congresses.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-29T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: feature-owner
update_triggers:
  - "Events / EventDetails / Congresses / SocietyCongresses page edits"
  - "Any src/components/events/* edit"
  - "src/data/eventsData.js content or schema change"
verification_command: "npm run build"
anchors:
  - code:src/pages/Events.jsx
  - code:src/pages/EventDetails.jsx
  - code:src/pages/Congresses.jsx
  - code:src/pages/SocietyCongresses.jsx
  - code:src/components/events/EventDay.jsx
  - code:src/components/events/EventHeader.jsx
  - code:src/components/events/EventList.jsx
  - code:src/components/events/EventMonth.jsx
  - code:src/components/events/EventTabs.jsx
  - data:src/data/eventsData.js
memory_links:
  - CLAUDE.md
  - ai-context/modules/routing-shell/routing-shell.md
  - ai-context/modules/data-layer/data-layer.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: events-congresses

## Scope

Public events calendar and the congresses (annual FAOPS meeting) content.

## Key files

| File                                        | Role                                     |
|---------------------------------------------|------------------------------------------|
| `src/pages/Events.jsx`                      | Calendar / event listing.                |
| `src/pages/EventDetails.jsx`                | Full-page event detail at `/events/:slug`.|
| `src/pages/Congresses.jsx`                  | Congress landing page.                   |
| `src/pages/SocietyCongresses.jsx`           | Society-facing congress detail page.     |
| `src/components/events/EventTabs.jsx`       | Tab switcher for event views.            |
| `src/components/events/EventHeader.jsx`     | Section header for events.               |
| `src/components/events/EventList.jsx`       | Flat list rendering.                     |
| `src/components/events/EventMonth.jsx`      | Month calendar (FullCalendar dayGrid).   |
| `src/components/events/EventDay.jsx`        | Day calendar (FullCalendar timeGrid).    |
| `src/data/eventsData.js`                    | Source of truth for events.              |

## Detail navigation contract (no modal)

Events **do not** use a popup. `EventModal.jsx` was deleted on 2026-07-29.

- `EventList` "Read More" renders a `<Link to={/events/${event.slug ?? event.id}}>`.
- `EventMonth` / `EventDay` `eventClick` handlers call
  `navigate(/events/${slug ?? id})` via `useNavigate`.
- None of the view components take a `setSelectedEvent` prop any more; they only
  receive `events`.
- `EventDetails.jsx` resolves the record with `getEventBySlug(slug)` from
  `src/data/eventsData.js` and renders a not-found block with a link back to
  `/events` when the slug is unknown.

## Data contract

`eventsData.js` is the single source of truth. Consumers rely on stable field
names for date, title, location, and category. Rename cascades must be applied
in the same commit as the data change.

Per-event fields: `id` (number), `slug` (URL param, unique + lowercase),
`title`, `date` (`YYYY-MM-DD`), `time` / `endTime` (`hh:mm AM|PM`), `location`,
`venue`, `category`, `image`, `organizer`, `audience`, `registration`,
`description` (card summary), `overview` (string[]), `highlights` (string[]),
`agenda` (`{ time, title, speaker }[]`).

`getEventBySlug(param)` is exported alongside the array; it matches on `slug`
first, then falls back to `String(id)` so legacy `/events/1` links resolve.

`EventDay` converts `time` / `endTime` from 12-hour strings to 24-hour ISO
fragments before handing them to FullCalendar.

## Routing

- `/events`               -> `Events`
- `/events/:slug`         -> `EventDetails`
- `/Congresses`           -> `Congresses`
- `SocietyCongresses` currently has **no route** in `src/App.jsx`. If it is
  meant to be reachable, add a route and update `routing-shell`. Otherwise the
  file is dead code -- flag in `state.md`.

## Change checklist

1. Update page/component/data.
2. If event schema changes, propagate to all `src/components/events/*`.
3. Bump `last_verified`.
4. `npm run memory:audit` and `npm run build`.
