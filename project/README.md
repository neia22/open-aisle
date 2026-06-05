# OpenAisle — Design System

> **A seat at the world's celebrations.**

OpenAisle is a two-sided marketplace for cultural wedding experiences. **Guests** — curious, open-minded travellers and culture-lovers — purchase a seat to attend a real wedding from a tradition different to their own. **Couples** offer a limited number of seats to interested attendees and use the proceeds to offset the cost of their celebration. It sits at the intersection of *hospitality marketplace* (think Airbnb for ceremonies), *cultural-experience travel*, and the once-in-a-lifetime emotional weight of a wedding.

The brand has to hold two feelings at once: the **warmth, intimacy and ceremony of a wedding** and the **trust, clarity and ease of a modern booking product**. Guests are paying to enter a stranger's most meaningful day; couples are inviting strangers into it. Everything must feel gracious, safe, and genuinely curious about other cultures — never voyeuristic, never kitsch.

---

## Sources

This system was created **from scratch** from a written brief. There was **no existing codebase, Figma file, deck, or asset library** to import — so every token, asset, and component here is original to this exercise and represents a proposed v1 identity, not a recreation of shipped product.

- **Brief:** "OpenAisle lets guests experience weddings from different cultures by purchasing a seat, while couples can offset some of their wedding costs by offering a limited number of seats to interested attendees." Target audience: *curious and open-minded.*
- **Fonts:** Cormorant Garamond + Hanken Grotesk, loaded from **Google Fonts CDN** (no licensed binaries were provided; nothing self-hosted in `/fonts`).
- **Icons:** **Lucide** line icons via CDN — a flagged substitution (there is no native OpenAisle icon set yet).
- **Imagery:** placeholder photo frames + `image-slot` drop zones. **No real photography exists yet** — see Caveats.

If you have access to a real OpenAisle codebase or Figma, re-attach it via the Import menu and this system should be reconciled against it.

---

## Brand concept

The organising metaphor is the **ceremonial arch** — the chuppah, the mandap, the church arch, the moon gate. Nearly every culture frames its vows beneath an arch. OpenAisle's logomark is an abstract arch *open at the base*: the open aisle you're invited to walk through. The whole system is built like a **beautifully letter-pressed invitation that learned to take bookings**: warm ivory paper, fine gold hairlines, an elegant serif for the emotional moments, and a clean humanist sans for the work of choosing a seat and paying for it.

**One-line positioning:** *Pull up a chair at a celebration that isn't yours — and leave understanding it like it is.*

---

## CONTENT FUNDAMENTALS

How OpenAisle writes.

**Voice:** gracious host. Warm, literate, quietly excited about the world. We sound like a well-travelled friend introducing you to their family's traditions — confident but never lecturing, hospitable but never saccharine.

**Person:** speak to the reader as **"you"**; the brand is **"we"**. Couples and guests are always **people**, never "users". A wedding is a **celebration** or a **ceremony**, the thing you buy is a **seat**, and the act is being **invited** / **welcomed**.

**Tone & register:** emotionally generous, plain-spoken in the product, more lyrical in the marketing. We let the serif carry the romance so the copy can stay clear. Short sentences. Real specifics over adjectives ("a Tamil ceremony with a 200-marigold garland exchange" beats "a beautiful traditional wedding").

**Casing:** Sentence case everywhere — headlines, buttons, nav. We never SHOUT in all-caps except for the small letterspaced eyebrow labels, which are a deliberate typographic device, not a tone of voice.

**Numbers & specifics:** lead with the concrete — number of seats, the city, the tradition, the price per seat. Trust is built from specifics.

**Emoji:** **none.** The arch mark and warm photography carry the warmth; emoji would cheapen the ceremony. Unicode is used only as real typographic punctuation (the en-dash separator " · ", true curly quotes).

**Examples — yes:**
- "Three seats left at Priya & Daniel's mandap."
- "You won't be a tourist. You'll be a guest — with a place card and a plus-one's worth of stories."
- "Offer a few seats. Offset a little of the day. Meet someone who'll remember it forever."
- "What to wear, what to bring, and when to stand: we'll brief you before the day."

**Examples — no:**
- "Unlock unforgettable wedding experiences!! 🎉💍" (hype, emoji)
- "Users can purchase tickets to events." (cold, "users", "tickets")
- "EXPERIENCE THE MAGIC OF GLOBAL TRADITIONS" (all-caps shouting, empty adjectives)

