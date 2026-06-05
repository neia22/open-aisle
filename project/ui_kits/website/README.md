# OpenAisle — Website UI Kit (openaisle.com)

A high-fidelity recreation of the OpenAisle **marketing site** homepage: the public, top-of-funnel surface that introduces the marketplace to curious guests and prospective host couples.

> **This is a proposed v1**, built from the brand brief — there is no production site to mirror yet.

## Run it
Open `index.html`. It loads `site.css` (which `@import`s the root `colors_and_type.css`), React + Babel, and Lucide from CDN. Internet is required for fonts/icons.

## What's interactive
- **Sticky nav** that gains an ivory blur + hairline border once you scroll.
- **Hero search bar** (segmented Where / When / Tradition + saffron go button).
- **How it works** toggle — switch between the *guest* and *couple* three-step journeys.
- **Discover grid** — culture filter chips (All / South Asian / West African / …) filter the wedding cards live; each card has a working **save (heart)** toggle.
- Hover states throughout (cards lift, buttons darken + rise, filters wash).

## Files
- `index.html` — page shell + `App` composition.
- `site.css` — all kit styling (buttons, nav, hero, cards, sections, footer, responsive + page-load reveal).
- `shared.jsx` — `Icon` (Lucide injector), `ArchMark`, `Logo`, the `GRAD` duotone presets, and seed data (`WEDDINGS`, `STEPS`).
- `Sections1.jsx` — `Nav`, `Search`, `Hero`, `HowItWorks`.
- `Sections2.jsx` — `WeddingCard`, `Discover` (grid + filters), `CouplesBand`, `Quote`, `Footer`.

## Sections, top to bottom
1. **Nav** — logo lockup, primary links, language, sign-in, "Host a wedding".
2. **Hero** — eyebrow, serif headline with claret italic accent, lede, search, trust strip, and an overlapping duotone photo cluster with a live-welcome float chip.
3. **How it works** — guest/couple toggle over three icon steps (on a paper band).
4. **Discover** — filterable grid of `WeddingCard`s (the signature component).
5. **Couples band** — claret CTA panel with offset stats.
6. **Quote** — editorial serif pull-quote under the arch mark.
7. **Footer** — ink-dark, four columns + social.

## Notes
- **Photography is placeholder.** Every image is a warm duotone `frame`/`PhotoFrame` block with a mono caption; swap in real ceremony photography (and consider `image-slot` drop zones) when available.
- **Icons are Lucide** (substituted set — see root README). A few brand-social glyphs (instagram/youtube) may warn in console if absent from the CDN build; they degrade gracefully.
- Components are intentionally cosmetic recreations — not production data/auth.
