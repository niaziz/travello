import Footer from "@/components/footer";
import HeroOverly from "@/components/hero-overlay";
import React from "react";
import AboutUs01 from "@/components/AboutUs01";
import Section02 from "@/components/About/Section02";
import About03 from "@/components/About/about-03";
import AboutGallery from "@/components/About/AboutGallery";
import Carousel from "@/components/carousel";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-about-us w-full h-[90vh] bg-cover bg-no-repeat">
      <HeroOverly text="READ" styledText="About Us" />
      <AboutUs01 />
      <Section02 />
      <About03 />
      <AboutGallery />
      <Carousel />
      <Footer />
    </div>
  );
};

export default About;
