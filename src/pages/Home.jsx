import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Hero from "../components/sections/home/Hero";
import AboutSection from "../components/sections/home/AboutSection";
import Technologies from "../components/sections/home/Technologies";
import FeaturedProjects from "../components/sections/home/FeaturedProjects";
import Certifications from "../components/sections/home/Certifications";
import CTA from "../components/sections/home/CTA";

export default function Home() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");

    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [searchParams]);

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
}import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Hero from "../components/sections/home/Hero";
import AboutSection from "../components/sections/home/AboutSection";
import Technologies from "../components/sections/home/Technologies";
import FeaturedProjects from "../components/sections/home/FeaturedProjects";
import Certifications from "../components/sections/home/Certifications";
import CTA from "../components/sections/home/CTA";

export default function Home() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");

    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [searchParams]);

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