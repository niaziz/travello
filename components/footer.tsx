import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-footer h-[380px] w-screen bg-contain bg-right bg-no-repeat">
      <div className="container flex">
        <div className="flex">
          <div>
            <Image
              src="/Travello-black.svg"
              height={140}
              width={140}
              alt="logo"
            />
            <p>
              Travel helps companies <br />
              manage payments easily.
            </p>
            <p>Social Links</p>
          </div>
          <div>Company</div>
          <div>Desination</div>
        </div>
        <div>Join our New letter</div>
      </div>
    </div>
  );
};

export default Footer;
