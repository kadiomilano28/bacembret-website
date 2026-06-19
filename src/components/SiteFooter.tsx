import Image from "next/image";
import Link from "next/link";
import { AnimatedLeaves } from "./AnimatedLeaves";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "./icons";
import { NAV_LEFT, NAV_RIGHT, RESTAURANT } from "@/lib/jf-data";

const TOP_NAV = [...NAV_LEFT, ...NAV_RIGHT.filter((l) => l.label !== "ORDER NOW")];

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-white text-black">
      {/* === Footer top: logo (left) + nav links (right) === */}
      <div className="footer-top mx-auto flex max-w-[1600px] flex-col items-center gap-8 px-6 py-[60px] sm:px-10 md:flex-row md:justify-between md:py-[80px] lg:px-[4%]">
        <Link href="/" aria-label="Baçe Mbret home" className="block shrink-0">
          <Image
            src="/images/bacembret-logo.png"
            alt="Baçe Mbret"
            width={1024}
            height={1024}
            className="h-auto w-[120px] lg:w-[140px]"
          />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:gap-x-12">
          {TOP_NAV.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[var(--font-display)] text-[16px] text-black transition-colors hover:text-black/60"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-[var(--font-display)] text-[16px] text-black transition-colors hover:text-black/60"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>

      {/* === Footer middle: phone + social icons on dark bg === */}
      <div className="footer-middle relative bg-footer-jf bg-cover bg-center bg-no-repeat px-6 py-[80px] text-white sm:px-10 md:py-[51px] lg:px-[4%]">
        <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col items-center gap-8 md:flex-row md:justify-between md:gap-10">
          <a
            href={`tel:${RESTAURANT.phone.replace(/[^\d+]/g, "")}`}
            aria-label={`Call ${RESTAURANT.phone}`}
            className="footer-middle-text font-[var(--font-display)] text-[26px] font-normal leading-tight text-white transition-opacity hover:opacity-80 sm:text-[32px] lg:text-[36px]"
          >
            {RESTAURANT.phone}
          </a>

          <div className="flex items-center gap-5">
            <a
              href={RESTAURANT.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white transition-opacity hover:opacity-70"
            >
              <InstagramIcon className="h-9 w-9" />
            </a>
            <a
              href={RESTAURANT.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white transition-opacity hover:opacity-70"
            >
              <FacebookIcon className="h-7 w-7" />
            </a>
            <a
              href={RESTAURANT.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white transition-opacity hover:opacity-70"
            >
              <TiktokIcon className="h-7 w-7" />
            </a>
          </div>
        </div>

        {/* Animated green-leaf branch — slides in from the right when footer enters viewport */}
        <AnimatedLeaves />
      </div>

      {/* === Footer bottom: address + hours (left), 71three logo (right) === */}
      <div className="footer-bottom mx-auto max-w-[1600px] px-6 py-[60px] sm:px-10 md:py-[80px] lg:px-[4%]">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div className="footer-bottom-left flex w-full flex-wrap gap-x-[60px] gap-y-[40px] md:max-w-[50%] md:flex-[50%] md:justify-between">
            <div className="footer-bottom-area">
              <h4 className="footer-title mb-6 font-[var(--font-display)] text-[22px] font-semibold lowercase text-black md:mb-10 md:text-[24px]">
                {RESTAURANT.name}
              </h4>
              <ul className="font-ui flex flex-col gap-1 text-[14px] leading-[30px] text-black">
                <li>{RESTAURANT.address}</li>
                <li>{RESTAURANT.city}</li>
              </ul>
            </div>

            <div className="footer-bottom-area">
              <h4 className="footer-title mb-6 font-[var(--font-display)] text-[22px] font-semibold lowercase text-black md:mb-10 md:text-[24px]">
                orari
              </h4>
              <ul className="font-ui flex flex-col gap-1 text-[14px] leading-[30px] text-black">
                {RESTAURANT.hours.map((h) => (
                  <li key={h.label}>
                    {h.label}: {h.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-bottom-right">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 transition-opacity hover:opacity-70"
              aria-label="Made by Weak Websites"
            >
              <span className="font-ui text-[11px] tracking-[0.22em] uppercase text-black/55">
                made by
              </span>
              <Image
                src="/images/weakwebsites-logo.svg"
                alt="Weak Websites"
                width={172}
                height={45}
                className="h-auto w-[120px] lg:w-[150px]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
