import HeroOverly from "@/components/hero-overlay";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-about-us w-full h-[90vh] bg-cover bg-no-repeat">
      <HeroOverly text="READ" styledText="About Us" />
    </div>
  );
};

export default About;
