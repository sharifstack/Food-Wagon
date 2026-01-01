import Image from "next/image";
import React from "react";
import banner from "../../../public/assets/Banner/banner.png";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import AnimatedWrapper from "../Animation/AnimatedWrapper";
import ScrollReveal from "../Animation/ScrollReveal";

const Banner = () => {
  return (
    <ScrollReveal>
      <div className="bg-[#FFB20E]">
        <div className="container">
          <div className="flex sm:flex-row flex-col">
            <div className="left sm:w-3/5 my-16 sm:my-32">
              <AnimatedWrapper>
                <div className="Text mb-8">
                  <h1 className="font-source text-4xl  sm:text-[88px] text-FFFFFF font-bold">
                    Are you starving?
                  </h1>
                  <p className="font-source text-[22px] text-504F4F">
                    Within a few clicks, find meals that are accessible near you
                  </p>
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper>
                <div className="searchBar  sm:w-[856px] ">
                  <div className="top flex gap-2 border-b border-black/10 px-5  py-6 sm:pl-6 rounded-t-lg bg-FFFFFF">
                    <div className="DeliveryButton flex gap-2.5 px-6 py-2.5  hover:rounded-lg text-757575 hover:bg-text/10 cursor-pointer hover:text-text transition-all duration-200">
                      <span>
                        <RiMotorbikeFill className="text-xl" />
                      </span>
                      <h4 className="font-source font-bold text-[18px] ">
                        Delivery
                      </h4>
                    </div>
                    <div className="PickUpButton flex gap-2.5 px-6 py-2.5  hover:rounded-lg text-757575 hover:bg-text/10 cursor-pointer hover:text-text transition-all duration-200">
                      <span>
                        <FaShoppingBag className="text-xl" />
                      </span>
                      <h4 className="font-source font-bold text-[18px]  ">
                        Pickup
                      </h4>
                    </div>
                  </div>
                  <div className="Down flex sm:flex-row flex-col sm:items-center gap-4 py-2 sm:py-6 px-2 sm:px-4 rounded-b-lg  bg-FFFFFF">
                    <div className="inputField relative">
                      <input
                        className="py-3 pl-11 bg-[#f5f5f5] placeholder:text-[#9E9E9E] outline-none text-[18px] font-sans w-full sm:w-[593px] rounded-lg"
                        type="text"
                        placeholder="Enter Your Address"
                      />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2">
                        <FaLocationDot className="text-[#F65900] text-xl" />
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <div className="button flex items-center gap-2.5  py-2.5 sm:py-5 px-6 sm:px-12 rounded-lg cursor-pointer  bg-[#F65900]">
                        <span>
                          <FaSearch className="text-xl text-FFFFFF" />
                        </span>
                        <button className="font-source font-bold text-[18px] text-FFFFFF cursor-pointer">
                          Find Food
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
            <div className="right w-2/5 sm:flex relative hidden ">
              <div className="absolute right-0 top-full -translate-y-full">
                <AnimatedWrapper>
                  <Image
                    className="cursor-pointer"
                    src={banner}
                    width={0}
                    height={0}
                    alt="image"
                  />
                </AnimatedWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Banner;
