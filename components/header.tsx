"use client";
import React from "react";
import { useState, useCallback, useEffect } from "react";
import { Avatar, AvatarGroup, Button } from "@nextui-org/react";
import Link from "next/link";

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
    <div className="bg-hero-pattern  w-full h-[400px] bg-cover border-b-4 border-[#DF6951] md:border-none md:bg-cover md:h-[95vh] bg-no-repeat relative mb-80 md:mb-auto">
      {isBreakpoint ? (
        <div className="">
          <div className="mx-auto flex justify-center">
            <div className=" fixed z-50 w-full max-w-sm h-16 bg-white border border-gray-200 rounded-full bottom-8 dark:bg-gray-700 mx-auto dark:border-gray-600 shadow-md hover:shadow-2xl duration-700">
              <div className="flex justify-evenly gap-8 h-16 w-full items-center relative">
                <Link
                  href="/"
                  className=" rounded-full  text-gray-600 hover:bg-[#DF6951] p-4 hover:text-white duration-700"
                >
                  <svg
                    className="w-5 h-5 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  <span className="">Home</span>
                </Link>

                <Link
                  href="/about"
                  className=" rounded-full  text-gray-600 hover:bg-[#DF6951] p-4 hover:text-white duration-700"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 19"
                  >
                    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                    <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                  </svg>
                  <span className="sr-only">About</span>
                </Link>

                <Link
                  href="/"
                  className=" rounded-full text-gray-500 hover:bg-[#DF6951] p-4 hover:text-white duration-700"
                >
                  <svg
                    className="w-5 h-5  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                    />
                  </svg>
                  <span className="sr-only">Service</span>
                </Link>

                <Link
                  href="/"
                  className=" rounded-full hover:bg-[#DF6951] p-4 hover:text-white  text-gray-500 duration-700"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <span className="sr-only">Profile</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative top-[190px] left-0 mx-[4rem] space-y-4">
            <h1 className="text-3xl text-white font-bold">
              Where are you going next?
            </h1>
            <div className=" bg-[#f3f3f396] backdrop-blur-md rounded-[20px] shadow-md hover:shadow-2xl duration-400 ease-in">
              <div className="text-center mx-6">
                <input
                  className="px-4 py-3 my-8 outline-none rounded-[11px] shadow-lg w-full"
                  type="text"
                  placeholder="Search"
                />
                <div className="flex justify-between items-center mx-4 text-left">
                  <div className="">
                    <h1 className="text-sm text-gray-500 mb-2">Flight Date</h1>
                    <p className="font-bold">13 Jul - 18 Jul</p>
                  </div>
                  <div className="text-gray-300">|</div>
                  <div>
                    <div className="">
                      <h1 className="text-sm text-gray-500 mb-2">
                        Flight Date
                      </h1>
                      <p className="font-bold">13 Jul - 18 Jul</p>
                    </div>
                  </div>
                </div>
                <Button className="my-6 w-4/12 shadow-lg text-white mx-auto ">
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[200px] relative top-48 mt-8">
            <h1 className="container">Popular destinations</h1>
          </div>
        </div>
      ) : (
        <div className="container lg:pt-54 md:pt-48">
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
              <h1 className="text-white text-6xl font-bold md:w-full lg:5/6 xl:w-3/6 mt-4">
                No matter where you’re going to, we’ll take you there
              </h1>
            </div>
            <div className="bg-[#f3f3f396]  text-white text-md flex items-center backdrop-blur-md xl:w-7/12 md:w-11/12 lg:w-9/12 justify-between rounded-[11px] p-5 mt-8">
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
            <div className="text-white mt-2 relative top-0 left-0 mr-auto flex">
              <AvatarGroup
                isBordered
                max={3}
                total={2500}
                renderCount={(count) => (
                  <p className="text-small text-foreground font-medium ms-2">
                    +{count} people booked Tommorow land Event in last 24 hours
                  </p>
                )}
              >
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              </AvatarGroup>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default header;
