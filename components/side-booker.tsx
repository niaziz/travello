import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {};

const SideBooker = (props: Props) => {
  return (
    <div>
      <div className="bg-[#d2d2d2] space-y-6 py-10 mb-8">
        <h1>Book This Tour</h1>
        <p className="px-6">
          Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto
          aut magni nesciunt? Quo quidem neque iste expedita est dolo.
        </p>
        <form action="" className="space-y-4 ">
          <input
            type="text"
            placeholder="Name"
            className="outline-none px-3 py-4"
          />
          <input
            type="text"
            placeholder="Email"
            className="outline-none px-3 py-4"
          />
          <input
            type="text"
            placeholder="Confirm Email"
            className="outline-none px-3 py-4"
          />
          <input
            type="text"
            placeholder="Phone"
            className="outline-none px-3 py-4"
          />
          <input
            type="text"
            placeholder="dd-mm-yy"
            className="outline-none px-3 py-4"
          />
          <input
            type="text"
            placeholder="Number of Tickets"
            className="outline-none px-3 py-4"
          />
          <div className="flex flex-col px-16 space-y-2 mt-4">
            <Button className="shadow-md">Check Availability</Button>
            <Button className="shadow-md">Book Now</Button>
          </div>
        </form>
      </div>
      <div className="h-auto">
        <Image
          src="/plane.svg"
          height={600}
          width={500}
          alt="Plane"
          className="relative scale-120"
        />
      </div>
    </div>
  );
};

export default SideBooker;
