import React from "react";
import Purple from "../ui/text/Purple";
import { Button } from "@nextui-org/react";
import Image from "next/image";

type Props = {};

const DareToLive = (props: Props) => {
  return (
    <div className="container relative">
      <div className="md:flex justify-between space-y-8 items-center h-full my-8">
        <div className="space-y-8 md:w-1/2">
          <Purple className="text-dark">Dare to</Purple>
          <h1 className="text-6xl font-semibold">
            Dare to live the life you have always wanted
          </h1>
          <p className="text-gray-600">
            Understand to achieve anything requires faith and belief in
            yourself, vision, hard work, determination, and dedication.
          </p>
          <Button className="text-white">View Package</Button>
        </div>
        <div className="relative">
          <Image
            className="rounded-t-full"
            src="/daretolive.png"
            alt=""
            height={270}
            width={380}
          />
          <Image
            className="absolute z-10 top-2/3 md:right-[-69px] right-[-10px]"
            src="/smalldaretolive.png"
            alt=""
            height={150}
            width={150}
          />
        </div>
      </div>
    </div>
  );
};

export default DareToLive;
