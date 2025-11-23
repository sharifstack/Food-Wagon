import Image from "next/image";
import React from "react";

const FlashDealCard = ({ src, offtext, foodname, remaining }) => {
  return (
    <div className=" flex flex-col ">
      <div className="image relative  ">
        <Image className="rounded-2xl" src={src} alt="" width={357} />
        <div className="Percentage-Off absolute left-0 top-full -translate-y-full ">
          <span className="w-[140px] h-[83px] bg-primary rounded-tr-4xl rounded-bl-2xl  block pl-[18px] pr-[50px] py-2.5"></span>
          <div className="absolute left-3 bottom-1">
            <h2 className="font-source font-bold text-7xl text-FFFFFF">
              {offtext}
            </h2>
          </div>
          <div className="absolute right-4 bottom-0 flex items-center flex-col">
            <h2 className="font-source font-bold text-4xl text-FFFFFF mb-8">
              %
            </h2>
            <h2 className="font-source font-normal text-2xl text-FFFFFF absolute bottom-2 left-0">
              Off
            </h2>
          </div>
        </div>
      </div>
      <div className="text mt-8">
        <h4 className="font-source font-bold text-[22px] text-424242 mb-5">
          {foodname}
        </h4>
        <span className="font-source font-bold text-[22px] text-warning bg-warning/20 px-4 py-2.5 rounded-lg">
          {remaining}
        </span>
      </div>
    </div>
  );
};

export default FlashDealCard;
