# Akansha Jain Portfolio — 5-Variant Redesign

## Original Problem Statement
> https://akanshajain.dev/ — using the same content, create a clean professional redesign with 5 design ideas, use all text, images. you can structure sections as needed.

## User Choices
- One main page + persistent top switcher to toggle between 5 variants
- Scrape exact content + images from akanshajain.dev
- Frontend only (no backend)
- Design agent selected the 5 aesthetics

## Architecture
- React 19 SPA, Tailwind, framer-motion. Google Fonts + Fontshare CDN for typography.
- Variant state in `Portfolio.jsx`, persisted to `localStorage` under key `akansha-redesign-variant`.
- Each section component branches on `variant` prop to render a visually distinct treatment.

## File Map
- `/app/frontend/src/App.js` — router → Portfolio
- `/app/frontend/src/components/Portfolio.jsx` — orchestrator + state
- `/app/frontend/src/components/VariantSwitcher.jsx` — fixed top center switcher
- `/app/frontend/src/components/sections/Hero.jsx` — 5 distinct hero treatments
- `/app/frontend/src/components/sections/Marquee.jsx` — marquee of conference stages
- `/app/frontend/src/components/sections/Talks.jsx` — SelectedTalks, FeaturedTalk, Archive (with filter tabs)
- `/app/frontend/src/components/sections/Timeline.jsx` — 4 distinct timeline layouts (classic/brutalism/playful/swiss)
- `/app/frontend/src/components/sections/StatsTopics.jsx` — Stats (Bento variations) + Topics chips
- `/app/frontend/src/components/sections/Extras.jsx` — Codelabs, Leadership, Contact + footer
- `/app/frontend/src/lib/data.js` — scraped content
- `/app/frontend/src/lib/variants.js` — variant metadata + design tokens

## 5 Variants (by id)
1. **editorial** — Editorial Magazine (Cormorant Garamond + Outfit, warm linen #FDFBF7, brick accent #9A3B26)
2. **brutalism** — Code Brutalism (JetBrains Mono, terminal black, neon green #00FF41)
3. **luxury** — Dark Luxury (Playfair Display + Manrope, deep charcoal #0B0C10, metallic gold #D4AF37)
4. **playful** — Playful Creative (Cabinet Grotesk + Figtree, neobrutalist, hot pink #FF4A8D, electric blue #0047FF)
5. **swiss** — Minimal Swiss (Clash Display + Satoshi, strict 12-col grid, red dot #FF3333)

## Sections Implemented
Hero (with rotating multilingual greeting), Marquee, Selected Talks (5), Featured Talk (image + meta), Journey Timeline (6 milestones), Complete Archive (filter tabs + 8 cards + Load More), Stats Bento (6 metrics), Topics (12 chips), Codelabs (2), Leadership (Speaker of the Day feature + 8 role cards), Contact CTA, Footer.

## Test Status (iteration_1)
- 9/9 scenarios PASS after fix (default load, switcher buttons, localStorage persistence, panel toggle/rows, all sections present, external images load, archive filter, external CTA hrefs/target=_blank, no console errors).
- Fix applied: added `target="_blank"` + `rel="noopener noreferrer"` to all 5 `hero-cta-primary` anchors in `Hero.jsx`.

## P1/P2 Backlog
- P1: Persist variant choice in URL (`?v=brutalism`) for shareable design links.
- P2: Add page-load entrance animations per variant (stagger reveals already partially in luxury).
- P2: Implement actual full archive of 54 talks (currently shows 8 sample + alert on Load More).
- P2: Add print/PDF view for the active variant.
- P2: Replace localStorage scroll-to-top on variant change with a smoother cross-fade.

## Next Action Items
- Optional: add a "Share this design" button that copies the URL with the active variant as a query param.
- Optional: extend archive grid to full 54 entries by completing the dataset.
