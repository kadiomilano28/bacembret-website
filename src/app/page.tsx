import { BowlSlider } from "@/components/BowlSlider";
import { EatSipSection } from "@/components/EatSipSection";
import { GallerySection } from "@/components/GallerySection";
import { HeroBanner } from "@/components/HeroBanner";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroBanner />
        <BowlSlider />
        <EatSipSection />
        <GallerySection />
      </main>
      <SiteFooter />
    </>
  );
}
