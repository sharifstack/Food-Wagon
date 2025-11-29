import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const SliderCard = ({ src, title, location, price }) => {
  return (
    <div className="">
      <div className="card">
        <div className="image">
          <Image src={src} width={283} height={283} alt="SliderCard" />
        </div>
        <div className="texts my-4">
          <h4 className="title font-source font-bold text-xl text-424242">
            {title}
          </h4>
          <div className="location flex items-center gap-2">
            <span className="">
              <FaLocationDot className="text-primary text-lg " />
            </span>
            <h6 className="font-source font-normal text-xl text-primary">
              {location}
            </h6>
          </div>
          <h6 className="font-source font-bold text-xl text-212121 my-2">
            {price}
          </h6>
        </div>
        <button className="w-[284px] h-[60px] rounded-lg  font-source font-bold text-lg bg-warning text-FFFFFF drop-shadow-xl shadow-[#FD725C]/50 cursor-pointer hover:bg-FFFFFF hover:text-warning transition-all duration-200 ">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default SliderCard;
