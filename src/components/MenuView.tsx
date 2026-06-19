"use client";

import Image from "next/image";
import { MENU } from "@/lib/jf-menu";

export function MenuView() {
  const handleJump = (slug: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(slug);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="relative bg-marble">
      <div className="mx-auto max-w-[1760px] px-6 pt-[150px] pb-24 sm:px-10 md:pt-[286px] lg:px-[30px] lg:pb-32">
        {/* Page title */}
        <div className="flex justify-center">
          <h1 className="jf-headline lowercase italic">menu</h1>
        </div>

        {/* Pill category tabs */}
        <ul className="menu-tab-wrapper mx-auto mt-[25px] flex flex-wrap justify-center gap-[10px]">
          {MENU.map((cat) => (
            <li key={cat.slug}>
              <a
                href={`#${cat.slug}`}
                onClick={handleJump(cat.slug)}
                className="font-ui inline-block rounded-full border border-black px-6 py-3 text-[14px] tracking-[0.06em] uppercase text-black transition-colors hover:bg-black hover:text-white sm:text-[15px]"
              >
                {cat.label}
              </a>
            </li>
          ))}
        </ul>


        {/* Categories stacked, each with 3-col grid */}
        <div>
          {MENU.map((cat) => (
            <section
              key={cat.slug}
              id={cat.slug}
              aria-labelledby={`${cat.slug}-heading`}
              className="menu-category pt-[100px] scroll-mt-[140px]"
            >
              <div className="text-center">
                <h2
                  id={`${cat.slug}-heading`}
                  className="jf-headline lowercase italic"
                >
                  {cat.label}
                </h2>
              </div>

              <ul className="mx-auto mt-12 grid max-w-[1700px] grid-cols-1 gap-x-[50px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-[60px]">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="menu-content flex flex-col items-center text-center"
                  >
                    {item.image && (
                      <div className="relative mb-4 h-[270px] w-[270px] sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(min-width: 1024px) 360px, (min-width: 640px) 300px, 270px"
                          className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.10)]"
                        />
                      </div>
                    )}
                    <h3 className="font-[var(--font-display)] text-[22px] font-semibold leading-[1.4] sm:text-[24px] lg:text-[28px] lg:leading-[1.7]">
                      {item.name}{" "}
                      <span className="ml-1 inline-block">{item.price}</span>
                      {item.tag && (
                        <span className="font-ui ml-2 inline-block translate-y-[-3px] rounded-full border border-black/30 px-2 py-0.5 text-[10px] tracking-[0.18em] uppercase text-black/70">
                          {item.tag}
                        </span>
                      )}
                    </h3>
                    {item.description && (
                      <p className="font-ui mt-3 max-w-[460px] text-[14px] leading-[25px] text-black sm:text-[15px]">
                        {item.description}
                      </p>
                    )}
                    {item.notes?.map((n) => (
                      <p
                        key={n}
                        className="font-ui mt-2 text-[12px] leading-[22px] text-black/70 italic sm:text-[13px]"
                      >
                        {n}
                      </p>
                    ))}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
