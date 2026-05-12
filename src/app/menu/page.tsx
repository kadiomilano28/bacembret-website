import type { Metadata } from "next";
import { MenuView } from "@/components/MenuView";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Menu — Just Falafel Vegan Cafe",
  description:
    "Explore our fully-vegan menu — starters, mains, soups, sides, friendz fries, desserts, coffee & tea, mocktails.",
};

export default function MenuPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <MenuView />
      </main>
      <SiteFooter />
    </>
  );
}
