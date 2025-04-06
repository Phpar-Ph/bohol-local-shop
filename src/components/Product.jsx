import React from "react";
import product1 from "../assets/product/peanutkisses.jpg";
import { CiStar } from "react-icons/ci";
import Contruct from "./Contruct";

function Product() {
  return (
    <div>
      <div className="flex justify-center">
        <ul className="flex gap-8 text-2xl m-4">
          <li>All Products</li>
          <li>Categories</li>
          <li>New Arrival</li>
          <li>Best Seller</li>
        </ul>
      </div>
      {/* PRODUCTS */}
      <div className="flex justify-center">
        <div className="grid grid-cols-6 gap-8">
          <div className="w-70 h-90 bg-amber-300">
            <img src={product1} alt="peanut kisses" className="h-3/4" />
            <div className="p-2 text-sm">
              <h2>
                <strong>Peanut Kisses</strong> - the Philippines own...
              </h2>
              <p className="text-xl">₱79.99</p>
              <div className="flex text-md">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contruct />
    </div>
  );
}

export default Product;
