# EatSipSection Specification

- **Target file:** `src/components/EatSipSection.tsx`
- **Interaction model:** static + autoplay video + floating decorative props

## Layout
- Two-column grid (md+), single column on mobile
- Each column contains: italic lowercase title (eat / sip) + circle media

## Eat (left)
- Title: "eat" h3, Bodoni Moda lowercase italic
- Media circle: `aspect-[3/4]` `max-w-[460px]` `rounded-[600px]`
- Video: `/videos/eat_web.mp4`, autoplay loop muted

## Sip (right)
- Title: "sip" h3
- Media circle: same dimensions as eat
- Background image: `/images/2024/10/sip-bg.jpg`
- Glass overlay: `/images/2025/08/glass.png` (object-contain bottom)

## Decorative props (animated)
- `golden-square.svg` × 2 (one each side, float-y)
- `double-round1.svg` × 2 (one each side, float-y/y-slow)
- `<SparkleIcon>` × 2 (float-y)
- `orange.png` near sip column (float-y)

## Behaviors
- All decorative props use CSS keyframe animations: `float-y`, `float-y-slow`
- Disabled by `prefers-reduced-motion`

## Responsive
- Desktop: side-by-side
- Mobile: stacked, decorative props remain in flow
