import Doctors from "@/components/Home/Doctors";
import Hero from "@/components/Home/Hero";
import Offers from "@/components/Home/Offers";
import OtherSections from "@/components/Home/OtherSections";

export default function Home() {
  return (
    <>
      <Hero />
      <Offers />
      <Doctors />
      <OtherSections />
    </>
  );
}
