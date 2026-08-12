---
file: ai-context/modules/routing-shell/routing-shell.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-29T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: tech-lead
update_triggers:
  - "Any change to src/App.jsx (route table)"
  - "Any change to src/main.jsx (app bootstrap)"
  - "Any change to src/layout/MainLayout.jsx (shell)"
  - "Any change to src/components/ScrollToTop.jsx"
verification_command: "npm run build"
anchors:
  - code:src/App.jsx:1-120
  - code:src/main.jsx:1-15
  - code:src/layout/MainLayout.jsx:1-40
  - code:src/components/ScrollToTop.jsx:1-40
memory_links:
  - CLAUDE.md
  - ai-context/state.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: routing-shell

## Scope

The app's bootstrap, top-level route table, and the visual shell that wraps
every page.

## Key files

| File                                   | Role                                                   |
|----------------------------------------|--------------------------------------------------------|
| `src/main.jsx`                         | React 19 `createRoot`, mounts `<App />` in StrictMode. |
| `src/App.jsx`                          | Router + full route table (all pages).                 |
| `src/layout/MainLayout.jsx`            | Shell: TopBar, Navbar, `<Outlet />`, Footer, EmergencyBanner. Wraps the outlet in a Framer Motion fade. |
| `src/components/ScrollToTop.jsx`       | Resets scroll on route change.                         |

## Route table (from `src/App.jsx`)

All routes are nested under `MainLayout`.

| Path                       | Element                | Module               |
|----------------------------|------------------------|----------------------|
| `/`                        | `Home`                 | home                 |
| `/about`                   | `About`                | about-governance     |
| `/Publications`            | `Publications` (Pulication.jsx) | publications |
| `/events`                  | `Events`               | events-congresses    |
| `/events/:slug`            | `EventDetails`         | events-congresses    |
| `/doctors`                 | `Doctors`              | doctors              |
| `/doctors/:doctorId`       | `DoctorProfile`        | doctors              |
| `/departments`             | `Departments`          | departments-services |
| `/departments/:id`         | `DepartmentDetails`    | departments-services |
| `/services`                | `Services`             | departments-services |
| `/appointment`             | `Appointment`          | appointment          |
| `/gallery`                 | `Gallery`              | gallery-media        |
| `/gallery/faops2022`       | `FAOPS2022`            | gallery-media        |
| `/gallery/faops2023`       | `FAOPS2023`            | gallery-media        |
| `/faq`                     | `FAQ`                  | contact-faq          |
| `/contact`                 | `Contact`              | contact-faq          |
| `/History`                 | `History`              | about-governance     |
| `/Vision`                  | `Vision`               | about-governance     |
| `/Mission`                 | `Mission`              | about-governance     |
| `/Values`                  | `Values`               | about-governance     |
| `/Programs`                | `Programs`             | about-governance     |
| `/Council`                 | `Council`              | about-governance     |
| `/CommitteeChairperson`    | `CommitteeChairperson` | about-governance     |
| `/DeputySecretaryGeneral`  | `DeputySecretaryGeneral` | about-governance   |
| `/AdvisoryBoard`           | `AdvisoryBoard`        | about-governance     |
| `/OrganizationChart`       | `OrganizationChart`    | about-governance     |
| `/gallerygrid`             | `gallerygrid` (see notes) | gallery-media     |
| `/Constitution`            | `Constitution`         | about-governance     |
| `/GeneralAssembly`         | `GeneralAssembly`      | about-governance     |
| `/UsefulLinks`             | `UsefulLinks`          | contact-faq          |
| `/ContactUs`               | redirect -> `/contact` | contact-faq          |
| `/PrivacyPolicy`           | `PrivacyPolicy`        | legal                |
| `/Presidentcorner`         | `Presidentcorner`      | about-governance     |
| `/membership`              | `Membership` (index)   | membership           |
| `/MembershipPage`          | redirect -> `/membership` | membership        |
| `/Congresses`              | `Congresses`           | events-congresses    |
| `/Countrydetails`          | `Countrydetails`       | membership           |
| `/TermsConditions`         | `TermsConditions`      | legal                |
| `/Cookiepolicy`            | `Cookiepolicy`         | legal                |
| `/membership/:country`     | `Membership` (detail)  | membership           |

## Conventions

- Route paths are inconsistently cased (some `/about`, some `/History`). Do not
  "fix" casing without checking the Navbar / Footer links -- they use the same
  cased paths.
- All pages import from `src/pages/`. Sub-components live under
  `src/components/` (flat or feature-scoped).
- `MainLayout` wraps the outlet in a Framer Motion `initial/animate` fade;
  page-level animations should compose, not replace, that.

## Known issues

- `import gallerygrid from './pages/gallerygrid'` (lowercase). Using it as JSX
  (`<gallerygrid />`) makes React treat it as a DOM tag. Fix when touching
  gallery-media: rename file + import to `GalleryGrid` **or** re-target the
  route to an existing capitalised component.
- Commented-out placeholders for FAOPS2024 route -- clean up on next gallery
  touch.

## Change checklist

When editing this module:
1. Update the route table above.
2. Update the affected domain module memory file with the new route.
3. Bump `last_verified`.
4. Run `npm run memory:audit` and `npm run build`.
