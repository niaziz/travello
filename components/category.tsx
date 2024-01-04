import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Volkhov_font from "./ui/text/VolkhovFont";

type Props = {};
const datas = [
  {
    name: "Guided Tours",
    href: "/men.svg",
    details: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
  {
    name: "Best Flight Options",
    href: "/plane-svg.svg",
    details: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
  {
    name: "Religous Tours",
    href: "/worship.svg",
    details: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
  {
    name: "Medical Insurance",
    href: "/medic.svg",
    details: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
];

const category = (props: Props) => {
  return (
    <div className="text-center container pt-12 md:hidden lg:hidden xl:block">
      <h1 className="text-[#DF6951]">CATEGORY</h1>
      <Volkhov_font className="text-3xl mt-4">
        We Offer the Best Service
      </Volkhov_font>
      <div className="lg:flex justify-evenly items-center md:space-x-24 my-4 mx-auto space-y-12">
        {datas.map((data) => (
          <Card
            className="w-full rounded-[40px] space-y-4 py-11 shadow-none hover:shadow-lg duration-500"
            key={data.href}
          >
            <div className="mx-auto">
              <Image
                alt="Card background text-center"
                className="rounded-xl "
                src={data.href}
                width={80}
                height={80}
              />
            </div>
            <CardHeader className="mt-1 px-8 flex-col">
              <h5 className="font-bold text-large ">{data.name}</h5>
            </CardHeader>
            <CardBody className="overflow-visible px-6 py-2 text-center">
              <p>{data.details}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default category;
