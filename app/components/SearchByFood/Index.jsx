"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import ScrollReveal from "../Animation/ScrollReveal";

const SearchByFood = () => {
  const foods = [
    { id: 1, img: "/assets/Foods/food1.png", title: "Pizza" },
    { id: 2, img: "/assets/Foods/food2.png", title: "Noodles" },
    { id: 3, img: "/assets/Foods/food3.png", title: "Burger" },
    { id: 4, img: "/assets/Foods/food4.png", title: "Sub-sandiwch" },
    { id: 5, img: "/assets/Foods/food5.png", title: "Chowmein" },
    { id: 6, img: "/assets/Foods/food6.png", title: "Steak" },
    { id: 2, img: "/assets/Foods/food2.png", title: "Noodles" },
    { id: 3, img: "/assets/Foods/food3.png", title: "Burger" },
  ];

  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <ScrollReveal>
      <div className="bg-[#FEFAF1] pb-[55px]">
        <div className="container">
          <div className="SearchbyFood flex items-center justify-between">
            <div className="heading  pt-[82px] pb-22">
              <h1 className="text-4xl text-212121 font-source font-bold">
                Search by Foods
              </h1>
            </div>
            <div className="Arrows flex items-center gap-7">
              <div className="button">
                <button className="flex items-center gap-2.5 cursor-pointer">
                  <h6 className="text-primary font-source font-bold text-lg">
                    View All
                  </h6>
                  <span>
                    <MdOutlineKeyboardArrowRight className="text-lg text-primary" />
                  </span>
                </button>
              </div>
              <div className="Arrows flex gap-4 cursor-pointer">
                <div
                  onClick={previous}
                  className="hidden sm:flex z-20 drop-shadow-2xl drop-shadow-[#FFB20E]/50"
                >
                  <span className="bg-Secondary_F5F5F5 block rounded-full p-2.5 border bg-[#FFB20E] sm:border-0">
                    <IoIosArrowBack className="sm:w-10 sm:h-10 text-FFFFFF" />
                  </span>
                </div>

                <div
                  onClick={next}
                  className="hidden sm:flex z-20 drop-shadow-2xl drop-shadow-[#FFB20E]/50"
                >
                  <span className="bg-Secondary_F5F5F5 block rounded-full p-2.5 border sm:border-0 bg-[#FFB20E]">
                    <IoIosArrowForward className="sm:w-10 sm:h-10 text-FFFFFF" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="Foods">
            <Slider ref={sliderRef} {...settings}>
              {foods.map((item) => (
                <div className="">
                  <div className="image flex flex-col items-center gap-7 cursor-pointer">
                    <Image
                      className="rounded-full hover:scale-105 transition-all duration-200 py-2"
                      src={item.img}
                      width={218}
                      height={218}
                      alt="SearchByFoodImage"
                    />
                    <div className=" hover:scale-105 transition-all duration-200">
                      <h6 className="text-xl text-212121 font-source font-bold">
                        {item.title}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default SearchByFood;
