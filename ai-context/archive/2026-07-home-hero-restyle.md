---
file: ai-context/archive/2026-07-home-hero-restyle.md
parent: ai-context/archive/README.md
children: []
last_verified: 2026-07-25T15:30:00Z
next_review_due: code-change-bound
lifecycle_stage: archive
owner_role: feature-owner
update_triggers: []
verification_command: "npm run memory:audit"
anchors:
  - code:src/components/Hero.jsx
  - code:src/components/PresidentMessage.jsx
  - code:src/components/Footer.jsx
  - code:src/pages/Home.jsx
memory_links:
  - ai-context/archive/README.md
  - ai-context/modules/home/home.md
  - ai-context/modules/navigation/navigation.md
---

> **You are reading an archived memory file.** Full protocol:
> [CLAUDE.md](../../CLAUDE.md). Do not edit past entries; new archive
> content should be added as a new file under `ai-context/archive/`.

# 2026-07 -- Home hero and footer image restyle

Sequence of changes captured here for history. The **current** image and
hero-structure contract lives in `ai-context/modules/home/home.md` and
`ai-context/modules/navigation/navigation.md`; use those, not this file, when
making new edits.

## Change log

### v1 -- Framed-rectangle style (superseded)

Removed rounded corners on all `<img>` in `Hero.jsx`, `PresidentMessage.jsx`,
and the Footer gallery. Applied a "framed rectangle" contract:

- `bg-white p-2 sm:p-3 lg:p-4` padding
- `border-2 border-[#1E3A5F]` navy stroke
- `shadow-2xl shadow-slate-900/25`
- Responsive height ladder on Hero image
  (`h-[240px] sm:h-[320px] md:h-[400px] lg:h-[440px]`)

Same pass tightened Home page responsiveness: Hero slide
`min-h-[500px] lg:min-h-[620px]`, H1 gained sm/md steps, wrap on CTA buttons,
decorative-shape sizes stepped by breakpoint, floating badge cards moved
inside container padding on mobile
(`left-2 sm:-left-4 lg:-left-8`), Home shell vertical rhythm reduced on
mobile (`space-y-16 md:space-y-24 lg:space-y-28`, `pb-14 md:pb-20 lg:pb-24`),
CTA text and padding gained sm/md steps.

### v2 -- Borderless floating photo (superseded within the same day)

Dropped the framed-rectangle look. New contract for Hero + PresidentMessage
images:

- No border, no white matte padding.
- Wrapper applies a single soft navy drop shadow:
  `shadow-[0_25px_50px_-12px_rgba(30,58,95,0.35)]`.
- Hero "45+ Years" badge moved from bottom-left to top-left of the image
  (`-top-4 sm:-top-6 lg:-top-8`) with own softer shadow
  (`shadow-xl shadow-slate-900/15`).
- Stats color-grid dividers softened from `border-white/20` to
  `border-white/10`; mobile horizontal divider removed so the grid blends
  into the section.

### v3 -- Single unified hero section (current)

Hero.jsx used to return a Fragment with two top-level siblings: a `<section>`
for the Swiper and a sibling `<div>` for the stats grid. The gap between
them exposed the parent `bg-slate-50` from `MainLayout`, showing as a thin
seam across the hero.

Merged both into one `<section>`. Switched the gradient from
`bg-gradient-to-br from-slate-50 via-white to-blue-50` to
`bg-gradient-to-b from-slate-50 via-white to-slate-50` so the section
starts and ends at the parent's exact color, giving seamless top/bottom
transitions. Rule now lives in `ai-context/modules/home/home.md` under
"Hero section structure".

## Footer image style (still in force)

Footer gallery tiles keep the dark-surface contract from v1:
`border-2 border-white/15 hover:border-[#F7DB07]`,
`shadow-lg shadow-slate-950/40`, `w-full aspect-square object-cover`. See
`ai-context/modules/navigation/navigation.md`.
