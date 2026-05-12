"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LEFT, NAV_RIGHT } from "@/lib/jf-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Light theme on every page EXCEPT the homepage hero (which has a dark video bg)
  const isHero = pathname === "/";
  const headerBgClass = isHero
    ? "bg-header-gradient"
    : "bg-white border-b border-black/5";
  const textColor = isHero ? "text-white" : "text-black";
  const hoverColor = isHero ? "hover:text-white/70" : "hover:text-black/60";
  const hamburgerBar = isHero ? "bg-white" : "bg-black";
  const highlightBorder = isHero
    ? "border-white/40 hover:bg-white/10"
    : "border-black/40 hover:bg-black hover:text-white";
  const mobileMenuBg = isHero ? "bg-black/85" : "bg-white border-t border-black/10";

  return (
    <header
      className={`absolute left-0 top-0 z-40 w-full ${headerBgClass}`}
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

        {/* Center logo — true center via grid; hidden on homepage hero */}
        <div className="justify-self-center">
          {isHero ? (
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
  children: React.ReactNode;
}

function NavItem({
  href,
  external,
  highlight,
  textColor,
  hoverColor,
  highlightBorder,
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
        className={`${baseClass} ${highlightClass}`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${baseClass} ${highlightClass}`}>
      {children}
    </Link>
  );
}
