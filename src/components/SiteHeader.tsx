"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LEFT, NAV_RIGHT } from "@/lib/jf-data";

type ScrollMode = "default" | "floating" | "hidden";

const SHOW_AFTER = 150; // px scrolled before floating header logic activates
const UP_DELTA = 2; // any upward scroll movement >= this reveals the header
const DOWN_DELTA = 4; // downward scroll must exceed this to hide (avoids jitter)

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<ScrollMode>("default");
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let ticking = false;

    const handle = () => {
      const y = Math.max(0, window.scrollY); // guard against iOS overscroll negative
      const prev = lastScrollY.current;
      const diff = y - prev;

      if (y < SHOW_AFTER) {
        setMode("default");
      } else if (diff <= -UP_DELTA) {
        setMode("floating");
      } else if (diff >= DOWN_DELTA) {
        setMode("hidden");
      }
      lastScrollY.current = y;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        handle();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Also listen to touch events for more reliable mobile detection
    window.addEventListener("touchmove", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onScroll);
    };
  }, []);

  // Close mobile menu when entering hidden mode
  useEffect(() => {
    if (mode !== "floating" && open) setOpen(false);
  }, [mode, open]);

  // Light theme on every page EXCEPT the homepage hero (which has a dark video bg)
  const isHero = pathname === "/";
  const isFloating = mode === "floating";

  // Handle nav clicks — close mobile menu, and if clicking home while on homepage, smooth-scroll to top
  const handleNavClick = (href: string) => (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (open) setOpen(false);
  };

  // In floating mode, always use light theme (white bg + black text) for readability
  const headerBgClass = isFloating
    ? "bg-white border-b border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
    : isHero
      ? "bg-header-gradient"
      : "bg-white border-b border-black/5";
  const textColor = isFloating ? "text-black" : isHero ? "text-white" : "text-black";
  const hoverColor = isFloating
    ? "hover:text-black/60"
    : isHero
      ? "hover:text-white/70"
      : "hover:text-black/60";
  const hamburgerBar = isFloating ? "bg-black" : isHero ? "bg-white" : "bg-black";
  const highlightBorder = isFloating
    ? "border-black/40 hover:bg-black hover:text-white"
    : isHero
      ? "border-white/40 hover:bg-white/10"
      : "border-black/40 hover:bg-black hover:text-white";
  const mobileMenuBg = isFloating
    ? "bg-white border-t border-black/10"
    : isHero
      ? "bg-black/85"
      : "bg-white border-t border-black/10";

  // Position: absolute (integrated into page flow) by default, fixed (floating) when scrolling up
  const positionClass = isFloating
    ? "fixed translate-y-0"
    : mode === "hidden"
      ? "fixed -translate-y-full"
      : "absolute translate-y-0";

  return (
    <header
      className={`left-0 top-0 z-50 w-full transition-transform duration-300 ease-out ${positionClass} ${headerBgClass}`}
    >
      <div className="mx-auto grid h-[88px] max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 sm:px-8 md:h-[136px] lg:px-16">
        {/* Left side: desktop nav OR mobile hamburger */}
        <div className="flex items-center justify-self-start">
          <nav className="hidden items-center gap-8 md:flex lg:gap-12">
            {NAV_LEFT.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                external={link.external}
                textColor={textColor}
                hoverColor={hoverColor}
                onClick={handleNavClick(link.href)}
              >
                {link.label}
              </NavItem>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block h-px w-6 ${hamburgerBar} transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 ${hamburgerBar} transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 ${hamburgerBar} transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Center logo — true center via grid; hidden on homepage hero (default mode only) */}
        <div className="justify-self-center">
          {isHero && !isFloating ? (
            <span aria-hidden />
          ) : (
            <Link href="/" aria-label="Baçe Mbret home" className="block">
              <Image
                src="/images/bacembret-logo.png"
                alt="Baçe Mbret"
                width={1024}
                height={1024}
                priority
                className="h-auto w-[64px] sm:w-[72px] md:w-[88px] lg:w-[110px]"
              />
            </Link>
          )}
        </div>

        {/* Right side: desktop nav OR mobile spacer */}
        <div className="flex items-center justify-self-end">
          <nav className="hidden items-center gap-6 md:flex lg:gap-10">
            {NAV_RIGHT.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                external={link.external}
                highlight={link.label === "ORDER NOW"}
                textColor={textColor}
                hoverColor={hoverColor}
                highlightBorder={highlightBorder}
                onClick={handleNavClick(link.href)}
              >
                {link.label}
              </NavItem>
            ))}
          </nav>
          <div className="md:hidden h-10 w-10" aria-hidden />
        </div>
      </div>

      {/* Mobile dropdown */}
      <nav
        className={`md:hidden overflow-hidden ${mobileMenuBg} backdrop-blur-md transition-[max-height] duration-300 ease-out ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 px-6 py-8">
          {[...NAV_LEFT, ...NAV_RIGHT].map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              external={link.external}
              highlight={link.label === "ORDER NOW"}
              textColor={textColor}
              hoverColor={hoverColor}
              highlightBorder={highlightBorder}
              onClick={handleNavClick(link.href)}
            >
              {link.label}
            </NavItem>
          ))}
        </div>
      </nav>
    </header>
  );
}

interface NavItemProps {
  href: string;
  external?: boolean;
  highlight?: boolean;
  textColor: string;
  hoverColor: string;
  highlightBorder?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

function NavItem({
  href,
  external,
  highlight,
  textColor,
  hoverColor,
  highlightBorder,
  onClick,
  children,
}: NavItemProps) {
  const baseClass = `font-ui text-[12px] tracking-[0.18em] uppercase ${textColor} ${hoverColor} transition-colors`;
  const highlightClass = highlight
    ? `rounded-full border ${highlightBorder ?? "border-white/40"} px-4 py-2`
    : "";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`${baseClass} ${highlightClass}`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${baseClass} ${highlightClass}`}
    >
      {children}
    </Link>
  );
}
