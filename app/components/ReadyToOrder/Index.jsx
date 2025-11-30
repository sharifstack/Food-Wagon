import Image from "next/image";
import React from "react";
import bg from "../../../public/assets/Readytoorder/bg.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ScrollReveal from "../Animation/ScrollReveal";

const ReadyToOrder = () => {
  return (
    <ScrollReveal>
      <div>
        <div className="relative">
          <Image src={bg} width={0} height={0} alt="bgimage" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="Text&Button flex flex-col items-center gap-10">
              <div className="heading w-[728px]">
                <h1 className="font-source font-black text-FFFFFF text-5xl text-center">
                  Are you ready to order with the best deals?
                </h1>
              </div>
              <div>
                <button className="flex items-center gap-2.5 py-5 px-6 rounded-lg bg-linear-to-r from-[#F17228] to-[#F15E28] shadow-2xl shadow-[#FFAE00]/50 cursor-pointer hover:scale-105 transition-all duration-200">
                  <h6 className="text-FFFFFF font-source font-bold text-lg">
                    PROCEED TO ORDER
                  </h6>
                  <span>
                    <MdOutlineKeyboardArrowRight className="text-3xl text-FFFFFF" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ReadyToOrder;
