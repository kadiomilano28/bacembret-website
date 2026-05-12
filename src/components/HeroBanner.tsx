import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black"
    >
      {/* Background video — no poster, black bg shows until video paints */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/home_web-1.mp4" type="video/mp4" />
        <source
          media="(max-width: 640px)"
          src="/videos/home-mobile_web-1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Soft overlay so wordmark holds against busy food footage */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered content — keeps clear of 136px header */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 pt-[136px] text-center text-white">
        {/* Wordmark — Baçe Mbret crest */}
        <Image
          src="/images/bacembret-logo.png"
          alt="Baçe Mbret"
          width={1024}
          height={1024}
          priority
          className="h-auto w-[260px] sm:w-[320px] lg:w-[380px] fade-up drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
        />

        <p
          className="mt-10 font-[var(--font-display)] text-[26px] italic leading-tight sm:text-[32px] lg:text-[40px] fade-up"
          style={{ animationDelay: "120ms" }}
        >
          Shije mbretërore në çdo kafshatë.
        </p>

        <div
          className="mt-14 flex justify-center fade-up"
          style={{ animationDelay: "240ms" }}
        >
          {/* Plain text CTA with arrow */}
          <Link
            href="/menu"
            className="font-ui group inline-flex items-center gap-3 text-[13px] tracking-[0.3em] uppercase text-white"
          >
            <span className="border-b border-white/70 pb-1 transition-colors group-hover:border-white">
              shiko menunë
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
