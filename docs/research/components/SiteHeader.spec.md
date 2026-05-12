# SiteHeader Specification

- **Target file:** `src/components/SiteHeader.tsx`
- **Interaction model:** static overlay (absolute positioned, no scroll behavior)

## Computed Styles (from getComputedStyle on original)

### `<header>`
- position: absolute
- top: 0px, left: 0px, width: 100%, height: 136px
- z-index: 40
- background-image: `url('/images/2025/09/gradient-header.png')`, size: 100% 100%

### Logo (center)
- src: `/images/2024/08/Falafel_vector.svg`
- Renders white over gradient (filter: brightness(0) invert(1))

### Nav links
- font-family: Montserrat
- text-transform: UPPERCASE
- letter-spacing: ~0.18em
- font-size: 13px
- color: white

## DOM Structure
- `<header>` → flex container with three groups: nav-left | logo | nav-right

## Links
- MENU → /menu
- ABOUT → /about
- CONTACT → /contact
- GIFT CARD → external Square Gift Card URL
- ORDER NOW → external Grubhub URL (highlighted as pill)

## States
- Hover on links: opacity 0.7
- ORDER NOW gets a pill border, hover fills with white/10

## Responsive
- Desktop (1440+): full horizontal nav, logo 120px wide
- Tablet (768): smaller gaps, logo 100px
- Mobile (390): tighter spacing, logo 88px
