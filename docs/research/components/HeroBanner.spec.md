# HeroBanner Specification

- **Target file:** `src/components/HeroBanner.tsx`
- **Interaction model:** static + autoplay video bg + spinning wreath CTA

## Computed Styles
- Section: `position: relative`, `height: 100svh` (min 640px), `overflow: hidden`, `background: black`
- Video: absolute inset-0, `object-cover`, `autoplay muted loop playsInline`
  - Source: `/videos/home_web-1.mp4` (desktop), `/videos/home-mobile_web-1.mp4` (mobile)

## Content
- Eyebrow: "FULLY-VEGAN • HOUSTON, TX" — Montserrat 12-13px uppercase tracking-wide
- Centered SVG wordmark `Falafel_vector.svg` rendered white via `filter: brightness(0) invert(1)`, width 260-520px responsive
- Tagline: "be kind to every kind." in Bodoni Moda italic, 26-40px responsive
- Two CTAs labelled "see menu":
  - Round laurel-wreath circular badge (180×180), spinning slowly
  - Plain text with arrow on hover

## Behaviors
- Eyebrow / wordmark / tagline / CTAs use `fade-up` animation with staggered delays (0, 120ms, 240ms)
- Wreath rotates with `spin-slow` (30s linear infinite)
- `prefers-reduced-motion`: animations disabled

## Assets
- Video: `/videos/home_web-1.mp4`, `/videos/home-mobile_web-1.mp4`
- Wordmark: `/images/2024/08/Falafel_vector.svg`
- Wreath: inline `<LaurelWreath>` SVG component

## Responsive
- Desktop: 100vh, large wordmark, two CTAs in row
- Mobile: 100svh, smaller wordmark, CTAs stack vertically
