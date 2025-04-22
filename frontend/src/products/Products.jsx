import React, { useState } from "react";
import ProductDisplay from "./ProductDisplay";
import ProductNavBar from "./ProductNavBar";

const Products = () => {
  const [productCategory, setProductCategory] = useState("all");
  return (
    <div className="w-full h-fit">
      <ProductNavBar
        productCategory={productCategory}
        setProductCategory={setProductCategory}
      />
      <div className="flex justify-center mb-10 mt-10">
        <ProductDisplay productCategory={productCategory} />
      </div>
    </div>
  );
};

export default Products;
