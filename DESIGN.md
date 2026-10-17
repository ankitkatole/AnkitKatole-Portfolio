# Design System & Architectural Standards

**Ankit Katole - Personal Developer Portfolio & Engineering Journal**  
*Art Direction: Premium Tech Meets Quiet Luxury*

---

## 1. Design Philosophy

This design rejects generic startup tropes, template homogeny, and AI-generated clichés. It is conceived as the digital workspace of a senior-minded backend software engineer who values:

- **Quiet Luxury:** Restraint, intentionality, and deliberate whitespace rather than decorative flash.
- **Technical Rigor:** Authentic code excerpts, concrete architectural diagrams, real event pipelines, and verifiable credentials.
- **Editorial Typography:** High-contrast type hierarchy, balanced headline wraps, and monospace labels acting as structural anchors.
- **Tactile Surfaces:** Muted walnut, deep graphite, and warm off-white, accented with disciplined burnished copper.

---

## 2. Palette & Surface Architecture

The color system is inspired by dark walnut, brushed metal, graphite, and patinated copper. It uses a single dominant surface, one elevated surface, and one accent color.

| Token | Hex / Value | Purpose |
|---|---|---|
| `--bg-primary` | `#141210` | Deep warm near-black walnut. Primary canvas. |
| `--bg-surface` | `#1E1B18` | Warm graphite container surface. |
| `--bg-elevated` | `#282420` | Secondary elevated surface, code headers, hover states. |
| `--bg-subtle` | `#332E29` | Hairline structural dividers and container borders. |
| `--ink-primary` | `#F2EFE9` | Warm off-white for primary headlines and readable body. |
| `--ink-muted` | `#B0A89C` | Muted stone for supporting paragraphs and summaries. |
| `--ink-faint` | `#7A7369` | Faint metadata, timestamps, and architectural labels. |
| `--accent-copper` | `#C48259` | Restrained burnished copper for pins, active indicators, and links. |
| `--status-online` | `#488B67` | Muted moss green for live status (never neon). |

### Surface & Shadow Rules
- **No drop shadows everywhere:** Elements do not use generic fuzzy card shadows.
- **Hairlines over bulk:** Surfaces are delimited with 1px borders (`#332E29`), providing crisp, razor-sharp architectural clarity.
- **Tactile Grain:** A subtle, ultra-low opacity background grain texture (`24px` grid) provides physical texture without hindering performance.

---

## 3. Typography System

Typography carries the visual weight of the website. No generic fonts like default Inter, Roboto, or Arial are used as primary drivers.

### Font Families
1. **Primary Interface & Body:** `Manrope` (`--font-sans`), loaded via `next/font/google` with `display: swap`. Selected for its contemporary geometric balance, open counters, and excellent readability across technical copy.
2. **Technical & Code:** `JetBrains Mono` (`--font-mono`), loaded via `next/font/google`. Engineered specifically for developers, providing unambiguous character distinctions (e.g. `0` vs `O`, `1` vs `l`).

### Typographic Hierarchy & Scale
- **Display / Hero H1:** `text-3xl sm:text-5xl lg:text-6xl`, font-semibold, letter-spacing `-0.035em`, line-height `1.12`, `text-wrap: balance`.
- **Section H2:** `text-2xl sm:text-4xl`, font-semibold, letter-spacing `-0.025em`, `text-wrap: balance`.
- **Component H3:** `text-xl sm:text-2xl`, font-semibold, letter-spacing `-0.02em`.
- **Body Text:** `text-sm sm:text-base`, text-ink-muted, line-height `1.65`, `text-wrap: pretty`.
- **Mono Metadata:** `text-xs font-mono`, uppercase, letter-spacing `0.08em`, text-ink-faint.

---

## 4. Layout & Grid Principles

- **Asymmetry over rigid bento grids:** Varied widths, editorial column splits (e.g. 7-col vs 5-col in About and Contact), and a hero spotlight for CodeCollab rather than identical three-card rows.
- **Viewport Constraints:** Max content width constrained to `max-w-6xl mx-auto px-6`.
- **Deliberate Whitespace:** Major sections are separated with `py-20 md:py-28` and hairline border rules.
- **Mobile Adaptability:** All containers adapt from single-column mobile flows to multi-column desktop layouts without horizontal scroll leaks. Uses `min-height: 100dvh` to accommodate mobile browser navigation bars.

---

## 5. Interaction & Motion Guidelines

