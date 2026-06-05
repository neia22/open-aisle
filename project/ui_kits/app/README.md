# OpenAisle — Product App UI Kit

A high-fidelity recreation of the OpenAisle **booking product** — the signed-in surface where a guest discovers a wedding, reads the couple's story, and reserves a seat. Built as a single-page click-through.

> **Proposed v1**, built from the brand brief — no production app exists to mirror yet.

## Run it
Open `index.html`. Loads `app.css` (which `@import`s root `colors_and_type.css`), React + Babel, and Lucide from CDN. Internet required for fonts/icons.

## The flow (fully clickable)
1. **Browse** — search bar in the app bar, culture filter chips that filter live, a grid of `WeddingCard`s. Click any card →
2. **Wedding detail** — a 3-panel photo gallery, the couple's note + verified host card, a "What to expect" grid, an hour-by-hour schedule, dress code & inclusions, and a **sticky booking box** with a working **seat stepper** and live price math. Click *Reserve* →
3. **Checkout** — attendee + payment fields (focus states), a sticky **order summary** card. Click *Confirm & reserve* →
4. **Confirmation** — a celebratory seat "ticket" with a generated seat code, date/time/dress cells, and next actions.

The app bar (logo, saved, trips, avatar) persists across every screen; the logo and back links navigate home.

## Files
- `index.html` — shell + `App` state machine (`browse → detail → checkout → confirmed`).
- `app.css` — all kit styling.
- `shared.jsx` — `Icon`, `ArchMark`, `Logo`, `GRAD` presets, `seatChip()`, and the rich `WEDDINGS` dataset (story, expectations, schedule, host, inclusions per wedding).
- `Browse.jsx` — `AppBar`, `WeddingCard`, `Browse`.
- `Detail.jsx` — `Detail` page + `BookBox` (seat stepper).
- `Checkout.jsx` — `Checkout` (form + `SummaryCard`) and `Confirmation` (ticket).

## Notes
- **Photography is placeholder** — duotone `GRAD` panels with mono captions stand in for real ceremony photos.
- **Icons are Lucide** (substituted; see root README).
- Cosmetic recreation only — no real auth, payment, or persistence. Form fields are illustrative.
- Reuses the exact token system and `WeddingCard` language as the website kit, so the two surfaces feel like one product.
