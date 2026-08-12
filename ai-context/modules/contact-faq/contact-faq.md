---
file: ai-context/modules/contact-faq/contact-faq.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-29T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: feature-owner
update_triggers:
  - "Contact / FAQ / UsefulLinks page edits"
  - "FAQItem component edits"
  - "Any backend endpoint added for contact form submission"
verification_command: "npm run build"
anchors:
  - code:src/pages/Contact.jsx
  - code:src/pages/FAQ.jsx
  - code:src/pages/UsefulLinks.jsx
  - code:src/components/FAQItem.jsx
memory_links:
  - CLAUDE.md
  - ai-context/modules/routing-shell/routing-shell.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: contact-faq

## Scope

Support-facing pages: the contact page, FAQ, and the external "Useful Links"
list.

## Key files

| File                                | Role                                            |
|-------------------------------------|-------------------------------------------------|
| `src/pages/Contact.jsx`             | **The only** contact page (`/contact`).         |
| `src/pages/FAQ.jsx`                 | FAQ list.                                       |
| `src/pages/UsefulLinks.jsx`         | Outbound-link directory.                        |
| `src/components/FAQItem.jsx`        | Accordion item for FAQ entries.                 |

## Single contact page (decided 2026-07-29)

`src/pages/ContactUs.jsx` is **deleted**. `/contact` is canonical; `/ContactUs`
survives only as `<Navigate to="/contact" replace />` in `src/App.jsx`. Do not
add a second contact page -- extend `Contact.jsx` instead.

Every in-app entry point points at `/contact`: `navLinks.js` (Others > Contact
Us), `Footer.jsx`, `EventDetails.jsx`, `Departments.jsx`, `JoinFAOPS.jsx`, and
`FAQ.jsx`.

Page composition: `PageHero` + centered heading, then a 3-column grid
(info card with address / email / phone / response time + social row, and a
2-column form card), then a full-width map card. Palette is the site standard
`#344474` with `#F7DB07` accents, white `rounded-3xl` cards on
`border-slate-200` -- **not** the old `slate-900` header and `blue-600` buttons.

Canonical details (kept in sync with `TopBar.jsx`): `info@faopsperinatal.org`,
`(+91) 98220 96280`, Railway Lines, Solapur, Maharashtra 413001. The earlier
`Contact.jsx` carried leftover Q9-hospital template data (Anakapalli address,
`q9hospital2026@gmail.com`) -- do not reintroduce it.

## Notes

- The contact form is **client-only**: submit shows a local confirmation and
  clears state. Nothing is sent anywhere. Do not wire a fetch without first
  documenting the endpoint in `state.md`.
- The map is a keyless Google Maps `embed?pb=` iframe, so no API key is
  involved. If it is ever swapped for the JS API, move the key to an env var.

## Change checklist

1. Update page/component.
2. If a backend is wired in, add the endpoint contract here and to `state.md`.
3. Bump `last_verified`.
4. `npm run memory:audit` and `npm run build`.
