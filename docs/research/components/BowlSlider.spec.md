# BowlSlider Specification

- **Target file:** `src/components/BowlSlider.tsx`
- **Interaction model:** click-driven (prev/next buttons, click adjacent slides)

## DOM Structure
- `<section className="bg-marble">` → max-w container → headline → slider stage → title + pagination + arrows

## Computed Styles
- Section bg: `marble-bg.webp` repeating
- Headline (h2): Bodoni Moda, 64px desktop (clamp 2.5-4rem), `lowercase`
- Active title (h3): same as h2
- Pagination: Montserrat 13px uppercase tracking-[0.3em]

## Per-State Content (5 slides)
| Index | Title                    | Image              |
|-------|--------------------------|--------------------|
| 0     | beetroot & carrot halwa  | `/images/2024/10/5-1.png` |
| 1     | Loaded Gyro Fries        | `/images/2024/10/3.png`   |
| 2     | Green Goddess Soup       | `/images/2024/10/1.png`   |
| 3     | Baked Feta Pasta         | `/images/2024/10/4.png`   |
| 4     | Falafels                 | `/images/2024/10/2-1.png` |

## Behaviors
- Click prev → index - 1 mod 5
- Click next → index + 1 mod 5
- Click adjacent peeking slide → set as active
- Active slide: scale 1, opacity 1, z-30
- Prev/next slides: scale 0.62, opacity 0.5, blur 1px, translated ±55%
- Title swap is instant (key prop forces remount)
- Transition: `all 700ms ease-out`

## Assets
- 5 bowl PNGs from `/images/2024/10/`
- Background ribbon: `/images/falafel-bowl-bg.png`
- Chevron arrows: inline `<ChevronIcon>` component

## Responsive
- Desktop: 620px slides
- Tablet: 500px slides
- Mobile: 420px slides
