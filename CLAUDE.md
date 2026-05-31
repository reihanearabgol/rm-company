# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint via next lint
npm run start    # serve production build
```

There are no tests in this project.

## Architecture

**R&M Company** is a luxury renovation company marketing site built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and GSAP.

### Pages & routing

- `/` — single-page marketing site (`src/app/page.tsx`), composed of section components stacked in order
- `/colour-studio` — paint palette browser (`src/app/colour-studio/page.tsx` + `src/components/ColourStudio.tsx`)
- `/services` — services detail page (`src/app/services/page.tsx`)
- `src/app/api/contact/route.ts` — contact form API route (currently a stub)

### Component composition

`src/app/page.tsx` assembles the homepage from independent section components:
`Navbar → Hero → TrustBar → Services → Projects → BeforeAfter → WhyChooseUs → Process → Testimonials → FAQ → FinalCTA`

All components are in `src/components/`. Components that use browser APIs or React hooks require `'use client'` at the top.

### Design system

The entire visual language lives in two files and must never be bypassed with hardcoded values:

- **`src/styles/tokens.css`** — single source of truth: color palette (obsidian/charcoal/ash/ivory/gold), 8px spacing grid, fluid typography scale (`clamp()`), motion easings, z-index scale, shadow definitions
- **`src/app/globals.css`** — imports tokens, resets, and defines reusable utility classes: `.t-hero`, `.t-display-xl/l/m/s`, `.t-body-l/m/s`, `.t-label`, `.container`, `.section`, `.btn`, `.btn-gold`, `.btn-ghost`, `.btn-ghost-gold`, `.label-row`, `.reveal`/`.reveal.visible`

Tailwind is configured in `tailwind.config.ts` to mirror the token values (colors: obsidian, charcoal, ash, ivory, mist, gold; fonts: display/sans; easings: luxury/expo/cinema; max-width: container).

**Font pairing:** Cormorant Garamond (`--font-display`) for editorial headings, DM Sans (`--font-sans`) for body/UI. Loaded via Google Fonts in `layout.tsx`.

**Gold accent rule:** `--color-gold` (#c9a96e) is accent-only — for emphasis, not fill. Use `--color-gold-subtle`/`--color-gold-border`/`--color-gold-glow` for backgrounds and borders.

**Corner radius:** The site is architecturally sharp — `--radius-none` (0) is the default; only `--radius-sm` (2px) or `--radius-circle` for pills in special cases.

### Animation

- **Framer Motion** — used for component-level entrance animations (Hero stagger, scroll-based reveals). Animation variants are defined outside components so they're never recreated on render.
- **GSAP** (`@gsap/react`) — available but used selectively for more complex timeline animations.
- **Lenis** — smooth scroll library (`src/hooks/useLenis.ts`).
- **`.reveal` / `.reveal.visible`** — CSS-only scroll reveal pattern in globals.css; toggled by `src/hooks/useScrollReveal.ts`.

### Data

`src/data/colourPalettes.ts` exports `COLOUR_FAMILIES: ColourFamily[]` — 7 colour families × 14 swatches each, with id, name, hex, mood, finish (Matte/Eggshell/Satin), and rooms. This is the data source for the Colour Studio page.

### Hooks

- `useScrollReveal` — IntersectionObserver toggling `.reveal.visible`
- `useNavbarScroll` — scroll position for navbar style transitions  
- `useMediaQuery` — responsive breakpoint detection
- `useLenis` — Lenis smooth scroll initialization
- `useHeroAnimation` — GSAP-based hero entrance

### Media

- `public/video/hero.mp4` — hero background; always use `preload="none"` (never `preload="auto"`) to avoid blocking page render
- `public/images/` — organized into `projects/`, `before-after/`, `team/`, `why/`, `og/`
- Next.js image optimization is configured for avif + webp formats

### Styling approach

Components mix inline styles (for dynamic/JS-controlled values) with CSS utility classes from globals.css. Tailwind utilities are used sparingly. Never hardcode color hex values or spacing — always reference CSS custom properties from tokens.css.

### Commented-out code

Many files contain large blocks of commented-out earlier iterations. The active implementation is always the last uncommented block in the file.
