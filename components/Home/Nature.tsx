import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Purple from "../ui/text/Purple";
import VolkhovFont from "../ui/text/VolkhovFont";

const data = [
  { name: "Nature", img: "/nature.png" },
  { name: "City", img: "/city.png" },
];

type Props = {};

const Nature = () => {
  return (
    <div className="w-full h-[340px]">
      <div className="hidden md:flex items-center w-full relative">
        {data.map((_) => (
          <div key={_.img} className="relative">
            <Image
              className="object-cover"
              src={_.img}
              alt="..."
              height={340}
              width={790}
            />

            <div className="h-full w-full absolute bg-gradient-to-tr from-transparent to-[#00000079] top-0 left-0"></div>

            <div className="">
              <Purple className="text-white font-semibold absolute z-100 text-1xl left-1/2 translate-x-[-50%] top-24">
                Promotion
              </Purple>
              <VolkhovFont className="z-100 absolute text-white text-4xl top-32 left-1/2 translate-x-[-50%] ">
                Explore {_.name}
              </VolkhovFont>
              <Button className="z-100 absolute text-white bg-transparent border-2 border-white top-44 left-1/2 translate-x-[-50%] ">
                View Package
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nature;
