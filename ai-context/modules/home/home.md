---
file: ai-context/modules/home/home.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-29T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: feature-owner
update_triggers:
  - "Home page edits"
  - "Hero or PresidentMessage component edits"
  - "New hero asset added under public/"
  - "Hero DOM restructure (e.g., pulling stats out of the section)"
verification_command: "npm run build"
anchors:
  - code:src/pages/Home.jsx
  - code:src/components/Hero.jsx
  - code:src/components/PresidentMessage.jsx
  - code:src/index.css
memory_links:
  - CLAUDE.md
  - ai-context/modules/routing-shell/routing-shell.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: home

## Scope

The landing page (`/`) and the sections composed on it.

## Key files

| File                                       | Role                                        |
|--------------------------------------------|---------------------------------------------|
| `src/pages/Home.jsx`                       | Composes hero + president message + other featured sections. |
| `src/components/Hero.jsx`                  | Landing hero (banner, headline, CTAs).      |
| `src/components/PresidentMessage.jsx`      | President's message section.                |

## Notes

- Hero imagery lives in `public/` (`banner.webp`, `background.webp`,
  `ab-bg-discover.webp`, ...). Reference by absolute path (`/banner.webp`), not
  through the bundler.
- Framer Motion drives entrance animations; keep durations short (<=600ms) so
  the hero feels responsive on first paint.

## Hero right column (revised 2026-07-29)

The hero **right column is an explicit exception** to the borderless image
contract below. It was redesigned to a premium SaaS/healthcare look on client
request; the left column, buttons, typography, and the stats grid were left
untouched.

- Image: `rounded-[24px]`, `ring-1 ring-white/60`, and a **four-layer** soft
  shadow -- `0 2px 6px rgba(30,58,138,.06)`, `0 12px 28px rgba(30,58,138,.10)`,
  `0 30px 65px rgba(15,23,42,.16)`, `0 50px 100px rgba(15,23,42,.18)`.
  Navy-tinted, never neutral black. Tailwind composes `--tw-ring-shadow` and
  `--tw-shadow` into one `box-shadow`, so the ring and the layers coexist.
  `object-cover object-[center_35%]`, ladder `h-[250px] sm:h-[340px]
  md:h-[415px] lg:h-[460px]` with `max-w-[640px]`.
  **The height ladder is the zoom control.** Width is fixed by the column, so a
  shorter container means `object-cover` crops less vertically and more of the
  group is visible. To "zoom out" further, reduce these heights; do not add
  `scale-*` (that would letterbox inside the rounded frame).
- Entrance: Framer Motion `opacity 0 -> 1`, `y 30 -> 0`, `0.8s ease-out`. This
  is the one place on the home page allowed to exceed the 600ms guideline.
- **Three** glassmorphism stat cards replace the old single badge:
  45+ Years of Excellence (top left), 20+ Member Societies (bottom left),
  5000+ Healthcare Professionals (bottom right). Style:
  `bg-white/70 backdrop-blur-[22px] rounded-2xl border-white/50
  shadow-[0_18px_45px_rgba(30,58,138,0.14)]`. `hidden md:block` -- hidden on
  mobile by design.
- Card hierarchy is deliberate: the top card is smaller (`px-4 py-3`,
  `text-lg lg:text-xl`, `text-[10px] lg:text-[11px]`) than the two bottom cards
  (`px-5 py-3.5`, `text-xl lg:text-2xl`, `text-[11px] lg:text-xs`). Numbers stay
  bold navy; descriptions are intentionally small.
- Float is **CSS**, not JS, in `src/index.css`: `.hero-float`
  (+ `-delay-1` / `-delay-2`) moves cards `0 -> -8px -> 0` over 5.5s, and
  `.hero-float-slow` drifts the image `0 -> -10px -> 0` over 7s. Both
  ease-in-out infinite, negative delays stagger the cards, and
  `prefers-reduced-motion` disables both. Do not convert to Framer Motion
  loops -- this avoids four ever-running JS animations behind a Swiper.
- `.hero-float-slow` must stay on the **inner image wrapper**, never on the
  Framer Motion element, or the entrance transform and the loop overwrite each
  other's `transform`.
