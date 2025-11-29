import React from "react";
import icon1 from "../../../public/assets/Appinfo/icon1.png";
import icon2 from "../../../public/assets/Appinfo/icon2.png";
import icon3 from "../../../public/assets/Appinfo/icon3.png";
import phone from "../../../public/assets/Appinfo/phone.png";
import googleplay from "../../../public/assets/Appinfo/googleplay.png";
import appstore from "../../../public/assets/Appinfo/appstore.png";
import bg from "../../../public/assets/Appinfo/bg.jpg";
import Image from "next/image";
import { PiLineVerticalThin } from "react-icons/pi";

const AppInfo = () => {
  return (
    <div className="pt-[130px] mb-20 z-10  ">
      <div className="bg relative ">
        <Image className="-z-20 " src={bg} width={7216} />

        <div className="container z-50 absolute left-1/2 top-full  -translate-x-1/2  -translate-y-full">
          <div className="card flex justify-center pb-40">
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

          <div className="AppInfo flex justify-center">
            <div className="w-[1230px] flex gap-44">
              <div className="left w-1/2">
                <div className="image">
                  <Image src={phone} width={0} height={0} alt="image" />
                </div>
              </div>
              <div className="right w-1/2 pt-14">
                <div className="heading">
                  <h1 className="font-source font-bold text-[64px] bg-linear-to-r from-[#FFB800] to-[#FF8A00] text-transparent bg-clip-text ">
                    Install the app
                  </h1>
                </div>
                <p className="font-sans font-normal text-lg max-w-[429px] text-[#827E7E] mb-10">
                  It's never been easier to order food. Look for the finest
                  discounts and you'll be lost in a world of delectable food.
                </p>
                <div className="stores flex items-center gap-2">
                  <Image
                    className="hover:scale-105 hover:shadow-2xl transition-all duration-200 cursor-pointer"
                    src={googleplay}
                    width={200}
                    height={0}
                    alt="image"
                  />
                  <Image
                    className="hover:scale-105 hover:shadow-2xl transition-all duration-200 cursor-pointer"
                    src={appstore}
                    width={185}
                    height={0}
                    alt="image"
                  />
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
