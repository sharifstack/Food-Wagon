import React from "react";
import logo from "../../../public/assets/logo/logo.png";
import Image from "next/image";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import ScrollReveal from "../Animation/ScrollReveal";

const Header = () => {
  return (
    <ScrollReveal>
      <div>
        <div className="container">
          <div className="flex justify-between items-center py-4 ">
            <div className="Logo flex items-center gap-3">
              <div className="logoimg">
                <Image src={logo} width={0} height={0} alt="image" />
              </div>
              <div className="Logoname flex items-center">
                <h2 className="font-source text-3xl text-warning font-bold ">
                  food
                </h2>
                <h2 className="font-source text-3xl text-primary font-bold ">
                  waGon
                </h2>
              </div>
            </div>
            <div className="Location flex items-center gap-3">
              <h2 className="font-source font-bold text-[18px]">Deliver to:</h2>
              <div className="flex gap-1 items-center">
                <div className="flex items-center gap-2.5">
                  <span>
                    <FaLocationDot className="text-primary text-xl" />
                  </span>
                  <h2 className="font-sans text-[18px] text-424242">
                    Current Locations
                  </h2>
                </div>
                <h2 className="font-sans text-[18px] text-424242 font-bold">
                  Mohammadpur Bus Stand, Dhaka
                </h2>
              </div>
            </div>
            <div className="Login flex gap-8">
              <div className="searchBar flex items-center gap-2">
                <span>
                  <FaSearch className="text-xl text-primary" />
                </span>
                <h4 className="font-source font-bold text-[18px] text-424242">
                  Search Food
                </h4>
              </div>
              <button className="login flex items-center gap-2.5 px-6 py-3.5 shadow-primary/50 shadow-2xl rounded-lg cursor-pointer">
                <span className=" ">
                  <FaUser className="text-xl text-primary " />
                </span>
                <h4 className="font-source font-bold text-[18px] gradient-text">
                  Login
                </h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Header;
