# GallerySection Specification

- **Target file:** `src/components/GallerySection.tsx`
- **Interaction model:** click-driven LOAD MORE state + autoplay video tile

## Layout
- Header row: round wreath SEE MENU (left) | "deliciously bold in every bite" h2 (center) | text SEE MENU (right)
- Top row: 4 mixed-shape images (12-col grid: 3-3-4-2)
- Middle feature: golden-gate.png with floating fork, onion, stones
- Middle grid: 4 tiles including video tile (12-col: 7-3-2-3)
- Bottom row (hidden until LOAD MORE): 6 more images
- Footer: LOAD MORE button (circular arrow)

## State
- `showMore: boolean` controls bottom row visibility
- Bottom row uses `fade-up` animation when revealed

## Computed Styles
- Section bg: `marble-bg.webp`
- Headline: Bodoni Moda lowercase 64px (clamp)
- LOAD MORE: Montserrat 12px uppercase tracking-wide, circular arrow icon

## Assets used
- Top: `/images/2024/10/f1.jpg`, `f2.jpg`, `f3-1.jpg`, `f4-1.jpg`
- Middle feature: `/images/2024/04/golden-gate.png`
- Middle grid: `f5.jpg`, `f6.jpg`, `f7-1.jpg` + video `/videos/jf-gallery-grid.mp4`
- Bottom: `f9.jpg`, `f8.jpg`, `f10.jpg`, `f-12.jpg`, `f13.jpg`, `f14.jpg`
- Decorative: `branch_final-min.png`, `fork-1.png`, `onion.png`, `stone1.png`, `stone2.png`

## Behaviors
- All images: `hover:scale-[1.04]` with 700ms transform transition
- Decorative props: `float-y` / `float-y-slow` CSS animations
- Reduced motion: animations disabled
