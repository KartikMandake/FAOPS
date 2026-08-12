---
file: ai-context/modules/gallery-media/gallery-media.md
parent: CLAUDE.md
children: []
last_verified: 2026-07-29T00:00:00Z
next_review_due: code-change-bound
lifecycle_stage: active
owner_role: feature-owner
update_triggers:
  - "Gallery / gallerygrid / FAOPS2022 / FAOPS2023 page edits"
  - "GalleryGrid component edits"
  - "New images added under public/gallery/"
verification_command: "npm run build"
anchors:
  - code:src/pages/Gallery.jsx
  - code:src/pages/gallerygrid.jsx
  - code:src/pages/FAOPS2022.jsx
  - code:src/pages/FAOPS2023.jsx
  - code:src/components/GalleryGrid.jsx
  - code:src/components/gallery/GalleryLightbox.jsx
  - asset:public/gallery/
memory_links:
  - CLAUDE.md
  - ai-context/modules/routing-shell/routing-shell.md
---

> **You are reading a memory file.** Full protocol: [CLAUDE.md](../../../CLAUDE.md).

# Module: gallery-media

## Scope

Photo galleries: general gallery, per-congress galleries (FAOPS 2022 / 2023),
and the shared grid renderer.

## Key files

| File                                  | Role                                          |
|---------------------------------------|-----------------------------------------------|
| `src/pages/Gallery.jsx`               | Gallery landing (`/gallery`).                 |
| `src/pages/gallerygrid.jsx`           | See note below -- lowercase filename.         |
| `src/pages/FAOPS2022.jsx`             | `/gallery/faops2022` congress album.          |
| `src/pages/FAOPS2023.jsx`             | `/gallery/faops2023` congress album.          |
| `src/components/GalleryGrid.jsx`      | Reusable grid layout used by album pages.     |
| `src/components/gallery/GalleryLightbox.jsx` | Shared full-screen carousel viewer.    |
| `public/gallery/`                     | Album images (webp).                          |

## Lightbox contract (2026-07-29)

Album pages must **not** hand-roll a single-image modal. Both `FAOPS2022.jsx`
and `FAOPS2023.jsx` now render one shared `GalleryLightbox`.

It is a **controlled** component -- the page owns the index:

| Prop            | Meaning                                              |
|-----------------|------------------------------------------------------|
| `items`         | `string[]` **or** `{ src, caption }[]`.               |
| `index`         | Active index, or `null` when closed.                 |
| `onIndexChange` | Called with the next index (thumbs / arrows / swipe). |
| `onClose`       | Called by the X button, backdrop click, and Escape.  |

Behaviour: prev/next arrows, wrap-around at both ends, left/right arrow keys,
Escape to close, `n / total` counter, bottom thumbnail strip that scrolls the
active thumb into view, drag/swipe on the image, and `body` scroll lock while
open.

Wiring rules for pages:

- Flat galleries (`FAOPS2023`) pass the grid index straight through, so grid
  order and carousel order stay identical.
- Sectioned galleries (`FAOPS2022`) flatten every section into one list
  (`flatImages`) and use `sectionOffsets[sectionIndex] + index` on click, so the
  carousel runs across the whole album while showing the section title as the
  caption. If a section is added or reordered, both derived arrays recompute
  automatically -- do not hardcode offsets.

## Known issues (open)

- **`gallerygrid` casing.** `src/App.jsx` imports and renders `<gallerygrid />`
  from `src/pages/gallerygrid.jsx`. React treats a lowercase JSX tag as a DOM
  element, so this route currently renders nothing meaningful. When you touch
  this module:
    1. Rename the file to `GalleryGrid.jsx` (page-level) OR delete it and
       repoint the route to an existing capitalised component.
    2. Update the import in `src/App.jsx` and the route table in
       [`routing-shell`](../routing-shell/routing-shell.md).
- **Commented `FAOPS2024` route.** Placeholder in `src/App.jsx` -- either
  implement or remove.

## Asset conventions

- All gallery images live in `public/gallery/` and are referenced with
  absolute paths (`/gallery/DSC1090.webp`).
- Prefer `.webp` for new photos to keep pages fast.

## Change checklist

1. Update page/component or add images to `public/gallery/`.
2. If you add a new album page, add its route in `routing-shell`.
3. Bump `last_verified`.
4. `npm run memory:audit` and `npm run build`.