---

## VISUAL FOUNDATIONS

**Overall feel:** warm editorial hospitality. Printed-invitation calm meets a modern booking flow. Light theme always; the "dark" surface is deep claret, never black.

**Color.** Warm ivory paper (`--ivory #FBF5EC`) is the default ground — never stark white. **Saffron** (`#DE7A2C`) is the primary accent: marigolds, candlelight, garlands, celebration — used for primary CTAs, key highlights, the brand "Aisle". **Claret** (`#7E2741`) is the ceremonial deep tone for romance, footers, dark panels, and emphasis. **Sage** (`#71805C`) is the calm supporting voice (foliage, secondary tags, "available" states). **Gold** (`#B08A4F`) appears *only* as hairlines and fine foil details, never as a fill. Text is a warm near-black ink (`#251C1A`), not pure black. Semantic colours are pulled from the same warm family (warning reuses saffron-deep, positive is a muted sage-green).

**Type.** Two families. **Cormorant Garamond** (serif) carries every emotional/display moment — heroes, headlines, prices on detail pages, pull-quotes — and provides the italic accent word in claret. **Hanken Grotesk** (humanist sans) does all the UI work: body, labels, buttons, tables, captions. Display is set tight (-1% to -1.5% tracking, ~1.0 line-height); body is generous (1.6). Eyebrows are the only uppercase: 12px, 0.18em tracking, saffron-deep.

**Spacing & layout.** 4px base scale. Content column maxes at 1200px with generous gutters. Layouts are calm and editorial — a strong asymmetric hero (serif headline left, framed photo right), then orderly card grids. We let negative space breathe; density is reserved for tables (seat manifests, booking summaries).

**Backgrounds.** Solid warm ivory is the norm. Atmosphere comes from: (1) **fine gold/border hairlines** framing sections like an invitation border; (2) occasional **claret or saffron-tint wash** blocks to separate sections; (3) **warm full-bleed photography** for heroes and wedding cards; (4) a very subtle paper warmth. **No** mesh gradients, no glassmorphism, no neon. A single soft radial saffron glow is permitted behind a hero, at low opacity.

**Imagery.** Photo-forward and human: real ceremonies, hands, garlands, food, faces mid-celebration. Warm-toned, natural light, gentle film warmth — never cold, never heavily filtered, never b&w. Every photo sits in a **PhotoFrame**: rounded corners (`--r-lg`), a 1px inset warm hairline (`--ring-inset`), and an optional serif caption beneath ("Marigold ceremony · Jaipur"). Until real photography exists, frames render as a warm saffron→claret duotone block with a small caption and camera glyph, or as an `image-slot` drop zone.

**Corner radii.** Soft, hospitable, but not bubble-round: cards `--r-lg 20px`, inputs/small cards `--r-md 14px`, hero/modal panels `--r-xl 28px`, and **buttons + chips + tags are full pills** (`--r-pill`) — the one place we go fully round, for a friendly, ticketed feel.

**Cards.** White-paper surface (`--paper #FFFDF8`) on ivory ground, 20px radius, 1px `--border` hairline, and a soft **warm-tinted** shadow (shadows are brown-warm `rgba(58,40,22,…)`, never grey). Wedding cards lead with a framed photo, then a tight info block (couple, tradition, city, date), a seats-left chip, and a price.

**Elevation / shadows.** Five-step warm shadow scale (`--shadow-xs … --shadow-xl`) plus a `--ring-inset` hairline. Resting cards use `--shadow-sm`; on hover they lift to `--shadow-md`. Modals/sheets use `--shadow-xl`. No hard black drop shadows.

**Borders.** Hairlines do a lot of work here. Default `--border #E8DECF`; emphasized/hover `--border-strong`. Gold hairlines (`--gold`) are reserved for decorative invitation-style rules and dividers between ceremony details.

**Motion.** Gentle and gracious. One signature ease — `cubic-bezier(0.22,1,0.36,1)` — for everything. Hovers and reveals are **fades + small rises** (6–10px), 180–260ms. Page-load: a single staggered reveal of the hero (eyebrow → headline → lede → CTA → photo), 60ms stagger. **No bounces, no spins, no parallax, no infinite loops.** Respect `prefers-reduced-motion`.

