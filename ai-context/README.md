---
file: ai-context/README.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-25T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: tech-lead
update_triggers:
  - "A module is added, renamed, or removed"
  - "The module map in CLAUDE.md / .cursorrules changes"
verification_command: "npm run memory:audit"
anchors: []
memory_links:
  - CLAUDE.md
  - ai-context/state.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../CLAUDE.md).
> This is the index / map of the memory tree. It is not a task board -- for
> that, see [state.md](state.md).

# Memory Tree Index

```
CLAUDE.md
|-- ai-context/
|   |-- README.md               (you are here -- module index)
|   |-- state.md                (live task/blocker board)
|   |-- archive/                (pruned history, older logs)
|   |   `-- README.md
|   `-- modules/
|       |-- routing-shell/          routing-shell.md
|       |-- navigation/             navigation.md
|       |-- home/                   home.md
|       |-- about-governance/       about-governance.md
|       |-- doctors/                doctors.md
|       |-- departments-services/   departments-services.md
|       |-- appointment/            appointment.md
|       |-- events-congresses/      events-congresses.md
|       |-- membership/             membership.md
|       |-- gallery-media/          gallery-media.md
|       |-- publications/           publications.md
|       |-- contact-faq/            contact-faq.md
|       |-- legal/                  legal.md
|       `-- data-layer/             data-layer.md
`-- scripts/
    |-- memory-audit.mjs
    |-- memory-doctor.mjs
    `-- memory-new.mjs
```

## Module -> source-path cheat sheet

| Module                | Owns paths (primary)                                                                                 |
|-----------------------|------------------------------------------------------------------------------------------------------|
| routing-shell         | `src/App.jsx`, `src/main.jsx`, `src/layout/MainLayout.jsx`, `src/components/ScrollToTop.jsx`         |
| navigation            | `src/components/layout/*`, `src/components/Footer.jsx`, `src/components/EmergencyBanner.jsx`         |
| home                  | `src/pages/Home.jsx`, `src/components/Hero.jsx`, `src/components/PresidentMessage.jsx`               |
| about-governance      | `src/pages/{About,History,Vision,Mission,Values,Programs,Council,CommitteeChairperson,DeputySecretaryGeneral,AdvisoryBoard,OrganizationChart,GeneralAssembly,Constitution,Presidentcorner}.jsx`, `src/components/about/*` |
| doctors               | `src/pages/{Doctors,DoctorProfile}.jsx`, `src/components/DoctorCard.jsx`, `src/data/doctors.js`      |
| departments-services  | `src/pages/{Departments,DepartmentDetails,Services}.jsx`, `src/components/DepartmentCard.jsx`, `src/data/department*.js*` |
| appointment           | `src/pages/Appointment.jsx`, `src/components/AppointmentForm.jsx`                                    |
| events-congresses     | `src/pages/{Events,Congresses,SocietyCongresses}.jsx`, `src/components/events/*`, `src/data/eventsData.js` |
| membership            | `src/pages/{MembershipPage,Membership,Countrydetails}.jsx`, `src/data/{membershipData,countryDetailsData}.js` |
| gallery-media         | `src/pages/{Gallery,gallerygrid,FAOPS2022,FAOPS2023}.jsx`, `src/components/GalleryGrid.jsx`, `public/gallery/*` |
| publications          | `src/pages/Pulication.jsx`, `src/data/publicationsData.js`, `public/*.pdf`                           |
| contact-faq           | `src/pages/{Contact,ContactUs,FAQ,UsefulLinks}.jsx`, `src/components/FAQItem.jsx`                    |
| legal                 | `src/pages/{PrivacyPolicy,TermsConditions,Cookiepolicy}.jsx`                                         |
| data-layer            | `src/data/*` (all static datasets and nav config)                                                    |

## Commands

- `npm run memory:audit`  -- validate frontmatter, links, and size caps.
- `npm run memory:doctor` -- detailed health check (orphans, stale nodes).
- `npm run memory:new -- ai-context/modules/<name>/<name>.md` -- scaffold a new
  memory node with correct frontmatter.
