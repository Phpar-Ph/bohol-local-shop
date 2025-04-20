import React from "react";
import bgImage from "/public/bg-shop-local1.jpg";
import NavBarProduct from "../products/NavBarProduct";
import Products from "../products/Products";
import UnderConstruction from "../components/UnderConstruction";

function Home() {
  return (
    <div className="w-full h-screen">
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
      <NavBarProduct />
      <Products />
      <UnderConstruction />
    </div>
  );
}

export default Home;
