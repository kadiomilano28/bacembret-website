import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Kontakt — Baçe Mbret",
  description:
    "Na kontaktoni në Baçe Mbret — telefon, email, adresa dhe orari. Rezervo një tavolinë ose vizito restorantin tonë në Elbasan.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ContactView />
      </main>
      <SiteFooter />
    </>
  );
}
