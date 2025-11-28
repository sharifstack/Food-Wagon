import React from "react";
import icon1 from "../../../public/assets/Appinfo/icon1.png";
import icon2 from "../../../public/assets/Appinfo/icon2.png";
import icon3 from "../../../public/assets/Appinfo/icon3.png";
import Image from "next/image";
import { PiLineVerticalThin } from "react-icons/pi";

const AppInfo = () => {
  return (
    <div className="bg-[#FEEFD0] pt-[130px]">
      <div className="container">
        <div className="card flex justify-center pb-20">
          <div className="p-[55px] max-w-[1230px] rounded-[48px] bg-FFFFFF">
            <div className="flex items-center gap-14">
              <div className="icon1 flex items-center gap-14">
                <div className="flex items-center gap-[30px]">
                  <div className="image">
                    <Image src={icon1} height={136} width={136} alt="image" />
                  </div>
                  <p className="font-source font-bold text-4xl bg-linear-to-r from-[#FB3C00] to-[#FFB800] text-transparent bg-clip-text max-w-[151px]">
                    Daily Discounts
                  </p>
                </div>
                <span className="bg-[#CFCFCF] w-1 h-24 "></span>
              </div>

              <div className="icon2 flex items-center gap-14">
                <div className="flex items-center gap-[30px]">
                  <div className="image">
                    <Image src={icon2} height={136} width={136} alt="image" />
                  </div>
                  <p className="font-source font-bold text-4xl bg-linear-to-r from-[#FB3C00] to-[#FFB800] text-transparent bg-clip-text max-w-[151px]">
                    Live Tracing
                  </p>
                </div>
                <span className="bg-[#CFCFCF] w-1 h-24 "></span>
              </div>

              <div className="icon3 flex items-center gap-14">
                <div className="flex items-center gap-[30px]">
                  <div className="image">
                    <Image src={icon3} height={136} width={136} alt="image" />
                  </div>
                  <p className="font-source font-bold text-4xl bg-linear-to-r from-[#FB3C00] to-[#FFB800] text-transparent bg-clip-text max-w-[151px]">
                    Quick Delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
