import { Volkhov } from "next/font/google";
import React from "react";

import { cn } from "@/lib/utils";

const volkhov = Volkhov({
  weight: "400",
  subsets: ["latin"],
});

type Props = {
  children: any[] | String;
  className: String;
};

const VolkhovFont = ({ children, className }: Props) => {
  return (
    <div className={cn(` ${volkhov.className} ${className}`)}>{children}</div>
  );
};

export default VolkhovFont;
