"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useState, useCallback, useEffect } from "react";

type Props = {};

const MediaQuery = (width: any) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width:${width}px)`);

    if (media.addEventListener) {
      media.addEventListener("change", updateTarget);
    } else {
      media.addListener(updateTarget);
    }

    if (media.matches) {
      setTargetReached(true);
    }

    if (media.removeEventListener) {
      return () => media.removeEventListener("change", updateTarget);
    } else {
      // compatibility for browser that sdont have removeEventListener
      return () => media.removeListener(updateTarget);
    }
  }, [width, updateTarget]);

  return targetReached;
};

const header = () => {
  const isBreakpoint = MediaQuery(680);
  return (
    <div className="bg-hero-pattern  w-full h-[400px] bg-cover border-b-4 border-[#DF6951] md:border-none md:bg-cover md:h-[90vh] bg-no-repeat relative mb-56">
      {isBreakpoint ? (
        <div className=" relative top-[250px] left-0 mx-[4rem] space-y-4">
          <h1 className="text-3xl text-white font-bold">
            Where are you going next?
          </h1>
          <div className=" bg-[#f3f3f396] backdrop-blur-md rounded-[20px] shadow-xl">
            <div className="text-center mx-6">
              <input
                className="px-4 py-3 my-8 outline-none rounded-[11px] shadow-lg w-full"
                type="text"
                placeholder="Search"
              />
              <div className="flex justify-between items-center mx-4 text-left">
                <div className="">
                  <h1 className="text-sm">Flight Date</h1>
                  <p className="font-bold">13 Jul - 18 Jul</p>
                </div>
                <div className="bg-gray-100">|</div>
                <div>
                  <div className="">
                    <h1 className="text-sm">Flight Date</h1>
                    <p className="font-bold">13 Jul - 18 Jul</p>
                  </div>
                </div>
              </div>
              <Button className="my-6 w-full shadow-lg">Today's Promo</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container pt-64">
          <div>
            <div>
              <svg
                width="84"
                height="18"
                viewBox="0 0 84 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 16.6711L8.96668 4.73778C9.7367 3.19773 11.9344 3.19773 12.7045 4.73778L16.8022 12.9334C17.5723 14.4734 19.77 14.4734 20.54 12.9334L24.6378 4.73778C25.4078 3.19773 27.6056 3.19773 28.3756 4.73778L32.4734 12.9334C33.2434 14.4734 35.4411 14.4734 36.2112 12.9334L40.3089 4.73778C41.079 3.19773 43.2767 3.19773 44.0467 4.73778L48.1445 12.9334C48.9145 14.4734 51.1123 14.4734 51.8823 12.9334L55.9801 4.73778C56.7501 3.19773 58.9478 3.19773 59.7179 4.73778L63.8156 12.9334C64.5857 14.4734 66.7834 14.4734 67.5534 12.9334L71.6512 4.73778C72.4212 3.19773 74.619 3.19773 75.389 4.73778L81.3557 16.6711"
                  stroke="#DF6951"
                  stroke-width="5.22371"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-white text-6xl font-bold md:w-full lg:w-3/6 mt-4">
                No matter where you’re going to, we’ll take you there
              </h1>
            </div>
            <div className="bg-[#f3f3f396]  text-white text-md flex items-center backdrop-blur-md w-7/12 mt-7 justify-between rounded-[11px] p-5">
              <div className="flex items-center justify-around flex-1 p-3 w-4/6">
                <div className="w-2/12">
                  <input
                    type="text"
                    className="outline-none bg-transparent placeholder-white "
                    placeholder="Where?"
                  />
                </div>
                <div className="w-2/6">Travel Type</div>
                <div className="w-2/6">Duration</div>
              </div>
              <div>
                <Button className="px-12 py-6">Submit</Button>
              </div>
            </div>
          </div>
          {/* Scroll */}
        </div>
      )}
    </div>
  );
};

export default header;
