import React from "react";
import { ProductList } from "../products/ProductList";
import ProductItem from "./ProductItem";
function ProductDisplay({ productCategory }) {
  const filteredProducts =
    productCategory === "all"
      ? ProductList
      : ProductList.filter((product) => product.category === productCategory);
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {filteredProducts.map((product, index) => (
        <ProductItem
          key={index}
          id={product.id}
          name={product.productName}
          description={product.description}
          price={product.price}
          image={product.image}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default ProductDisplay;
