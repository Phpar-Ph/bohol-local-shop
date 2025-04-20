import React from "react";
import { NavLink } from "react-router";

function NavBarProduct() {
  return (
    <div className="h-20 w-full ">
      <div className="flex justify-center items-center text-black  h-full container mx-auto ">
        <ul className="flex  space-x-8 text-xl font-bold">
          <li>
            <NavLink to="/products">All Products</NavLink>
          </li>
          <li>
            <NavLink to="/products/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/products/newArrivals">New Arrivals</NavLink>
          </li>
          <li>
            <NavLink to="/products/bestSellers">Best Sellers</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarProduct;
