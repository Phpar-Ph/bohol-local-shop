import React from "react";
import bgImage from "../assets/bg-shop-local.jpg";
function Header() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "50vh",
        }}
        className="flex justify-center items-center"
      >
        <h1 className="text-textPrimary font-bold text-8xl drop-shadow-xl">
          Shop Local, Experience Bohol
        </h1>
      </div>
    </div>
  );
}

export default Header;
