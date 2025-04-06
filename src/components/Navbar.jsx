import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";

function Navbar({ setShowlogin }) {
  return (
    <div className="h-20 w-full bg-amber-400 p-4">
      <div className="flex justify-between ml-4 mr-4 text-2xl">
        <div>
          <p>LOGO</p>
        </div>
        <div>
          <ul className="flex gap-8">
            <li>HOME</li>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-8 items-center">
            <li className="">
              <IoSearchOutline />
            </li>
            <li>
              <BsBag />
            </li>
            <li onClick={() => setShowlogin(true)} className="cursor-pointer">
              login
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
