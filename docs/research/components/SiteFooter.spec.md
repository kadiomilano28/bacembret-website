# SiteFooter Specification

- **Target file:** `src/components/SiteFooter.tsx`
- **Interaction model:** static

## Layout
- Three-column grid on desktop (md+): nav | phone+order | address+hours
- Single column stacked on mobile

## Content
- **Nav:** MENU, ABOUT, CONTACT, GIFT CARD links (Montserrat uppercase)
- **Phone:** `713.505.1044` (tel: link, Bodoni Moda 28-33px)
- **Order Now:** pill border button → Grubhub URL
- **Address:** "just falafel" wordmark, 2111 W Loop S Suite 100, Houston, TX 77027
- **Hours:**
  - Sun – Th: 10:30 am to 10 pm
  - Fri: 10:30 am to 11 pm
  - Sat: 9 am to 11 pm
- **Instagram** icon → @jfvegancafe

## Wordmark row
- Centered `Logo_vector_white.png` (260-460px responsive)
- Tagline below: "be kind to every kind."

## Credit row
- © current year just falafel
- "built by 71three" with logo

## Computed Styles
- Background: `footer-bg.png`, fallback black
- Text: white
- Section padding: 80-112px vertical, 24-64px horizontal

## Responsive
- Desktop: three columns
- Tablet/mobile: stacked single column
