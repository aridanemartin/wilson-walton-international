import Hero from "@/components/sections/Hero";
import CoreSolutions from "@/components/sections/CoreSolutions";
import IndustriesServed from "@/components/sections/IndustriesServed";
import WhyWilsonWalton from "@/components/sections/WhyWilsonWalton";
import FeaturedResources from "@/components/sections/FeaturedResources";
import FinalCTA from "@/components/sections/FinalCTA";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreSolutions solutions={solutions} />
      <IndustriesServed industries={industries} />
      <WhyWilsonWalton />
      <FeaturedResources />
      <FinalCTA />
    </>
  );
}
