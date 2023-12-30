import React from "react";
import { Yesteryear } from "next/font/google";

const yesterYear = Yesteryear({
  weight: "400",
  subsets: ["latin"],
});

type Props = {
  text: String;
  styledText: String;
};

const heroOverly = ({ text, styledText }: Props) => {
  return (
    <div className="w-full h-full bg-[#26262612] relative">
      <p className="text-white text-center translate-y-60 opacity-80">{text}</p>
      <h1
        className={`${yesterYear.className} text-white text-9xl text-center mx-auto translate-y-64`}
      >
        {styledText}
      </h1>
    </div>
  );
};

export default heroOverly;
