"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LaurelWreath, LoadMoreArrow } from "./icons";
import {
  GALLERY_BOTTOM,
  GALLERY_MIDDLE,
  GALLERY_TOP,
} from "@/lib/jf-data";

export function GallerySection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="relative overflow-hidden bg-marble py-24 md:py-32 lg:py-40">
      {/* Decorative leaf far top right */}
      <Image
        src="/images/branch_final-min.png"
        alt=""
        aria-hidden
        width={420}
        height={520}
        className="pointer-events-none absolute -top-16 -right-10 hidden h-auto w-[260px] -rotate-6 opacity-70 lg:block xl:w-[360px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Headline + CTAs */}
        <div className="mb-20 grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr_auto] lg:gap-16">
          <Link
            href="/menu"
            className="group relative hidden h-[160px] w-[160px] items-center justify-center text-black md:flex"
            aria-label="See menu"
          >
            <LaurelWreath className="absolute inset-0 h-full w-full text-black spin-slow opacity-90 group-hover:opacity-100" />
            <span className="font-ui relative text-[11px] tracking-[0.28em] uppercase">
              see menu
            </span>
          </Link>

          <h2 className="jf-headline text-center lowercase">
            deliciously bold <span className="italic">in every bite</span>
          </h2>

          <Link
            href="/menu"
            className="font-ui group hidden items-center gap-3 justify-self-end text-[12px] tracking-[0.28em] uppercase text-black md:inline-flex"
          >
            <span className="border-b border-black/60 pb-1 transition-colors group-hover:border-black">
              see menu
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* TOP ROW */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5 lg:gap-6">
          {GALLERY_TOP.map((item, i) => {
            const span = [
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-4 md:row-span-2",
              "md:col-span-2 md:row-span-2",
            ][i];
            return (
              <GalleryTile
                key={item.src}
                item={item}
                spanClass={span}
                aspect={i === 2 ? "aspect-[4/5]" : i === 3 ? "aspect-[3/8]" : "aspect-square"}
              />
            );
          })}
        </div>

        {/* MIDDLE FEATURE — golden gate hero image */}
        <div className="relative mt-16 flex justify-center lg:mt-24">
          <div className="relative h-[520px] w-full max-w-[820px] sm:h-[680px] lg:h-[860px]">
            <Image
              src="/images/2024/04/golden-gate.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 820px, 100vw"
              className="object-contain"
            />
          </div>

          {/* Decorative props */}
          <Image
            src="/images/2025/09/fork-1.png"
            alt=""
            aria-hidden
            width={520}
            height={520}
            className="pointer-events-none absolute -left-10 top-10 hidden h-auto w-[200px] float-y opacity-90 lg:block xl:w-[280px]"
          />
          <Image
            src="/images/2024/04/onion.png"
            alt=""
            aria-hidden
            width={367}
            height={433}
            className="pointer-events-none absolute -right-6 bottom-12 hidden h-auto w-[160px] float-y-slow lg:block xl:w-[220px]"
          />
          <Image
            src="/images/2024/04/stone1.png"
            alt=""
            aria-hidden
            width={74}
            height={75}
            className="pointer-events-none absolute right-1/4 top-10 hidden h-auto w-[44px] opacity-90 md:block lg:w-[60px]"
          />
          <Image
            src="/images/2024/04/stone2.png"
            alt=""
            aria-hidden
            width={134}
            height={96}
            className="pointer-events-none absolute left-10 bottom-16 hidden h-auto w-[80px] opacity-90 md:block lg:w-[120px]"
          />
        </div>

        {/* MIDDLE GRID + featured video */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5 lg:mt-24 lg:gap-6">
          <GalleryTile
            item={GALLERY_MIDDLE[0]}
            spanClass="md:col-span-7 md:row-span-2"
            aspect="aspect-[5/3]"
          />
          <GalleryTile
            item={GALLERY_MIDDLE[1]}
            spanClass="md:col-span-3"
            aspect="aspect-[3/4]"
          />
          <div className="md:col-span-2 md:row-span-2">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-[40px] bg-black/5">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/jf-gallery-grid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <GalleryTile
            item={GALLERY_MIDDLE[2]}
            spanClass="md:col-span-3"
            aspect="aspect-[3/4]"
          />
        </div>

        {/* BOTTOM — load more */}
        {showMore && (
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5 lg:gap-6 fade-up">
            {GALLERY_BOTTOM.map((item, i) => {
              const span = [
                "md:col-span-3",
                "md:col-span-5",
                "md:col-span-2",
                "md:col-span-2",
                "md:col-span-7",
                "md:col-span-3",
              ][i];
              return (
                <GalleryTile
                  key={item.src}
                  item={item}
                  spanClass={span}
                  aspect={
                    i === 2
                      ? "aspect-square"
                      : i === 4
                        ? "aspect-[5/3]"
                        : "aspect-[3/4]"
                  }
                />
              );
            })}
          </div>
        )}

        <div className="mt-16 flex justify-center lg:mt-24">
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            className="font-ui group flex flex-col items-center gap-3 text-[12px] tracking-[0.28em] uppercase text-black"
          >
            <LoadMoreArrow className="h-8 w-8 transition-transform group-hover:translate-y-1" />
            <span>{showMore ? "show less" : "load more"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

interface GalleryTileProps {
  item: { src: string; alt: string; className?: string };
  spanClass: string;
  aspect: string;
}

function GalleryTile({ item, spanClass, aspect }: GalleryTileProps) {
  return (
    <div className={`${spanClass} ${aspect} relative overflow-hidden ${item.className ?? ""}`}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
      />
    </div>
  );
}
