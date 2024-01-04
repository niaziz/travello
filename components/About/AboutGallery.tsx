import Image from "next/image";
import Purple from "../ui/text/Purple";
import VolkhovFont from "../ui/text/VolkhovFont";
import { Card } from "@nextui-org/react";
const data = [
  {
    city: "Zurich",
    image: "/gallery/img- (1).png",
  },
  {
    city: "Switzerland",
    image: "/gallery/img- (2).png",
  },
  {
    city: "Tomorrow Land",
    image: "/gallery/img- (7).png",
  },
  {
    city: "Los Angeles",
    image: "/gallery/img- (4).png",
  },
  {
    city: "Barcelona",
    image: "/gallery/img- (5).png",
  },
  {
    city: "Bamyan",
    image: "/gallery/img- (6).png",
  },
];

const SecondData = [
  {
    city: "Bamyan",
    image: "/gallery/img- (8).png",
  },
  {
    city: "Bamyan",
    image: "/gallery/img- (9).png",
  },
  {
    city: "Bamyan",
    image: "/gallery/img- (10).png",
  },
  {
    city: "Bamyan",
    image: "/gallery/Bamyan.jpg",
  },
];

const AboutGallery = () => {
  return (
    <div className="w-full">
      <div
        className="
    container text-center space-y-8 mt-8"
      >
        <Purple className="h-2">Explore More</Purple>
        <VolkhovFont className="text-3xl">
          Our International Packagess
        </VolkhovFont>
        <div className="lg:flex gap-8">
          <div className="grid grid-cols-2 md:w-6/12 h-[790px] gap-8 mb-8">
            {data.map((da) => (
              <Card radius="none" className="border-none" key={da.image}>
                <Image
                  alt="..."
                  className="object-cover scale-125 hover:scale-100 duration-700"
                  src={da.image}
                  fill
                />
                <div className="flex absolute z-100 text-md w-full justify-between text-white p-4 bottom-0 bg-gradient-to-b from-transparent to-black">
                  <p className="">{da.city}</p>
                  <p>$840</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-2 grid-rows-2 md:w-6/12 h-auto gap-8 mb-8">
            {SecondData.map((da) => (
              <Card radius="none" className="border-none" key={da.image}>
                <Image
                  alt="..."
                  className="object-cover scale-110 hover:scale-100 duration-700"
                  src={da.image}
                  fill
                />
                <div className="flex absolute z-100 text-md w-full justify-between text-white p-4 bottom-0 bg-gradient-to-b from-transparent to-black">
                  <p className="">{da.city}</p>
                  <p>$840</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGallery;
