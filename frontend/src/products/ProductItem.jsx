import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { StoreContext } from "../context/StoreContext";

function ProductItem({ id, name, description, price, image, category }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="rounded-2xl w-96 h-[32rem] drop-shadow-2xl border-2">
      <div className=" h-3/4">
        <img src={image} alt={name} className="h-full w-full rounded-2xl" />
        <div className="absolute top-2 right-2 p-4 bg-Cta rounded-full ">
          {!cartItems[id] ? (
            <FaPlus
              className="text-2xl cursor-pointer "
              onClick={() => addToCart(id)}
            />
          ) : (
            <div className="flex items-center justify-center gap-4">
              <FaMinus
                onClick={() => removeFromCart(id)}
                className="text-2xl cursor-pointer "
              />
              <p className="text-2xl">{cartItems[id]}</p>
              <FaPlus
                onClick={() => addToCart(id)}
                className="text-2xl cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
      <div className=" flex flex-col justify-between  h-1/4  p-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm p-2">{description}</p>
          </div>
          <p className="font-bold text-lg">${price}</p>
        </div>
        <div className="flex flex-col">
          <p>Category: {category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
