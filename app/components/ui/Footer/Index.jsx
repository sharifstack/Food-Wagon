import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="pt-24 bg-212121">
      <footer>
        <div className="container">
          <div className="TopCities pb-24 border-b  border-424242">
            <div className="heading mb-10">
              <h5 className="font-source font-bold text-xl text-FFFFFF">
                Our top cities
              </h5>
            </div>

            <ul className="flex items-center justify-between">
              <ul className="flex flex-col gap-4 font-source font-normal text-lg text-FFFFFF cursor-pointer">
                <li>San Francisco</li>
                <li>Miami</li>
                <li>San Diego</li>
                <li>East Bay</li>
                <li>Long Beach</li>
              </ul>

              <ul className="flex flex-col gap-4 font-source font-normal text-lg text-FFFFFF cursor-pointer">
                <li>Los Angeles</li>
                <li>Washington DC</li>
                <li>Seattle</li>
                <li>Portland</li>
                <li>Nashville</li>
              </ul>

              <ul className="flex flex-col gap-4 font-source font-normal text-lg text-FFFFFF cursor-pointer">
                <li>New York City</li>
                <li>Orange County</li>
                <li>Atlanta</li>
                <li>Charlotte</li>
                <li>Denver</li>
              </ul>

              <ul className="flex flex-col gap-4 font-source font-normal text-lg text-FFFFFF cursor-pointer">
                <li>Chicago</li>
                <li>Phoenix</li>
                <li>Las Vegas</li>
                <li>Sacramento</li>
                <li>Oklahoma City</li>
              </ul>

              <ul className="flex flex-col gap-4 font-source font-normal text-lg text-FFFFFF cursor-pointer">
                <li>Columbus</li>
                <li>New Mexico</li>
                <li>Albuquerque</li>
                <li>Sacramento</li>
                <li>New Orleans</li>
              </ul>
            </ul>
          </div>

          <div className="Contacts pt-16 pb-24 border-b  border-424242">
            <div className="flex justify-between">
              <div className="left w-2/5">
                <ul className="flex items-center justify-between">
                  <div className="Company">
                    <div className="heading mb-10">
                      <h5 className="font-source font-bold text-xl text-FFFFFF">
                        Company
                      </h5>
                    </div>
                    <ul className="flex flex-col gap-4 font-source font-normal text-lg text-FFFFFF cursor-pointer">
                      <li>About us</li>
                      <li>Team</li>
                      <li>Careers</li>
                      <li>Blog</li>
                    </ul>
                  </div>

                  <div className="Contact">
                    <div className="heading mb-10">
                      <h5 className="font-source font-bold text-xl text-FFFFFF">
                        Contact
                      </h5>
                    </div>
                    <ul className="flex flex-col gap-4 font-source font-normal text-lg text-FFFFFF cursor-pointer">
                      <li>Help & Support</li>
                      <li>Partner with us </li>
                      <li>Ride with us</li>
                    </ul>
                  </div>

                  <div className="Legal">
                    <div className="heading mb-10">
                      <h5 className="font-source font-bold text-xl text-FFFFFF">
                        Legal
                      </h5>
                    </div>
                    <ul className="flex flex-col gap-4 font-source font-normal text-lg text-FFFFFF cursor-pointer">
                      <li>Terms & Conditions</li>
                      <li>Refund & Cancellation</li>
                      <li>Privacy Policy</li>
                      <li>Cookie Policy</li>
                    </ul>
                  </div>
                </ul>
              </div>
              <div className="right">
                <h4 className="font-source font-bold text-lg text-[#F5F5F5]">
                  Follow Us
                </h4>
                <div className="icons flex items-center gap-4  my-10">
                  <span>
                    <IoLogoInstagram className="text-3xl text-[#F5F5F5]" />
                  </span>
                  <span>
                    <FaFacebook className="text-2xl text-[#F5F5F5]" />
                  </span>
                  <span>
                    <FaTwitter className="text-2xl text-[#F5F5F5]" />
                  </span>
                </div>
                <p className="font-sans font-bold text-lg text-[#BBBBBB] mb-10">
                  Receive exclusive offers in your mailbox
                </p>
                <div className="emailBox flex items-center gap-4">
                  <div className="relative">
                    <span className=" absolute left-4 top-1/2 -translate-y-1/2">
                      <HiMail className=" text-2xl text-[#ADADAD]" />
                    </span>
                    <input
                      className=" border w-[334px] py-5 pl-12 pr-6 placeholder:text-lg placeholder:font-sans placeholder:text-[#ADADAD] text-FFFFFF"
                      type="text"
                      placeholder="Enter Your email"
                    />
                  </div>
                  <div className="Button">
                    <button className="text-FFFFFF px-6 py-5 rounded-lg bg-linear-to-r from-[#FFB800] to-[#FF8A00] font-source font-bold text-lg cursor-pointer hover:scale-105 transition-all duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pb-22 flex justify-center">
            <div className="flex items-center gap-2.5">
              <h4 className="font-sans font-normal text-base text-[#F5F5F5]">
                All rights Reserved
              </h4>
              <h4 className="font-sans font-bold text-base text-[#F5F5F5]">
                &copy; Sharif Ahmed, 2025
              </h4>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
