import React from "react";
import Image from "next/image";

const Brandbar = () => {
  return (
    <div className="bg-[#868686s] w-full items-center justify-around p-14 hidden md:flex">
      <div>
        <Image
          src="./flyemirates.svg"
          height={100}
          width={100}
          alt="Fly Emirates"
        />
      </div>
      <div>
        <Image src="./trivago.svg" height={100} width={100} alt="Trivago" />
      </div>
      <div>
        <Image src="./trivago.svg" height={100} width={100} alt="Trivago" />
      </div>
      <div>
        <Image src="./trivago.svg" height={100} width={100} alt="Trivago" />
      </div>
      <div>
        <Image src="./trivago.svg" height={100} width={100} alt="Trivago" />
      </div>
    </div>
  );
};

export default Brandbar;
