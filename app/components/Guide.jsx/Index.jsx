import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Guide = () => {
  const guideInfo = [
    {
      id: 1,
      name: "Select location",
      p: "Choose the location where your food will be delivered.",
    },

    {
      id: 2,
      name: "Choose order",
      p: "Check over hundreds of menus to pick your favorite food",
    },

    {
      id: 3,
      name: "Pay advanced",
      p: "It's quick, safe, and simple. Select several methods of payment",
    },
    {
      id: 4,
      name: "Choose order Enjoy meals",
      p: "Food is made and delivered directly to your home.",
    },
  ];

  return (
    <div className="py-20 bg-linear-to-b from-[#FFCE67]/25  to-[#FDEDCA]/22 ">
      <div className="container">
        <div className="">
          <h2 className="font-source font-bold text-[43px] text-[#F17228] text-center">
            How does it work
          </h2>

          <div className="infomration">
            <span className="">
              <FaLocationDot className="w-[86px] h-28 text-[#FFAE00] drop-shadow-[0_4px_8px_rgba(255,205,30,0.7)]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
