import Image from "next/image";
import React from "react";
import { MdDiscount } from "react-icons/md";

import { FaClock, FaStar } from "react-icons/fa";

const FeaturedRestaurantsCard = ({
  src,
  Discount,
  resuturentimg,
  title,
  rating,
  isOpen,
}) => {
  return (
    <div className="cursor-pointer">
      <div className="image relative hover:scale-105 hover:shadow-lg transition-all duration-200">
        <Image
          className="rounded-2xl  "
          src={src}
          height={301}
          width={357}
          alt="image"
        />
        <div className="Discount flex items-center gap-2.5 bg-[#F17228] absolute px-4 py-2 rounded-lg left-6 top-6">
          <span className="">
            <MdDiscount className="text-xl text-FFFFFF" />
          </span>
          <h6 className="text-xl text-FFFFFF font-source font-bold">
            {Discount}
          </h6>
        </div>
        <div className="Clock flex items-center gap-2.5 bg-primary absolute px-4 py-2 rounded-lg right-[90px] top-6">
          <span>
            <FaClock className="text-xl text-FFFFFF" />
          </span>
          <h6 className="text-xl text-FFFFFF font-source font-bold">Fast</h6>
        </div>
      </div>
      <div className="ResturantDetails mt-6 mb-8 hover:scale-105 hover:drop-shadow-lg transition-all duration-200">
        <div className="flex gap-6">
          <div className="image">
            <Image
              className="rounded-lg"
              src={resuturentimg}
              width={64}
              height={64}
              alt="image"
            />
          </div>
          <div className="flex flex-col">
            <div className="title">
              <h6 className="text-xl text-424242 font-source font-bold">
                {title}
              </h6>
            </div>
            <div className="rating flex items-center gap-2">
              <span>
                <FaStar className="text-xl text-primary" />
              </span>
              <div className="text-xl text-primary font-source font-normal">
                {rating}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="availability ">
        <span
          className={`py-2 px-4 text-xl font-source font-bold rounded-lg  hover:scale-110 hover:shadow-lg transition-all duration-200
    ${isOpen ? "bg-[#79B93C]/20 text-[#79B93C]" : "bg-text/20 text-warning"}`}
        >
          {isOpen ? "Open Now" : "Opens tomorrow"}
        </span>
      </div>
    </div>
  );
};

export default FeaturedRestaurantsCard;
