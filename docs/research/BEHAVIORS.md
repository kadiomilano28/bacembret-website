# Just Falafel — Behavior Bible

## Global

- **Smooth scroll:** Lenis (`html.lenis` class). Need to install `lenis` and initialize at root.
- **Background fonts:** Bodoni Moda (display), Montserrat (UI/body uppercase).
- **Body bg:** transparent — section bgs win.
- **Heading split-text animation:** Headlines wrap each character in `.char` divs animated in via stagger/fade.
- **Intro loader:** body has `animation-loading` class on load, 4 falafel JPGs animate up & out.

## Header

- Position: `absolute top-0 left-0 w-full z-40`, `height: 136px`.
- Bg: `gradient-header.png`, full-width.
- Stays as overlay above hero — does not scroll-stick.
- Logo center-positioned, links flank left and right.
- Hover on links: subtle color/underline.

## Hero

- Background video autoplay/loop/muted, full-bleed cover.
- Centered Just Falafel SVG (filter:brightness(0) → black on light bg). Width 192px desktop.
- Tagline: "be kind to every kind." in Bodoni Moda italic-feeling style.
- Two CTAs labelled "SEE MENU": one is the round laurel-wreath circular button, one is text/underline.
- On scroll past hero, header remains visible because it's absolute.

## Bowl Slider

- Swiper carousel, 5 slides, looping.
- Active slide is centered, prev/next slides peek. The `swiper-slide-active` is in the middle, with `swiper-slide-prev` and `swiper-slide-next` flanking.
- Section title (h2) above with split-text reveal animation: "fully-vegan restaurant in houston. elevate your palate, uplift the earth."
- Below the active bowl image: title (h2.section-headline) of the bowl, e.g., "beetroot & carrot halwa".
- Pagination "01 / 05" lower-left, with prev/next chevron arrows.
- Background: `falafel-bowl-bg.png` blurred ribbon behind.

## Eat & Sip

- Two-column: left "eat" (video circle), right "sip" (image circle).
- Both round (border-radius 600px).
- Decorative props: `golden-square.svg`, `double-round1.svg`, `glass.png`, `orange.png`, `sip-bg.png` (shadow).
- Some props have `img-move` and `movable-layer` classes — likely parallax/scroll-reactive translation.

## Gallery

- Headline "deliciously bold in every bite" + two SEE MENU buttons (mirrored layout from hero).
- Top row: 4 mixed-shape gallery elements (rounded-t-[182px], rounded-[20px], custom-border, rounded-3xl).
- Hero golden-gate image (`golden-gate.png`) at 833×1323, mt-260px.
- Decorative absolute props: `fork-1.png`, `fork-bg.png`, `fork-bg2.png`, `fork-leaf.png`, `onion.png`, `stone1-3.png`, `branch_final-min.png` ("green-leaf-wrapper") — `parallax3` class on fork suggests scroll parallax.
- Middle row featuring `jf-gallery-grid.mp4` video.
- Bottom row hidden until LOAD MORE is clicked.
- LOAD MORE = circular button with arrow svg (`load-more-btn.svg`).

## Footer

- Black/dark over `footer-bg.png`.
- Contains: nav links (MENU, ABOUT, CONTACT, GIFT CARD), phone (tel:), order now button, address, hours.
- Big "just falafel" wordmark.
- "71three" agency credit logo at very bottom right.

## Responsive

- Desktop 1440+: full multi-column layout
- Tablet 768: gallery shrinks to 2 columns, hero text smaller, gaps reduced
- Mobile 390: single column stacking, hero swap to mobile video (home-mobile_web-1.mp4), cards full width
