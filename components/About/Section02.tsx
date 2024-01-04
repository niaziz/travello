import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

type Props = {};

const Section02 = (props: Props) => {
  return (
    <div className="md:h-[400px] h-[250px] relative">
      <Image
        src="/aboutus02.png"
        className="object-cover bg-no-repeat"
        alt="..."
        fill
      />
      <div className="bg-[#1e1e1e49] md:h-[400px] h-[250px] w-full absolute z-100 top-0 left-0"></div>
      <Button className="text-white mx-auto flex md:top-44 top-24">Play</Button>
    </div>
  );
};

export default Section02;
