import { Hero } from "@/components/features/Hero";
import { QuickInfo } from "@/components/features/QuickInfo";
import { AmenitiesGrid } from "@/components/features/AmenitiesGrid";
import { TruckParking } from "@/components/features/TruckParking";
import { FuelSection } from "@/components/features/FuelSection";
import { RestaurantsSection } from "@/components/features/RestaurantsSection";
import { PhotoGallery } from "@/components/features/PhotoGallery";
import { FAQ } from "@/components/features/FAQ";
import { CTAStrip } from "@/components/features/CTAStrip";
import { Footer } from "@/components/features/Footer";

export default function Home() {
  return (
    <>
      <main id="main" tabIndex={-1}>
        <Hero />
        <QuickInfo />
        <AmenitiesGrid />
        <TruckParking />
        <FuelSection />
        <RestaurantsSection />
        <PhotoGallery />
        <FAQ />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
