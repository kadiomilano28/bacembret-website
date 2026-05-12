"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { ChevronIcon } from "./icons";
import { BOWL_SLIDES } from "@/lib/jf-data";

export function BowlSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // Sync state on initial mount in case real index differs from 0
    if (swiperRef.current) setActive(swiperRef.current.realIndex);
  }, []);

  return (
    <section className="relative overflow-hidden bg-marble py-24 md:py-32 lg:py-40">
      {/* Soft bowl backdrop ribbon — prominent decorative spice splash */}
      <div className="pointer-events-none absolute -left-20 top-0 h-[130%] w-[75%] opacity-90 lg:opacity-100">
        <Image
          src="/images/falafel-bowl-bg.png"
          alt=""
          fill
          className="object-contain object-left-top"
          aria-hidden
          sizes="(min-width: 1280px) 1000px, (min-width: 1024px) 800px, (min-width: 640px) 600px, 400px"
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Section title */}
        <h2 className="jf-headline mx-auto max-w-[1000px] text-center text-[clamp(3rem,2rem+4vw,5rem)] leading-[1.15]">
          Jo thjesht një ushqim.
          <br />
          <span className="italic">
            Një <span style={{ color: "#b45309" }}>kujtim</span>.
          </span>
        </h2>

        {/* Swiper coverflow */}
        <div className="relative mt-16">
          <Swiper
            modules={[Autoplay, EffectCoverflow, Navigation]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView="auto"
            speed={900}
            spaceBetween={80}
            breakpoints={{
              640: { spaceBetween: 100 },
              1024: { spaceBetween: 140 },
              1280: { spaceBetween: 180 },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              waitForTransition: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 220,
              modifier: 1,
              slideShadows: false,
            }}
            onSwiper={(s) => {
              swiperRef.current = s;
              setActive(s.realIndex);
              // Hard kick autoplay in case it hasn't started
              s.autoplay?.start();
            }}
            onSlideChange={(s) => setActive(s.realIndex)}
            className="!overflow-visible"
          >
            {BOWL_SLIDES.map((slide) => (
              <SwiperSlide
                key={slide.image}
                className="!flex !h-[260px] !w-[260px] items-center justify-center sm:!h-[400px] sm:!w-[400px] md:!h-[490px] md:!w-[490px] lg:!h-[590px] lg:!w-[590px] xl:!h-[680px] xl:!w-[680px]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(min-width: 1280px) 680px, (min-width: 1024px) 590px, (min-width: 768px) 490px, (min-width: 640px) 400px, 260px"
                    priority
                    className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.18)]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Active title + pagination + arrows */}
        <div className="relative mt-10 flex flex-col items-center gap-10 sm:mt-14">
          <h3
            key={active}
            className="jf-headline text-center lowercase italic transition-opacity duration-500 fade-up"
          >
            {BOWL_SLIDES[active].title}
          </h3>

          <div className="flex w-full items-center justify-between">
            <span className="font-ui text-[13px] tracking-[0.3em] uppercase text-black/80">
              {String(active + 1).padStart(2, "0")}{" "}
              <span className="mx-3 opacity-40">—</span>{" "}
              {String(BOWL_SLIDES.length).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous bowl"
                className="rounded-full p-2 transition-transform hover:-translate-x-1"
              >
                <ChevronIcon direction="left" className="h-8 w-4" />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next bowl"
                className="rounded-full p-2 transition-transform hover:translate-x-1"
              >
                <ChevronIcon direction="right" className="h-8 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
