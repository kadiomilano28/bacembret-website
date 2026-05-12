"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Decorative green-leaf branch in the footer middle band.
 * Sits off-screen to the right, slides into view when the footer enters the viewport.
 */
export function AnimatedLeaves() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Toggle on every enter / leave so leaves slide back out and re-enter on each scroll pass
          setVisible(e.isIntersecting);
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="green-leaf-wrapper pointer-events-none absolute hidden overflow-hidden lg:block"
      style={{ top: "-57px", right: 0, width: "838px", height: "158px" }}
    >
      <div
        className="relative h-full w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
        style={{ transform: visible ? "translateX(0)" : "translateX(110%)" }}
      >
        <Image
          src="/images/branch_final-min.png"
          alt=""
          fill
          sizes="838px"
          className="object-contain object-right-top"
        />
      </div>
    </div>
  );
}
