import Image from "next/image";
import React from "react";
import Purple from "../ui/text/Purple";
import Volkhov from "../ui/text/VolkhovFont";
import { CircularProgress, Card, CardBody } from "@nextui-org/react";

type Props = {};

const datas = [
  { value: 78, name: "vocation", color: "" },
  { value: 55, name: "HoneyMoon", color: "purple-500" },
  { value: 30, name: "Musical Events", color: "purple-500" },
];

const About03 = (props: Props) => {
  return (
    <div className="container relative">
      <div
        className="
        my-8 md:flex md:justify-between"
      >
        <div className="md:w-6/12 ">
          <Image
            className="object-cover"
            src="/about-us-img-3.png"
            alt="..."
            height={350}
            width={350}
          />
        </div>
        <div className="md:w-6/12 my-8 mt-24 space-y-4">
          <Purple className="md:text-left text-center">Trend</Purple>
          <Volkhov className="md:text-left text-center text-3xl">
            Our Popular Tour Plans
          </Volkhov>
          <p className="text-gray-600 md:text-left text-center">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium. Et labore harum non nobis ipsum eum
            molestias mollitia et corporis praesentium a laudantium.
          </p>
          <div className="flex gap-4">
            {datas.map((data) => (
              <Card className="shadow-none" key={data.name}>
                <CardBody>
                  <CircularProgress
                    classNames={{
                      svg: "md:w-36 md:h-36 w-24 h-24",
                      indicator: `stroke-${data.color} shadow-2xl`,
                      track: "stroke-white/10",
                      value: `md:text-3xl text-1xl font-semibold text-gray-500`,
                    }}
                    value={data.value}
                    strokeWidth={4}
                    showValueLabel={true}
                  />
                </CardBody>

                <p className="text-center bg-white uppercase font-bold">
                  {data.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Image
        className="hidden md:block md:absolute md:top-6 md:right-5"
        src="/about-us-img-4.png"
        alt="..."
        height={210}
        width={210}
      />
    </div>
  );
};

export default About03;
