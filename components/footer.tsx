import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

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
            <img src="social.svg" alt="" />
          </div>
          <div className="md:flex w-9/12 justify-between mt-4">
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
                {" "}
                <p>Maldives</p>
                <p>Bamyan</p>
                <p>Switzerland</p>
                <p>Torronto</p>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="font-bold text-1xl">Join our Newsletter</h1>
              <div>
                <input
                  type="text"
                  className="bg-gray-200 text-sm py-[13px] px-5 rounded-[11px] outline-none"
                  placeholder="Your email address"
                />
                <Button className="translate-x-[-17px]">Subscribe</Button>
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
