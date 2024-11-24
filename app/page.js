import Doctors from "@/components/Home/Doctors";
import Hero from "@/components/Home/Hero";
import Offers from "@/components/Home/Offers";
import OtherSections from "@/components/Home/OtherSections";
import ServiceSlideshow from "@/components/Home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Offers /> */}
      <div className="bg-gray-100">

      <ServiceSlideshow />
      </div>
      <Doctors />
      <OtherSections />
    </>
  );
}
