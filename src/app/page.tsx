import HeroSection from "@/components/homecomponents/HeroSection";
import PricingSection from "@/components/homecomponents/PricingSection";
import WhyTutorLink from "@/components/homecomponents/WhyTutorLink";



export default function Home() {
  return (
    <div>
        <HeroSection/>
      <div className="container mx-auto md:px-0 px-5">
        <PricingSection/>
        <WhyTutorLink/>
      </div>
    </div>
  );
}
