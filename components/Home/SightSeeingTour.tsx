import React from "react";
import Purple from "../ui/text/Purple";
import VolkhovFont from "../ui/text/VolkhovFont";
import { Button } from "@nextui-org/react";

type Props = {};

const SightSeeingTour = (props: Props) => {
  return (
    <div className="container">
      <div className="md:flex w-full md:my-24">
        <div className="max-w-96 mr-auto space-y-8">
          <Purple className="">Promotion</Purple>
          <VolkhovFont className="">
            We Provide You Best Europe Sightseeing Tours
          </VolkhovFont>
          <p className="text-sm text-gray-600">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <Button className="text-white">View Package</Button>
        </div>
        <div>2</div>
      </div>
    </div>
  );
};

export default SightSeeingTour;
