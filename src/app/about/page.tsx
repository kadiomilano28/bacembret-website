import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Rreth Nesh — Baçe Mbret",
  description:
    "Restorant Baçe Mbret ofron gatime tradicionale elbasanase, kuzhinë shqiptare dhe gatime ndërkombëtare, pak minuta larg qytetit të Elbasanit.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AboutView />
      </main>
      <SiteFooter />
    </>
  );
}
