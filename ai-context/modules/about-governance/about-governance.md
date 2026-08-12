---
file: ai-context/modules/about-governance/about-governance.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-25T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: feature-owner
update_triggers:
  - "Any About / History / Vision / Mission / Values / Programs edit"
  - "Any Council / Committee / Advisory / Organization / General Assembly / Constitution edit"
  - "Any Presidentcorner edit"
  - "Any src/components/about/* edit"
verification_command: "npm run build"
anchors:
  - code:src/pages/About.jsx
  - code:src/pages/History.jsx
  - code:src/pages/Vision.jsx
  - code:src/pages/Mission.jsx
  - code:src/pages/Values.jsx
  - code:src/pages/Programs.jsx
  - code:src/pages/Council.jsx
  - code:src/pages/CommitteeChairperson.jsx
  - code:src/pages/DeputySecretaryGeneral.jsx
  - code:src/pages/AdvisoryBoard.jsx
  - code:src/pages/OrganizationChart.jsx
  - code:src/pages/GeneralAssembly.jsx
  - code:src/pages/Constitution.jsx
  - code:src/pages/Presidentcorner.jsx
  - code:src/components/about/AboutHero.jsx
  - code:src/components/about/CollaborationBanner.jsx
  - code:src/components/about/CountrySlider.jsx
  - code:src/components/about/JoinFAOPS.jsx
  - code:src/components/about/PageHero.jsx
  - code:src/components/about/StatsSection.jsx
  - code:src/components/about/VisionMission.jsx
  - code:src/components/about/WelcomeSection.jsx
memory_links:
  - CLAUDE.md
  - ai-context/modules/routing-shell/routing-shell.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: about-governance

## Scope

The organisation-identity content: who FAOPS is, what it stands for, and how it
is governed. This is the largest content module by page count -- keep this
file trim (<=250 lines) by delegating narrative content to the actual pages.

## Sub-areas

### About + identity
- `About.jsx`, `History.jsx`, `Vision.jsx`, `Mission.jsx`, `Values.jsx`,
  `Programs.jsx`

### Governance
- `Council.jsx`, `CommitteeChairperson.jsx`, `DeputySecretaryGeneral.jsx`,
  `AdvisoryBoard.jsx`, `OrganizationChart.jsx`, `GeneralAssembly.jsx`,
  `Constitution.jsx`

### Leadership voice
- `Presidentcorner.jsx`

### Shared components (`src/components/about/`)
- `AboutHero.jsx` -- hero header for these pages
- `PageHero.jsx` -- reusable page-header block
- `WelcomeSection.jsx` -- intro block
- `StatsSection.jsx` -- number tiles (members, countries, years, ...)
- `VisionMission.jsx` -- paired vision + mission block
- `CountrySlider.jsx` -- animated country strip (uses `flag-icons`)
- `CollaborationBanner.jsx` -- partner logos strip
- `JoinFAOPS.jsx` -- CTA to membership flow

## Conventions

- Prefer `PageHero` for consistent page-top styling across governance pages.
- Body copy should stay in the JSX for now; when a page grows past ~250 lines
  or two people are editing it, extract data into `src/data/`.
- Governance pages currently hard-code names and titles. If a shared roster
  emerges, promote it to `src/data/` and cross-reference from `data-layer`.

## Change checklist

1. Edit page/component.
2. If adding a new governance page, also update `routing-shell` route table.
3. Bump `last_verified`.
4. `npm run memory:audit` and `npm run build`.
