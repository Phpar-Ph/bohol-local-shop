import React from "react";
import { NavLink } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="h-20 w-full bg-crimsonPink">
      <div className="flex justify-between items-center  h-full container mx-auto">
        <div className="flex-1">
          <h2 className="text-textPrimary text-xl font-bold">LOGO</h2>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <ul className="flex text-textPrimary space-x-8 text-xl font-bold">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink path="/shop">SHOP</NavLink>
            </li>
            <li>
              <NavLink path="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink path="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex  justify-end items-center space-x-4 flex-1 ">
          <div className="relative flex items-center">
            <CiSearch className="text-2xl absolute right-0 m-2" />
            <input
              type="text"
              className="bg-gray-200 p-1 rounded-xl pl-2"
              placeholder="search..."
            />
          </div>
          <div className="p-1 relative">
            <div className="absolute top-0 right-0 h-2 w-2 bg-Cta rounded-full m-1"></div>
            <IoBagHandle className="text-3xl text-textPrimary" />

            {/* <FaShoppingCart className="text-3xl text-textPrimary" /> */}
          </div>
          <div className="">
            <MdAccountCircle className="text-3xl text-textPrimary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
