import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/Details/img1.png";
import img2 from "../../../public/assets/Details/img2.png";
import img3 from "../../../public/assets/Details/img3.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ScrollReveal from "../Animation/ScrollReveal";

const Details = () => {
  return (
    <div className="mb-36 pt-14">
      <div className="container">
        <div className="FoodDetails flex flex-col gap-20">
          <ScrollReveal>
            <div className="Item1 flex items-center shadow-2xl rounded-2xl">
              <div className="left p-14">
                <div className="heading w-[407px]">
                  <h1 className="font-source font-bold text-4xl text-[#353535]">
                    Best deals
                    <b className="font-source font-bold text-4xl ml-2 text-primary">
                      Crispy Sandwiches
                    </b>
                  </h1>
                </div>
                <p className="pt-5 pb-28 font-sans font-semibold text-lg text-[#616161]/70 w-[407px]">
                  Enjoy the large size of sandwiches. Complete perfect slice of
                  sandwiches.
                </p>
                <div className="Button">
                  <button className="flex items-center justify-center w-[407px] h-[60] bg-linear-to-r from-[#FFB800] to-[#FF8A00] cursor-pointer rounded-lg hover:scale-105 transition-all duration-200">
                    <h6 className="text-FFFFFF font-source font-bold text-lg ">
                      PROCEED TO ORDER
                    </h6>
                    <span>
                      <MdOutlineKeyboardArrowRight className="text-3xl text-FFFFFF" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="right w-2/3">
                <div className="image">
                  <Image
                    className="rounded-r-2xl"
                    src={img1}
                    width={983}
                    alt="item1image"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="Item2 flex flex-row-reverse items-center shadow-2xl rounded-2xl">
              <div className="left p-14">
                <div className="heading w-[407px]">
                  <h1 className="font-source font-bold text-4xl text-[#353535]">
                    Celebrate parties with
                    <b className="font-source font-bold text-4xl ml-2 text-primary">
                      Fried Chicken
                    </b>
                  </h1>
                </div>
                <p className="pt-5 pb-28 font-sans font-semibold text-lg text-[#616161]/70 w-[407px]">
                  Get the best fried chicken smeared with a lip smacking lemon
                  chili flavor. Check out best deals for fried chicken.
                </p>
                <div className="Button">
                  <button className="flex items-center justify-center w-[407px] h-[60] bg-linear-to-r from-[#FFB800] to-[#FF8A00] cursor-pointer rounded-lg hover:scale-105 transition-all duration-200">
                    <h6 className="text-FFFFFF font-source font-bold text-lg ">
                      PROCEED TO ORDER
                    </h6>
                    <span>
                      <MdOutlineKeyboardArrowRight className="text-3xl text-FFFFFF" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="right w-2/3">
                <div className="image">
                  <Image
                    className="rounded-l-2xl"
                    src={img2}
                    width={983}
                    alt="item2image"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="Item3 flex items-center shadow-2xl rounded-2xl">
              <div className="left p-14">
                <div className="heading w-[407px]">
                  <h1 className="font-source font-bold text-4xl text-[#353535]">
                    Wanna eat hot & spicy
                    <b className="font-source font-bold text-4xl ml-2 text-primary">
                      Pizza?
                    </b>
                  </h1>
                </div>
                <p className="pt-5 pb-28 font-sans font-semibold text-lg text-[#616161]/70 w-[407px]">
                  Pair up with a friend and enjoy the hot and crispy pizza pops.
                  Try it with the best deals.
                </p>
                <div className="Button">
                  <button className="flex items-center justify-center w-[407px] h-[60] bg-linear-to-r from-[#FFB800] to-[#FF8A00] cursor-pointer rounded-lg hover:scale-105 transition-all duration-200">
                    <h6 className="text-FFFFFF font-source font-bold text-lg ">
                      PROCEED TO ORDER
                    </h6>
                    <span>
                      <MdOutlineKeyboardArrowRight className="text-3xl text-FFFFFF" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="right w-2/3 ">
                <div className="image">
                  <Image
                    className="rounded-r-2xl"
                    src={img3}
                    width={983}
                    alt="item3image"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Details;
