import React from "react";
import Purple from "./ui/text/Purple";
import Volkhov from "./ui/text/VolkhovFont";
import { Button } from "@nextui-org/react";
import Image from "next/image";

type Props = {};

const AboutUs01 = (props: Props) => {
  return (
    <div className="container py-8 relative w-full">
      <div className="md:flex md:w-6/12">
        <div className="space-y-4 mb-8">
          <Purple className="text-center md:text-left">Promotion</Purple>
          <Volkhov className="md:text-4xl text-2xl text-center md:text-left">
            We Provide You Best Europe Sightseeing Tours
          </Volkhov>
          <p className="text-gray-500 text-center md:text-left">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Noan quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <Button className="text-white w-full md:w-28">View Package</Button>
        </div>
        <div className=" ">
          <Image
            src="/about-section-01-svg.svg"
            alt=""
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs01;
