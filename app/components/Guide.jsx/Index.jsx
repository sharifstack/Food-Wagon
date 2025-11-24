import React from "react";
import Image from "next/image";
const Guide = () => {
  const guideInfo = [
    {
      id: 1,
      name: "Select location",
      p: "Choose the location where your food will be delivered.",
      img: "/assets/guide/map.png",
    },

    {
      id: 2,
      name: "Choose order",
      p: "Check over hundreds of menus to pick your favorite food",
      img: "/assets/guide/menu.png",
    },

    {
      id: 3,
      name: "Pay advanced",
      p: "It's quick, safe, and simple. Select several methods of payment",
      img: "/assets/guide/invoice.png",
    },
    {
      id: 4,
      name: "Enjoy meals",
      p: "Food is made and delivered directly to your home.",
      img: "/assets/guide/donut.png",
    },
  ];

  return (
    <div className="py-20 bg-linear-to-b from-[#FFCE67]/25  to-[#FDEDCA]/22 ">
      <div className="container">
        <div className="">
          <h2 className="font-source font-bold text-[43px] text-[#F17228] text-center">
            How does it work
          </h2>

          <div className="infomration mt-[72px]">
            <div className="flex items-end gap-8 ">
              {guideInfo?.map((item) => (
                <div className="flex flex-col items-center hover:scale-110  transition-all duration-200 cursor-pointer" key={item.id}>
                  <Image src={item.img} width={200} height={0} alt="img" />
                  <div className="texts text-center">
                    <h4 className="font-source font-bold text-[22px] text-[#434343]">
                      {item.name}
                    </h4>
                    <p className="font-sans font-normal text-lg text-[#9e9e9e]">
                      {item.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
