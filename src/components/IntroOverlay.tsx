"use client";

import { useEffect, useRef, useState } from "react";

const FADE_OUT_MS = 600;
const MAX_DURATION_MS = 6000; // safety cap if `onEnded` never fires

export function IntroOverlay() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Lock body scroll while overlay is up
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let unmountTimer: ReturnType<typeof setTimeout> | null = null;
    const startFadeOut = () => {
      setFading(true);
      unmountTimer = setTimeout(() => {
        setDone(true);
        document.body.style.overflow = previousOverflow;
      }, FADE_OUT_MS);
    };

    // Hard cap in case the video never fires `ended`
    const safetyTimer = setTimeout(startFadeOut, MAX_DURATION_MS);

    // Try to play (autoPlay + muted should be enough but some browsers gate it)
    const v = videoRef.current;
    const onEnded = () => {
      clearTimeout(safetyTimer);
      startFadeOut();
    };
    v?.addEventListener("ended", onEnded);
    v?.play().catch(() => {
      /* autoplay blocked — safety timer will close it */
    });

    return () => {
      clearTimeout(safetyTimer);
      if (unmountTimer) clearTimeout(unmountTimer);
      v?.removeEventListener("ended", onEnded);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-white transition-opacity duration-[600ms] ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      // Inline fallback so the overlay covers the hero even if Tailwind utility CSS hasn't applied yet on first paint
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        ref={videoRef}
        className="h-auto w-[280px] max-w-[70vw] sm:w-[360px] lg:w-[500px] object-contain"
        style={{ mixBlendMode: "multiply" }}
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/preloader.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
