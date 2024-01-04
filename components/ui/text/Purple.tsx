import React from "react";

type Props = {
  children: String;
  className: String;
};

const purple = ({ children, className }: Props) => {
  return (
    <div className={`${className} text-[#DF6951] uppercase font-bold`}>
      {children}
    </div>
  );
};

export default purple;
