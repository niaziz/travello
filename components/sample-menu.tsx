import Link from "next/link";
import React from "react";

type Props = {};

const SampleMenu = (props: Props) => {
  return (
    <div>
      <div className="w-full bg-[#F8F8F8]  translate-y-[-40px] container mx-auto">
        <ul className="flex text-black items-center justify-around text-md">
          <li className="">
            <Link href="#" className="hover:bg-[#FFFFFF] py-8 px-4s">
              Information
            </Link>
          </li>
          <li className="py-8 hover:bg-[#FFFFFF]">
            <Link href="#">Tour Plan</Link>
          </li>
          <li className="p-8 hover:bg-[#FFFFFF]">
            <Link href="#">Location</Link>
          </li>
          <li className="p-8 hover:bg-[#FFFFFF]">
            <Link href="#">Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SampleMenu;