- Card placement: top card overlaps the top edge (`-top-4`); both bottom cards
  sit **inside** the image (`bottom-6`), and all three are inset `left-8`/
  `right-8` (`lg:10`) so nothing touches an edge. The section and Swiper both
  clip overflow, so keep outward offsets within the column's `py-6 sm:py-8`
  slack -- pushing to e.g. `-left-8` gets cut off.
- Decoration behind the image (four blue gradient blobs including one behind the
  bottom-right for balance, two dotted patterns, two medical crosses, one
  outline ring) is all `opacity-[0.05]`-`[0.09]`.
- Palette restricted to `#1E3A8A`, `#2563EB`, `#F8FAFC`, white. The old
  `#1E3A5F` rotated square and `#344474` circle were removed.
- Height: unchanged at every breakpoint. Tallest case is `lg` at 460px image +
  64px column padding = 524px, inside the slide's `min-h-[620px]`; `md` is
  415 + 48 = 463px against `min-h-[500px]`. The right column never drives the
  section height -- if you grow the image ladder past those budgets it will.
- Vertical centering comes from the slide grid's `items-center` plus **equal**
  `py-6 sm:py-8` on the column. Keep that padding symmetric or the image stops
  lining up with the left-hand copy.

## Image style contract (revised 2026-07-25)

Applies to home-page images **other than the hero right column** above:

- **No rounded corners on images.** Do not add `rounded-*` to `<img>` or its
  immediate wrapper. Decorative divs may keep radius.
- **No border or matte frame.** Wrap the image in a `relative` div that
  applies the shadow directly. Do NOT add `bg-white` padding or `border-*`
  around the image.
- **Shadow:** `shadow-[0_25px_50px_-12px_rgba(30,58,95,0.35)]`. This is a big
  soft navy-tinted drop shadow keyed to the FAOPS palette. Use this exact
  value for every home-page image so they feel like a set.
- **Image sizing:** responsive height ladder, no fixed pixel widths.
  Hero image uses `h-[240px] sm:h-[320px] md:h-[400px] lg:h-[440px]`,
  president image uses natural aspect with `w-full h-auto`.
- **Floating badge cards** that overlay an image sit **above** the image
  (`-top-4 sm:-top-6 lg:-top-8`), not below. On the smallest breakpoint they
  must stay inside container padding (`left-4`), never negative.

If a new image is added anywhere on the home page, apply the same shadow
recipe.

## Hero section structure (2026-07-25)

The hero is a **single `<section>`** that owns both the Swiper carousel and
the stats color grid. Do NOT split them into two sibling top-level nodes --
this reintroduces a visible seam where the section's gradient ends and the
parent `bg-slate-50` from `MainLayout` takes over.

- Wrapper: `<section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden -mt-30">`.
  The gradient starts and ends at `slate-50` so the section blends into the
  parent background at the top (below the navbar) and at the bottom (before
  the next home section).
- The stats grid sits inside the same section, pulled up by `-mt-10` so it
  overlaps the Swiper visually. Bottom padding lives on the stats wrapper
  (`pb-8 sm:pb-10`), not on the section.
- Stats cell dividers: `sm:border-r sm:border-white/10` only. No horizontal
  divider on mobile (cells share the same navy background).

## Responsive breakpoints in force

- Slide grid: `min-h-[500px] lg:min-h-[620px]`
- Section padding: `py-10 sm:py-14 lg:py-16` on the hero
- H1 ladder: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
- Vertical rhythm on the Home page: `space-y-16 md:space-y-24 lg:space-y-28`
- CTA block: `p-8 sm:p-12 md:p-20` with `rounded-[2rem] sm:rounded-[3rem]`
- Floating badge cards must stay inside container padding on mobile
  (`left-2 sm:-left-4 lg:-left-8`), never negative on the smallest breakpoint.

## Change checklist

1. Update page/component code.
2. If asset paths change, update `anchors:` above.
3. If image styling deviates from the frame contract above, update this file.
4. Bump `last_verified`.
5. `npm run memory:audit` and `npm run build`.
