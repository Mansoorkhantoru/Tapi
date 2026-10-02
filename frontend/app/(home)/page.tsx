import HomeHero from "@/components/sections/HomeHero";
import HeroCards from "@/components/sections/HeroCards"
import HomeSection2 from "@/components/sections/HomeSection2"
import HomeSection3 from "@/components/sections/HomeSection3"
import HomeSection4 from "@/components/sections/HomeSection4"
import HomeSection5 from "@/components/sections/HomeSection5"
import HomeSection6 from "@/components/sections/HomeSection6"

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <HeroCards/>
      <HomeSection2/>
      <HomeSection3/>
      <HomeSection4/>
      <HomeSection5/>
      <HomeSection6/>
    </div>
  );
}