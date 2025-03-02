import Blogs from "@/components/homecomponents/Blogs";
import ClassRoomImage from "@/components/homecomponents/ClassRoomImage";
import HeroSection from "@/components/homecomponents/HeroSection";
import MarqueeSection from "@/components/homecomponents/MarqueeSection";
import PricingSection from "@/components/homecomponents/PricingSection";
import Testimonial from "@/components/homecomponents/Testimonial";
import WhyTutorLink from "@/components/homecomponents/WhyTutorLink";



export default function Home() {
  return (
    <div>
        <HeroSection/>
      <div className="container mx-auto md:px-0 px-5">
        <PricingSection/>
        <WhyTutorLink/>
      </div>
      <div className="bg-[url('/classroomimage.jpg')] bg-center bg-cover bg-fixed w-full h-full">
        <ClassRoomImage/>
      </div>
      <div className="container mx-auto md:px-0 px-5">
        <Testimonial/>
      </div>
      <MarqueeSection />
      <div className="container mx-auto md:px-0 px-5">
        <Blogs/>
      </div>
    </div>
  );
}
