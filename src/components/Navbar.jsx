import React from "react";

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
          <ul className="flex gap-8">
            <li>search</li>
            <li>cart</li>
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
