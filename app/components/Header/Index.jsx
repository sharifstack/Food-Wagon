"use client";

import React, { useEffect, useState } from "react";
import logo from "../../../public/assets/logo/logo.png";
import Image from "next/image";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import ScrollReveal from "../Animation/ScrollReveal";
import Link from "next/link";

const Header = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  // check logged in user
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <div>
      <div className="container">
        {/* Mobile Location */}
        <div className="Location sm:hidden flex items-center gap-1 py-2 truncate">
          <h2 className="font-source font-bold text-sm">Deliver to:</h2>
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-primary" />
            <h2 className="font-sans text-sm font-bold">
              Mohammadpur Bus Stand, Dhaka
            </h2>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center py-2 sm:py-4">
          {/* Logo */}
          <div className="Logo flex items-center gap-2">
            <Image src={logo} width={28} height={28} alt="logo" />
            <div className="flex">
              <h2 className="font-source text-2xl sm:text-3xl text-warning font-bold">
                food
              </h2>
              <h2 className="font-source text-2xl sm:text-3xl text-primary font-bold">
                waGon
              </h2>
            </div>
          </div>

          {/* Desktop Location */}
          <div className="Location sm:flex hidden items-center gap-3">
            <h2 className="font-source font-bold text-[18px]">Deliver to:</h2>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-primary text-xl" />
              <h2 className="font-sans text-[18px] font-bold">
                Mohammadpur Bus Stand, Dhaka
              </h2>
            </div>
          </div>

          {/* Right Side */}
          <div className="Login flex gap-6 items-center">
            {/* Search */}
            <div className="searchBar sm:flex hidden items-center gap-2">
              <FaSearch className="text-xl text-primary" />
              <h4 className="font-source font-bold text-[18px]">Search Food</h4>
            </div>

            {/* Login / Profile */}
            {!user ? (
              <Link href="/login">
                <button className="flex items-center gap-2.5 px-6 py-2 sm:py-3.5 shadow-primary/50 shadow-2xl rounded-lg hover:shadow-black/40 transition-all">
                  <FaUser className="text-xl text-primary" />
                  <h4 className="font-source font-bold text-[18px] gradient-text">
                    Login
                  </h4>
                </button>
              </Link>
            ) : (
              <div className="relative ">
                {/* Profile Button */}
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg"
                >
                  <FaUser className="text-primary" />
                  <span className="font-source font-bold text-sm">
                    {user.userEmail}
                  </span>
                </button>

                {/* Dropdown */}
                {open && (
                  <div className="absolute right-0 mt-2 w-full bg-white rounded-lg shadow-xl z-50!">
                    <Link
                      href="/userprofile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpen(false)}
                    >
                      Edit Profile
                    </Link>
                    <Link
                      href="/usersettings"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
