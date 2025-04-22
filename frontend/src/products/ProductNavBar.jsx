import React from "react";
const ProductNavBar = ({ productCategory, setProductCategory }) => {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setProductCategory(selectedCategory || "all");
  };
  console.log(productCategory);
  return (
    <div>
      <div className=" flex  justify-center mt-10">
        <ul className="flex space-x-8 font-bold text-amber-950 text-2xl">
          <li onClick={() => setProductCategory("all")}>All Products</li>
          <select
            value={productCategory}
            onChange={handleCategoryChange}
            className="text-center"
          >
            <option value="">Category</option>
            <option value="food">Food</option>
            <option value="beverages">Beverages</option>
            <option value="fashion">Fashion</option>
            <option value="home decor">Home Decor</option>
            <option value="handicrafts">Handicrafts</option>
            <option value="personal care">Personal Care</option>
          </select>

          <li>New Products</li>
          <li>Best Seller</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductNavBar;
