import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { StoreContext } from "../context/StoreContext";

function ProductItem({ id, name, description, price, image, category }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="relative rounded-2xl w-96 h-[32rem] border border-gray-200 shadow-xl overflow-hidden transition-transform hover:scale-[1.02] bg-white">
      {/* Image */}
      <div className="h-3/4 relative">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover rounded-t-2xl"
        />

        {/* Add to Cart Button / Quantity Controls */}
        <div className="absolute top-3 right-3 bg-crimsonPink text-white p-2 rounded-full shadow-md">
          {!cartItems[id] ? (
            <FaPlus
              className="text-xl cursor-pointer hover:scale-110 transition-transform"
              onClick={() => addToCart(id)}
            />
          ) : (
            <div className="flex items-center gap-2 text-white">
              <FaMinus
                onClick={() => removeFromCart(id)}
                className="text-xl cursor-pointer hover:scale-110 transition-transform"
              />
              <p className="font-semibold text-xl">{cartItems[id]}</p>
              <FaPlus
                onClick={() => addToCart(id)}
                className="text-xl cursor-pointer hover:scale-110 transition-transform"
              />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="h-1/4 px-5 py-4 flex flex-col justify-between">
        {/* Title + Price */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
          <span className="text-lg font-bold text-crimsonPink">${price}</span>
        </div>

        {/* Category */}
        <p className="text-sm text-gray-600 mt-4">
          <span className="font-medium">Category:</span> {category}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
