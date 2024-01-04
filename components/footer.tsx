import Image from "next/image";
import React from "react";

import { Input, Button } from "@nextui-org/react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-footer w-full h-[380px] bg-contain bg-right bg-no-repeat py-12 relative block">
      <div className="container">
        <div className="md:flex justify-between">
          <div className="space-y-4">
            <Image
              src="/Travello-black.svg"
              height={140}
              width={140}
              alt="logo"
            />
            <p className="text-sm text-gray-400">
              Travel helps companies manage <br /> payments easily.
            </p>
            <Image src="/social.svg" alt="" />
          </div>
          <div className="md:flex md:w-9/12 md:mt-4 mt-6">
            <div className="flex md:flex-row justify-between items-center w-full md:w-full">
              <div className="space-y-4">
                <h1 className="font-bold text-1xl">Company</h1>
                <div className="text-gray-400 space-y-4 text-sm">
                  <p>About us</p>
                  <p>Careers</p>
                  <p>Blog</p>
                  <p>Pricing</p>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="font-bold text-1xl mr-8">Desinations</h1>
                <div className="text-gray-400 space-y-4 text-sm">
                  <p>Maldives</p>
                  <p>Bamyan</p>
                  <p>Switzerland</p>
                  <p>Torronto</p>
                </div>
              </div>
            </div>
            <div className="space-y-4  mt-8 md:w-full md:mt-0">
              <h1 className="font-bold text-1xl">Join our Newsletter</h1>
              <div className="flex items-center">
                <Input
                  type="email"
                  label="Your email address"
                  className=" text-sm rounded-[11px] outline-none w-auto"
                />
                {/* <input
                  type="text"
                  className="bg-gray-200 text-sm py-[13px] px-5 rounded-[11px] outline-none w-auto"
                  placeholder="Your email address"
                /> */}

                <Button className="bg-[#DF6951] text-white px-4 text-sm translate-x-[-17px] py-7">
                  Get in Touch
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                * Will send you weekly updates for your <br /> better tour
                packages.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[2px] rounded-lg w-full bg-[#eee] mt-12"></div>
        <h1 className="text-center py-7 text-sm">
          Made with ❤️ by Niazi
          <br /> All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
