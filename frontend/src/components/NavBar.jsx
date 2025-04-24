import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router";
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 400); // 400ms delay before closing
  };
  return (
    <div className="h-20 w-full bg-crimsonPink shadow-md">
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center flex-1">
          <h2 className="text-textPrimary text-2xl font-bold tracking-wide cursor-pointer">
            <NavLink to="/">ShopLocalBohol</NavLink>
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-10 text-textPrimary text-lg font-semibold">
            <li>
              <NavLink to="/" className="hover:underline underline-offset-4">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className="hover:underline underline-offset-4"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:underline underline-offset-4"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:underline underline-offset-4"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Section: Search, Cart, Account */}
        <div className="flex items-center justify-end space-x-6 flex-1">
          {/* Search */}
          <div className="relative hidden lg:flex items-center w-64">
            <CiSearch className="absolute right-3 text-2xl text-gray-400" />
            <input
              type="text"
              className="w-full p-2 pl-4 pr-10 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition"
              placeholder="Search..."
            />
          </div>

          {/* Cart Icon */}
          <NavLink to="/cart">
            <div className="relative">
              <IoBagHandle className="text-3xl text-white hover:text-gray-100 transition" />
              <div className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-Cta rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-Cta rounded-full"></div>
            </div>
          </NavLink>

          {/* Account Dropdown */}
          <div
            className="relative cursor-pointer group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <MdAccountCircle className="text-4xl text-white hover:text-gray-100 transition" />
            {isOpen && (
              <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-xl border border-gray-200 p-4 z-50 transition-all duration-300">
                <ul className="space-y-2">
                  <li
                    className="px-4 py-2 rounded-md hover:bg-crimsonPink hover:text-white transition"
                    onClick={() => navigate("/signin")}
                  >
                    Sign In
                  </li>
                  <li className="px-4 py-2 rounded-md hover:bg-crimsonPink hover:text-white transition">
                    Logout
                  </li>
                  <li className="px-4 py-2 rounded-md hover:bg-crimsonPink hover:text-white transition">
                    Profile
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
