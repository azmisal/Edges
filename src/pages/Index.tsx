import HeroSection from "@/components/HeroSection";
//import LogoSection from "@/components/LogoSection";
import BuildEdgeSection from "@/components/BuildEdgeSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import TechStackSection from "@/components/TechStackSection";
import ProductsSection from "@/components/ProductsSection";
//import TeamSection from "@/components/TeamSection";
import TransformSection from "@/components/TransformSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen p-4 pt-48 lg:pt-24">
      <HeroSection />
      {/* <LogoSection /> */}
      <BuildEdgeSection />
      <CoreValuesSection />
      <TechStackSection />
      <ProductsSection />
      {/* <TeamSection /> */}
      <TransformSection />
    </div>
  );
};

export default Index;
