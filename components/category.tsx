import React from "react";
import { Volkhov } from "next/font/google";
import SampleCard from "./ui/sample-card";
import Plane from "@/public/Plane.svg";

const volkhov = Volkhov({
  weight: "400",
  subsets: ["latin"],
});

type Props = {};

const category = (props: Props) => {
  return (
    <div className="container text-center">
      <p className="text-[#DF6951] text-md">Category</p>
      <h1 className={`${volkhov.className} text-4xl mt-5`}>
        We Offer Best services
      </h1>
      <div className="md:flex my-20 gap-24 justify-evenly items-center container p-2 ">
        <SampleCard
          src={Plane}
          title="Best Flights Options"
          description="sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        />
        <SampleCard
          src={Plane}
          title="Best Flights Options"
          description="sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        />
        <SampleCard
          src={Plane}
          title="Best Flights Options"
          description="sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        />
        <SampleCard
          src={Plane}
          title="Best Flights Options"
          description="sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        />
      </div>
    </div>
  );
};

export default category;
