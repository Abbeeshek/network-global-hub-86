import HeroSection from "@/components/HeroSection";
import OfferingsSection from "@/components/OfferingsSection";
import PoweredBySection from "@/components/PoweredBySection";
import DigitalAssetSection from "@/components/DigitalAssetSection";
import GlobalInfraSection from "@/components/GlobalInfraSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <OfferingsSection />
      <PoweredBySection />
      <DigitalAssetSection />
      <GlobalInfraSection />
      <VisionSection />
      <Footer />
    </main>
  );
};

export default Index;