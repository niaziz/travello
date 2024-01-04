import React from "react";
import Purple from "../ui/text/Purple";
import VolkhovFont from "../ui/text/VolkhovFont";
import Image from "next/image";

type Props = {};

const data = [
  {
    name: "choose Destination",
    color: "",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Urna, tortor tempus.",
    svg: "something",
  },
  {
    name: "choose Destination",
    color: "",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Urna, tortor tempus.",
    svg: "something",
  },
  {
    name: "choose Destination",
    color: "",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Urna, tortor tempus.",
    svg: "something",
  },
];

const GetYourFavorite = (props: Props) => {
  return (
    <div className="my-8">
      <div className="container">
        <div className="flex  w-full">
          <div>
            <Purple className="">Fast & Easy</Purple>
            <VolkhovFont className="">
              Get Your Favorite Resort Bookings
            </VolkhovFont>
            <div>
              {data.map((_) => (
                <div className="flex" key={_.name}>
                  <div>Svg</div>
                  <div>
                    <h1 className="font-semibold">{_.name}</h1>
                    <p>{_.descrption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
};

export default GetYourFavorite;