**Hover states.** Buttons darken (saffron → saffron-deep) and lift 1px; cards lift to `--shadow-md` and the border goes `--border-strong`; links gain a saffron underline that grows from left. Ghost/secondary controls fill with a faint saffron-tint wash.

**Press states.** Translate down 1px and drop to `--shadow-xs` (a gentle "settle"), with a slightly deeper fill. No aggressive scale-down.

**Transparency & blur.** Used sparingly: a sticky nav uses an ivory `backdrop-blur` at ~80% opacity once scrolled; image captions sit on a soft bottom **protection gradient** (warm ink, transparent → 55%) rather than a solid bar. No frosted-glass cards.

**Focus & accessibility.** Focus ring is a 3px `--saffron-soft` halo (`box-shadow`, offset), visible on keyboard nav. Body text targets AA on ivory; the saffron CTA uses white text and meets contrast at button sizes. Touch targets ≥ 44px.

---

## ICONOGRAPHY

There is **no native OpenAisle icon set**. We adopt **[Lucide](https://lucide.dev)** (the open-source successor to Feather) as the system icon library, loaded from CDN. **This is a flagged substitution** — if a bespoke set is ever drawn, it should keep Lucide's qualities below.

- **Style:** line icons, **1.75–2px stroke**, round caps and joins, no fills, drawn on a 24px grid. This matches the brand's fine-hairline, letter-pressed feel far better than a filled or duotone set.
- **Color:** icons inherit `currentColor` — usually `--ink-2` for UI, `--saffron-deep` for active/brand moments, white on claret/saffron surfaces.
- **Sizing:** 16px inline with text, 20px in buttons/nav, 24px+ for feature/marketing.
- **Common glyphs:** `map-pin` (city), `calendar` (date), `users` / `armchair` (seats), `heart` (save), `globe` (tradition/culture), `utensils` (the feast), `music` (ceremony), `shield-check` (trust & safety), `ticket` (your seat), `arrow-right` (CTAs).
- **The logomark is not an icon.** The ceremonial arch (`assets/openaisle-mark.svg`) is brand-only; never use it as a UI glyph.
- **Emoji:** never used as iconography or decoration (see Content Fundamentals). Unicode is punctuation only.
- **How to load:** `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`, or per-icon `<i data-lucide="map-pin"></i>`.

Brand assets live in `assets/`:
- `openaisle-mark.svg` — the ceremonial arch logomark (monochrome, `currentColor`).
- The wordmark is set live in **Cormorant Garamond 600** ("Open" in ink, "Aisle" in saffron-deep); see any UI kit header for the lockup. No raster wordmark is committed — set it in type.

---

## Index — what's in this system

**Root foundations**
- `README.md` — this file: context, content & visual foundations, iconography, index.
- `colors_and_type.css` — all design tokens: color, neutrals, semantic status, shadows, radii, spacing, type families, and semantic type roles (`.oa-display`, `.oa-h1`, `.oa-eyebrow`, …). **Load this first in every artifact.**
- `SKILL.md` — Agent-Skill manifest so this folder can be used as a downloadable Claude skill.

**Assets** — `assets/`
- `openaisle-mark.svg` — the arch logomark.

**Design-system preview cards** — `preview/`
- Small specimen cards (color, type, spacing, components, brand) that populate the Design System tab. Reusable as reference.

**UI kits** — `ui_kits/`
- `website/` — the **marketing site** (openaisle.com): nav, hero, how-it-works, featured-weddings grid, host CTA, footer. `index.html` is an interactive homepage.
- `app/` — the **product**: discover/browse weddings, a wedding detail + seat-booking page, and the host-a-wedding flow. `index.html` is an interactive click-through.

*(No `slides/` — no deck template was provided in the brief.)*

---

## Caveats

- **No real photography.** Every image is a styled placeholder or `image-slot` drop zone. Real, warm, respectful ceremony photography is the single biggest thing this brand needs next.
- **Fonts via CDN.** Cormorant Garamond + Hanken Grotesk are Google-Fonts-hosted, not self-hosted — see the note in `colors_and_type.css`.
- **Icons are Lucide (substituted).** No bespoke OpenAisle icon set exists yet.
- **From-scratch identity.** This is a proposed v1, not a recreation of a live product. Reconcile against any real codebase/Figma when available.
