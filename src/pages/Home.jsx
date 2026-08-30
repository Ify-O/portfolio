import Hero from "../components/sections/home/Hero";
import AboutSection from "../components/sections/home/AboutSection";
import Technologies from "../components/sections/home/Technologies";
import FeaturedProjects from "../components/sections/home/FeaturedProjects";
import Certifications from "../components/sections/home/Certifications";
import CTA from "../components/sections/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Technologies />
      <FeaturedProjects />
      <Certifications />
      <CTA />
    </>
  );
}
