import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import Profile from "./Profile";

import { NavLink } from "react-router";

function Navbar({ setShowlogin }) {
  return (
    <div className="h-20 w-full bg-background flex justify-center items-center shadow-md">
      <div className=" text-2xl text-primary font-secondary font-bold flex justify-between items-center w-4/5 h-full">
        <div>
          <p>LOGO</p>
        </div>
        <div>
          <ul className="flex gap-10 items-center">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </ul>
        </div>
        <div>
          <ul className="flex gap-10 items-center">
            <li className="">
              <IoSearchOutline className="text-3xl font-bold" />
            </li>
            <li>
              <BsBag className="text-3xl font-bold" />
            </li>
            {/* onClick={() => setShowlogin(true)} */}
            <li className="cursor-pointer " onClick={() => setShowlogin(true)}>
              Login
              {/* <Profile /> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
