import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type Props = {
  src: StaticImport;
  title: String;
  description: String;
};

const sampleCard = (props: Props) => {
  return (
    <div>
      <div className="rounded-[50px] hover:shadow-md  transition-all">
        <Image
          className="mx-auto"
          src={props.src}
          width={70}
          height={70}
          alt="plane"
        />
        <p className="font-bold mt-5 text-sm">{props.title}</p>
        <p className="mt-2 text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export default sampleCard;
