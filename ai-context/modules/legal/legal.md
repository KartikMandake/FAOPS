---
file: ai-context/modules/legal/legal.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-25T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: tech-lead
update_triggers:
  - "PrivacyPolicy / TermsConditions / Cookiepolicy page edits"
  - "Change in data collection / third-party embeds that affects policy text"
verification_command: "npm run build"
anchors:
  - code:src/pages/PrivacyPolicy.jsx
  - code:src/pages/TermsConditions.jsx
  - code:src/pages/Cookiepolicy.jsx
memory_links:
  - CLAUDE.md
  - ai-context/modules/routing-shell/routing-shell.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: legal

## Scope

Policy pages: privacy, terms & conditions, cookies.

## Key files

| File                                | Role                                          |
|-------------------------------------|-----------------------------------------------|
| `src/pages/PrivacyPolicy.jsx`       | Privacy policy (`/PrivacyPolicy`).            |
| `src/pages/TermsConditions.jsx`     | Terms & conditions (`/TermsConditions`).      |
| `src/pages/Cookiepolicy.jsx`        | Cookie policy (`/Cookiepolicy`).              |

## Guardrails

- **Do not fabricate legal wording.** Policy text should be provided or
  reviewed by a human owner. If you need to add placeholder text, mark it with
  `[TODO: legal review]` and log it in `state.md`.
- If the site starts collecting data (contact form -> backend, analytics,
  cookies from third-party embeds), the corresponding policy MUST be updated
  in the same commit. This is the primary anti-drift trigger for this module.

## Change checklist

1. Update page copy.
2. If data-collection surface changed, note it in `state.md` and cross-link
   the module that introduced it (e.g. `contact-faq`, `appointment`).
3. Bump `last_verified`.
4. `npm run memory:audit` and `npm run build`.