- **Respect for `prefers-reduced-motion`:** All transitions and animations collapse to instantaneous property changes when the user requests reduced motion.
- **Purposeful Feedback:** Motion is restricted to state reinforcement:
  - Command palette entrance fade & zoom-in (`100ms`).
  - Subtle hover borders on interactive cards.
  - Clipboard copy feedback (`Copied ✓`).
- **No Uncontrolled Motion:** No continuous floating background bubbles, spinning 3D meshes, bouncing scroll arrows, or pulsing neon elements.

---

## 6. Accessibility & Semantic Architecture

- **Page Landmarks:** Proper `<header>`, `<main id="main-content">`, and `<footer>` landmarks. The header is strictly positioned outside `<main>`.
- **Keyboard Navigation:** Full focus visibility with an intentional 2px copper outline (`:focus-visible`).
- **Command Palette (`⌘K` / `Ctrl+K`):** Fully accessible modal with `role="dialog"`, `aria-modal="true"`, Esc key dismissal, and Arrow/Enter navigation.
- **Color Contrast:** All body text meets WCAG AA standards (minimum 4.5:1 against surfaces).

---

## 7. The 30 Anti-AI Patterns Audit Checklist

| # | AI Cliché Forbidden Pattern | Portfolio Implementation Rule |
|---|---|---|
| 1 | Harsh gradients | Pure solid surfaces (`#141210`, `#1E1B18`) and hairlines. |
| 2 | Default Lucide icons everywhere | Clean typography, subtle custom SVGs, and mono labels. |
| 3 | Pure white backgrounds | Warm walnut near-black palette with off-white ink. |
| 4 | Rainbow colouring | Strict 1-accent palette (burnished copper `#C48259`). |
| 5 | Drop shadows everywhere | Flat surfaces with 1px border dividers. |
| 6 | Three feature cards in a row | Asymmetrical editorial splits and featured deep dives. |
| 7 | Emojis in UI / headings | Strictly zero emojis. Professional engineering tone. |
| 8 | Liquid glass / frosted glass panels | Solid, tactile graphite surfaces. |
| 9 | Generic empty states | Intentional minimal empty states with clear context. |
| 10 | Infinite scroll | Clear, paginated sections and direct navigation anchors. |
| 11 | Cookie banner clutter | No tracking cookies or invasive third-party telemetry. |
| 12 | Fake testimonials | Zero fabricated quotes or invented praise. |
| 13 | Bento grids everywhere | Varied typographic layouts, vertical timelines, and split columns. |
| 14 | Terminal window hero | Restrained typography headline with technical summary grid. |
| 15 | "It's not X, it's Y" copy | Direct, authentic engineering descriptions. |
| 16 | Checkmark bullets everywhere | Clean typographic dashes and numbered steps. |
| 17 | Three pricing tiers | Excluded entirely. Appropriate for personal engineer site. |
| 18 | No real product demonstrations | Interactive code explorer, architecture flow, and API simulator. |
| 19 | Soft oversized corner radius | Restrained, crisp radii (`rounded` 4px / `rounded-lg` 8px). |
| 20 | Purple and black startup vibe | Warm graphite and burnished copper palette. |
| 21 | No skeleton loaders | Immediate SSR with static generation where applicable. |
| 22 | Radial orbs floating in background | Zero floating decorative orbs. |
| 23 | Dot grids for faux-tech | Subtle hairline borders and clean typography. |
| 24 | Sparkle icons / AI magic motifs | Zero sparkle icons or magic motifs. |
| 25 | Animated bouncing arrows | Static, purposeful semantic link indicators (`→`, `↗`). |
| 26 | Missing terms of service | Not applicable (no commercial SaaS functionality hosted). |
| 27 | Privacy policy | No personal visitor data collection or telemetry scripts. |
| 28 | Hover animations everywhere | Hover states adjust subtle background tint and borders only. |
| 29 | Neon / fluorescent colors | Grounded moss green `#488B67` for status; no neon glows. |
| 30 | Basic pastel colors | Deep warm walnut and muted stone. |

---

## 8. Rules for Future Additions

When expanding this portfolio in the future:
1. Always consult `lib/data.js` and `resume.md` as the verified baseline. Never invent metrics or roles.
2. Store new articles in `content/blog/` with standard frontmatter schema.
3. Keep JavaScript (not TypeScript) as the codebase convention unless a migration is explicitly requested.
4. Maintain the strict anti-AI aesthetic: do not introduce gradients, emojis, or arbitrary color tags.
