import Image from "next/image";
import React from "react";

type Props = {};

const dimension = {
  height: "110",
  width: "110",
};

const brands = (props: Props) => {
  return (
    <div className="w-full h-40 hidden md:flex items-center justify-evenly p-4 bg-[#F7F7F7]">
      <div>
        <Image src="/flyemirates.svg" width={100} height={100} alt="" />
      </div>
      <div>
        <Image src="/trivago.svg" width={100} height={100} alt="" />
      </div>
      <div>
        <Image src="/airbnb.svg" width={100} height={100} alt="" />
      </div>
      <div>
        <Image src="/turkish.svg" width={100} height={100} alt="" />
      </div>
      <div>
        <Image src="/swiss.svg" width={100} height={100} alt="" />
      </div>
    </div>
  );
};

export default brands;
