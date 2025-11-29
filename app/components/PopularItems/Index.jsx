"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "../ui/SliderCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PopularItems = () => {
  const itemsinfo = [
    {
      id: 1,
      title: "Cheese Burger",
      location: "Burger Arena",
      price: "$3.88",
      img1: "/assets/PopularItems/item1.png",
    },

    {
      id: 2,
      title: "Toffe’s Cake",
      location: "Top Sticks",
      price: "$4.00",
      img1: "/assets/PopularItems/item2.png",
    },

    {
      id: 3,
      title: "Dancake",
      location: "Cake World",
      price: "$1.99",
      img1: "/assets/PopularItems/item3.png",
    },

    {
      id: 4,
      title: "Crispy Sandwitch",
      location: "Fastfood Dine",
      price: "$3.00",
      img1: "/assets/PopularItems/item4.png",
    },
    {
      id: 5,
      title: "Thai  Soup",
      location: "Foody man",
      price: "$2.79",
      img1: "/assets/PopularItems/item5.png",
    },

    {
      id: 3,
      title: "Dancake",
      location: "Cake World",
      price: "$1.99",
      img1: "/assets/PopularItems/item3.png",
    },

    {
      id: 1,
      title: "Cheese Burger",
      location: "Burger Arena",
      price: "$3.88",
      img1: "/assets/PopularItems/item1.png",
    },

    {
      id: 2,
      title: "Toffe’s Cake",
      location: "Top Sticks",
      price: "$4.00",
      img1: "/assets/PopularItems/item2.png",
    },
  ];

  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <div className="my-20">
      <div className="container">
        <div className="heading mb-[88px] text-center">
          <h1 className="font-source font-bold text-[43px] text-212121">
            Popular items
          </h1>
        </div>
        <div className="cards cursor-pointer relative">
          <div className="Arrows flex cursor-pointer">
            <div
              onClick={previous}
              className="hidden sm:flex absolute left-0 -translate-x-full top-2/5 -translate-y-1/2  z-20 drop-shadow-2xl drop-shadow-[#FFB20E]/50"
            >
              <span className="bg-Secondary_F5F5F5 block rounded-full p-2.5 border bg-[#FFB20E] sm:border-0">
                <IoIosArrowBack className="sm:w-10 sm:h-10 text-FFFFFF" />
              </span>
            </div>

            <div
              onClick={next}
              className="hidden sm:flex absolute right-0 translate-x-full top-2/5 -translate-y-full z-20 drop-shadow-2xl drop-shadow-[#FFB20E]/50"
            >
              <span className="bg-Secondary_F5F5F5 block rounded-full p-2.5 border sm:border-0 bg-[#FFB20E]">
                <IoIosArrowForward className="sm:w-10 sm:h-10 text-FFFFFF" />
              </span>
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {itemsinfo.map((item) => (
              <div
                key={item.id}
                className="hover:scale-102 transition-all duration-200 px-2 py-5"
              >
                <SliderCard
                  src={item.img1}
                  title={item.title}
                  location={item.location}
                  price={item.price}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
