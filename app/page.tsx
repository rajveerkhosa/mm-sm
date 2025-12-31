import { Hero } from "@/components/features/Hero";
import { QuickInfo } from "@/components/features/QuickInfo";
import { AmenitiesGrid } from "@/components/features/AmenitiesGrid";
import { TruckParking } from "@/components/features/TruckParking";
import { FuelSection } from "@/components/features/FuelSection";
import { StoreSection } from "@/components/features/StoreSection";
import { PhotoGallery } from "@/components/features/PhotoGallery";
import { FAQ } from "@/components/features/FAQ";
import { Footer } from "@/components/features/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickInfo />
      <AmenitiesGrid />
      <TruckParking />
      <FuelSection />
      <StoreSection />
      <PhotoGallery />
      <FAQ />
      <Footer />
    </main>
  );
}
