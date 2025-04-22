import React from "react";
import Header from "../components/Header";
import Products from "../products/Products";
import UnderConstruction from "../components/UnderConstruction";

function Home() {
  return (
    <div className="w-full h-fit">
      <Header />
      <UnderConstruction />
      <Products />
    </div>
  );
}

export default Home;
