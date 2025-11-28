import React from "react";
import FeaturedRestaurantsCard from "../ui/FeaturedRestaurantsCard";

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
    <div className="my-20">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-16">
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
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
