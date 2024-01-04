"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Purple from "./ui/text/Purple";
import VolkhovFont from "./ui/text/VolkhovFont";

const data = [
  {
    name: "Anetha",
    description:
      "Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.",
    image: "/profile/img-1.jpg",
  },
  {
    name: "Jack",
    description:
      "Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.",
    image: "/profile/img-2.jpg",
  },
];

export default function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="bg-carousel w-full h-[620px] relative">
      <div className="container w-full">
        <Purple className="w-full text-center pt-20">promotion</Purple>
        <div className="w-full mt-2 text-center">
          <VolkhovFont className="text-4xl">
            See What Our Clients Say
          </VolkhovFont>
          <VolkhovFont className="text-4xl">About Us</VolkhovFont>
        </div>
        <div className="max-w-96 mx-auto">
          {" "}
          <Carousel setApi={setApi} className="">
            <CarouselContent>
              {data.map((_, index) => (
                <CarouselItem key={index} className="">
                  <div className="w-full flex justify-center">
                    <Image
                      src={_.image}
                      alt="..."
                      height={100}
                      width={100}
                      className="object-cover rounded-full border-4 border-white shadow-2xl translate-y-1/2"
                    />
                  </div>
                  <Card className="flex flex-col bg-white rounded-[20px]">
                    <CardContent className="flex flex-col items-center justify-center text-center text-sm mb-2 mt-20 px-6">
                      <Image
                        className="absolute top-40 left-8 opacity-50"
                        src="/double-quotes.svg"
                        height={80}
                        width={80}
                        alt=""
                      />
                      {_.description}
                      <p className="font-bold text-1xl mt-4">{_.name}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="translate-y-8" />
            <CarouselNext className="translate-y-8" />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foregrounz">
            Slide {current} of {count}
          </div>
        </div>
      </div>
      <Image
        src="/Travel-carousel.png"
        alt="..."
        height={260}
        width={260}
        className="absolute bottom-0 left-0"
      />
    </div>
  );
}
