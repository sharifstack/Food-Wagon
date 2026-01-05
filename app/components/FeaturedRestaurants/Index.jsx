import React from "react";
import FeaturedRestaurantsCard from "../ui/FeaturedRestaurantsCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ScrollReveal from "../Animation/ScrollReveal";

const FeaturedRestaurants = () => {
  const resturentInfo = [
    {
      id: 1,
      img: "/assets/Featured/feat1.png",
      discount: "20% off",
      resturentImg: "/assets/Featured/Resturents/img1.png",
      title: "Foodworld",
      rating: "46",
    },
    {
      id: 2,
      img: "/assets/Featured/feat2.png",
      discount: "15% off",
      resturentImg: "/assets/Featured/Resturents/img2.png",
      title: "Pizzahub",
      rating: "40",
    },

    {
      id: 3,
      img: "/assets/Featured/feat3.png",
      discount: "10% off",
      resturentImg: "/assets/Featured/Resturents/img3.png",
      title: "Donuts hut",
      rating: "20",
      isOpen: true,
    },

    {
      id: 4,
      img: "/assets/Featured/feat4.png",
      discount: "15% off",
      resturentImg: "/assets/Featured/Resturents/img4.png",
      title: "Donuts hut",
      rating: "50",
      isOpen: true,
    },

    {
      id: 5,
      img: "/assets/Featured/feat5.png",
      discount: "10% off",
      resturentImg: "/assets/Featured/Resturents/img5.png",
      title: "Ruby Tuesday",
      rating: "26",
      isOpen: true,
    },

    {
      id: 6,
      img: "/assets/Featured/feat6.png",
      discount: "25% off",
      resturentImg: "/assets/Featured/Resturents/img6.png",
      title: "Kuakata Fried Chicken",
      rating: "53",
      isOpen: true,
    },

    {
      id: 7,
      img: "/assets/Featured/feat7.png",
      discount: "10% off",
      resturentImg: "/assets/Featured/Resturents/img7.png",
      title: "Red Square",
      rating: "45",
      isOpen: true,
    },

    {
      id: 8,
      img: "/assets/Featured/feat8.png",
      discount: "10% off",
      resturentImg: "/assets/Featured/Resturents/img8.png",
      title: "Taco Bell",
      rating: "35",
      isOpen: true,
    },
  ];
  return (
    <div className="sm:my-20 my-10">
      <div className="container">
        <div className="heading text-center mb-10 sm:mb-[88px]">
          <h1 className="sm:text-4xl text-3xl text-212121 font-source font-bold">
            Featured Restaurants
          </h1>
        </div>
        <div className="flex flex-wrap sm:justify-between gap-y-16">
          {resturentInfo.map((item) => (
            <div key={item.id}>
              <FeaturedRestaurantsCard
                src={item.img}
                Discount={item.discount}
                resuturentimg={item.resturentImg}
                title={item.title}
                rating={item.rating}
                isOpen={item.isOpen}
              />
            </div>
          ))}
        </div>
        <div className="Button mt-11 sm:mt-22 flex justify-center ">
          <button className="flex items-center gap-2.5 sm:py-5 py-2.5 px-6 sm:px-12 rounded-2xl bg-linear-to-r from-[#FFBA26] to-[#FF9A0E] shadow-2xl shadow-[#FFAE00]/50 cursor-pointer hover:scale-105 transition-all duration-200">
            <h6 className="text-FFFFFF font-source font-bold text-xl">
              View All
            </h6>
            <span>
              <MdOutlineKeyboardArrowRight className="text-3xl text-FFFFFF" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
