import HeroOverly from "@/components/hero-overlay";
import SampleMenu from "@/components/sample-menu";
import React from "react";

type Props = {};

const Landscapes = (props: Props) => {
  return (
    <div className="bg-landscape h-[90vh] bg-cover bg-no-repeat">
      <HeroOverly text="EXPLORE" styledText="Landscapes" />
    </div>
  );
};

export default Landscapes;
