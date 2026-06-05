---
name: openaisle-design
description: Use this skill to generate well-branded interfaces and assets for OpenAisle (a marketplace where guests buy a seat to attend weddings from other cultures, and couples offer seats to offset costs), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# OpenAisle design skill

Read `README.md` first — it holds the brand context, content fundamentals, visual foundations, and iconography. Then explore the other files.

## What's here
- `README.md` — the full brand brief: voice & copy rules, visual foundations, iconography, and an index of everything.
- `colors_and_type.css` — all design tokens (color, neutrals, semantic status, shadows, radii, spacing) and semantic type roles. **Load this first** in any artifact: `<link rel="stylesheet" href="colors_and_type.css">`.
- `assets/openaisle-mark.svg` — the ceremonial-arch logomark (monochrome, uses `currentColor`). The wordmark is set live in Cormorant Garamond 600 ("Open" in ink, "Aisle" in saffron-deep).
- `preview/` — small specimen cards for every token group (color, type, spacing, components, brand) — handy reference.
- `ui_kits/website/` — the marketing site (openaisle.com) as interactive React/JSX components.
- `ui_kits/app/` — the booking product (browse → wedding detail → checkout → confirmation) as interactive React/JSX.

## How to work
- **Fonts:** Cormorant Garamond (display/serif, emotional moments) + Hanken Grotesk (UI/body), loaded via Google Fonts CDN in `colors_and_type.css`.
- **Icons:** Lucide via CDN (`https://unpkg.com/lucide@latest`), 1.75–2px stroke, round caps.
- **Imagery:** use the warm saffron→claret duotone `PhotoFrame` placeholders (or `image-slot` drop zones) until real ceremony photography exists. Never invent photos.
- **Voice:** gracious host — warm, literate, "you"/"we", sentence case, no emoji. People are *guests* and *couples*, the thing you buy is a *seat*.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy the assets/tokens you need out of this folder and build static HTML for the user to view. If working on production code, copy assets and read the rules here to design natively in the brand.

If the user invokes this skill without other guidance, ask what they want to build or design, ask a few focused questions, and act as an expert OpenAisle designer who outputs HTML artifacts or production code as the need dictates.
