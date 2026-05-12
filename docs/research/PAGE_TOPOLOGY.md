# Just Falafel — Page Topology

Source: https://jfvegancafe.com/
Total page height @1440: ~10,865px
Theme: WordPress + Elementor + Swiper + Lenis smooth scroll
Style: Editorial / luxury vegan restaurant. Bodoni Moda serif headlines, Montserrat micro-uppercase UI.

## Section Order (top → bottom)

| # | Section          | Height | Component         | Notes |
|---|------------------|--------|-------------------|-------|
| 1 | Header (overlay) | 136    | `SiteHeader`      | Absolute, z-40, gradient-header.png bg, sits over hero |
| 2 | Hero / Banner    | 855    | `HeroBanner`      | Full-bleed video bg (home_web-1.mp4), centered "Just Falafel" SVG logo, "be kind to every kind." caption, two SEE MENU buttons (text + circular wreath) |
| 3 | Bowl Slider      | 1748   | `BowlSlider`      | "fully-vegan restaurant in houston. elevate your palate, uplift the earth." section title, swiper of 5 bowl images with 01/05 pagination, marble bg |
| 4 | Eat & Sip        | 1115   | `EatSipSection`   | Two halves — left "eat" video circle, right "sip" image circle with glass + orange overlays, decorative SVGs |
| 5 | Gallery          | 6430   | `GallerySection`  | "deliciously bold in every bite" headline, two SEE MENU buttons, masonry of 14 food images with golden-gate.png + decorative props (fork, onion, stones, leaf), LOAD MORE button revealing more rows |
| 6 | Footer           | 717    | `SiteFooter`      | footer-bg.png, dark, contact info, hours, "just falafel" wordmark, 71three credit |

## Page Structure

```
<html class="lenis"> <!-- smooth scroll -->
  <body>
    <SiteHeader />               <!-- absolute top-0 z-40, fades-in on load, sticks visually with gradient -->
    <main>
      <HeroBanner />             <!-- 100vh-ish, video bg -->
      <BowlSlider />             <!-- marble bg -->
      <EatSipSection />          <!-- white, decorative -->
      <GallerySection />         <!-- marble bg -->
    </main>
    <SiteFooter />               <!-- footer-bg.png -->
  </body>
</html>
```

## Z-index map

- Header: z-40 (overlay above hero)
- Hero overlays (intro falafel images, video controls): z-30 within hero
- Bowl bg image: behind slider (z-0/-1)
- Gallery decorative props (fork, onion, stones): mixed z-20/z-30
- Footer: implicit base

## Navigation links

- MENU → /menu/
- ABOUT → /about/
- CONTACT → /contact/
- GIFT CARD → external Square Gift Card
- ORDER NOW → external Grubhub
- Phone: tel:713.505.1044
- Instagram: https://www.instagram.com/jfvegancafe

## Restaurant info (footer)

- Address: 2111 W Loop S Suite 100, Houston, TX 77027
- Phone: 713.505.1044
- Hours:
  - Sun – Th: 10:30 am to 10 pm
  - Fri: 10:30 am to 11 pm
  - Sat: 9 am to 11 pm
- Tagline / mission: "be kind to every kind."
- "fully-vegan restaurant in houston. elevate your palate, uplift the earth."

## Bowl slider content (5 slides)

| Index | Image    | Title                       |
|-------|----------|-----------------------------|
| 0     | 5-1.png  | beetroot & carrot halwa     |
| 1     | 3.png    | Loaded Gyro Fries           |
| 2     | 1.png    | Green Goddess Soup          |
| 3     | 4.png    | Baked Feta Pasta            |
| 4     | 2-1.png  | Falafels                    |

## Behaviors observed

- **Lenis** smooth scroll on `html.lenis`
- **Swiper** infinite carousel for bowls (loop, 5 slides)
- Intro overlay with 4 falafel images animates in/out on initial load (`animation-loading` body class)
- Title text uses character-split animation (`splitText` class, each char wrapped in `.char` inside `.word`)
- Section title `Falafel_vector.svg` rendered with `filter: brightness(0)` → black on light bg
- Header bg = `gradient-header.png` (radial/linear gradient PNG)
- Many decorative `img-move` parallax-y overlays on Eat/Sip and Gallery (golden squares, double-rounds, sparkles)
- Gallery uses `LOAD MORE` to reveal additional rows — bottom rows already in DOM, hidden until clicked
- Page uses primarily black + white + a single warm accent for the marble/footer bg
