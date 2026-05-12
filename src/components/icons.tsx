import type { SVGProps } from "react";

/** Decorative four-point sparkle used over Eat/Sip props. */
export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="17"
      viewBox="0 0 13 17"
      fill="none"
      {...props}
    >
      <path
        d="M11.6407 8.49976C9.32667 9.65787 7.49061 12.0563 6.4995 15.0433C5.50898 12.0565 3.67249 9.65818 1.35936 8.5C3.67261 7.34176 5.50917 4.94329 6.49966 1.95618C7.49116 4.94237 9.32832 7.34128 11.6407 8.49976Z"
        fill="#363636"
        stroke="white"
      />
    </svg>
  );
}

/** Slim chevron used for Swiper-style prev/next controls. */
export function ChevronIcon({
  direction = "left",
  ...props
}: SVGProps<SVGSVGElement> & { direction?: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="68"
      viewBox="0 0 33 68"
      fill="none"
      style={{
        transform: direction === "right" ? "scaleX(-1)" : undefined,
      }}
      {...props}
    >
      <path
        d="M0.0244396 34.1482C9.52768 44.0842 19.0093 53.9977 28.491 63.9111C28.7933 64.2273 30.2188 63.6175 29.9812 63.3691C20.4996 53.4557 10.9964 43.5197 1.51472 33.6063C1.23394 33.3127 -0.191543 33.9224 0.0244396 34.1482Z"
        fill="#363636"
      />
      <path
        d="M0.0244396 33.8518C9.52768 23.9158 19.0093 14.0023 28.491 4.08889C28.7933 3.77274 30.2188 4.38245 29.9812 4.63086C20.4996 14.5443 10.9964 24.4803 1.51472 34.3937C1.23394 34.6873 -0.191543 34.0776 0.0244396 33.8518Z"
        fill="#363636"
      />
    </svg>
  );
}

/** Instagram glyph (extracted as a clean inline SVG). */
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="currentColor"
      {...props}
    >
      <path d="M17 3c-3.8 0-4.27.02-5.76.08-1.49.07-2.5.31-3.39.65a6.84 6.84 0 0 0-2.47 1.61 6.84 6.84 0 0 0-1.61 2.47c-.34.89-.58 1.9-.65 3.39C3.02 12.73 3 13.2 3 17s.02 4.27.08 5.76c.07 1.49.31 2.5.65 3.39a6.84 6.84 0 0 0 1.61 2.47c.78.78 1.55 1.27 2.47 1.61.89.34 1.9.58 3.39.65 1.49.06 1.96.08 5.76.08s4.27-.02 5.76-.08c1.49-.07 2.5-.31 3.39-.65a6.84 6.84 0 0 0 2.47-1.61 6.84 6.84 0 0 0 1.61-2.47c.34-.89.58-1.9.65-3.39.06-1.49.08-1.96.08-5.76s-.02-4.27-.08-5.76c-.07-1.49-.31-2.5-.65-3.39a6.84 6.84 0 0 0-1.61-2.47 6.84 6.84 0 0 0-2.47-1.61c-.89-.34-1.9-.58-3.39-.65C21.27 3.02 20.8 3 17 3Zm0 2.52c3.74 0 4.18.02 5.66.08 1.36.06 2.1.29 2.6.48.65.25 1.12.55 1.6 1.04.49.49.79.95 1.04 1.6.19.5.42 1.24.48 2.6.07 1.48.08 1.92.08 5.66s-.02 4.18-.08 5.66c-.06 1.36-.29 2.1-.48 2.6-.25.65-.55 1.12-1.04 1.6-.49.49-.95.79-1.6 1.04-.5.19-1.24.42-2.6.48-1.48.07-1.92.08-5.66.08s-4.18-.02-5.66-.08c-1.36-.06-2.1-.29-2.6-.48a4.32 4.32 0 0 1-1.6-1.04 4.32 4.32 0 0 1-1.04-1.6c-.19-.5-.42-1.24-.48-2.6C5.54 21.18 5.52 20.74 5.52 17s.02-4.18.08-5.66c.06-1.36.29-2.1.48-2.6.25-.65.55-1.12 1.04-1.6.49-.49.95-.79 1.6-1.04.5-.19 1.24-.42 2.6-.48C12.82 5.54 13.26 5.52 17 5.52Zm0 4.32a7.16 7.16 0 1 0 0 14.32 7.16 7.16 0 0 0 0-14.32Zm0 11.8a4.64 4.64 0 1 1 0-9.28 4.64 4.64 0 0 1 0 9.28Zm9.12-12.08a1.67 1.67 0 1 1-3.34 0 1.67 1.67 0 0 1 3.34 0Z" />
    </svg>
  );
}

/** Facebook glyph (clean inline SVG). */
export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13.5 9V7.5c0-.83.67-1.5 1.5-1.5h1.5V3h-2.25C12 3 10.5 4.5 10.5 7v2H8v3h2.5v9h3v-9h2.25l.75-3H13.5Z" />
    </svg>
  );
}

/** TikTok glyph (clean inline SVG). */
export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .58.04.85.13V9.4a6.34 6.34 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.62a8.16 8.16 0 0 0 4.77 1.52V6.7c0-.01-1.84.05-1.84-.01Z" />
    </svg>
  );
}

/** Circular arrow icon used for the Gallery LOAD MORE button. */
export function LoadMoreArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1" />
      <path
        d="M16 9v14M9 16l7 7 7-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Decorative hand-drawn laurel wreath behind the SEE MENU CTA in the hero. */
export function LaurelWreath(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round">
        {/* Left half */}
        <path d="M30 90 C 35 65, 50 45, 80 35" />
        <path d="M40 80 C 45 70, 50 65, 60 60" />
        <path d="M45 95 C 45 85, 50 78, 60 72" />
        <path d="M50 110 C 45 100, 50 92, 62 86" />
        <path d="M55 125 C 50 115, 55 105, 67 100" />
        <path d="M62 140 C 55 130, 62 118, 75 115" />
        {/* Right half (mirrored) */}
        <path d="M150 90 C 145 65, 130 45, 100 35" />
        <path d="M140 80 C 135 70, 130 65, 120 60" />
        <path d="M135 95 C 135 85, 130 78, 120 72" />
        <path d="M130 110 C 135 100, 130 92, 118 86" />
        <path d="M125 125 C 130 115, 125 105, 113 100" />
        <path d="M118 140 C 125 130, 118 118, 105 115" />
        {/* Tie */}
        <path d="M85 142 C 90 148, 90 148, 95 142" />
      </g>
    </svg>
  );
}
