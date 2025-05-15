import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { ProductList } from "../products/ProductList";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, isCartEmpty } =
    useContext(StoreContext);

  // Safely update total when cartItems changes
  // useEffect(() => {}, [cartItems]);

  const total = ProductList.reduce((acc, item) => {
    const quantity = cartItems[item.id] || 0;
    return acc + item.price * quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

        {isCartEmpty ? (
          <div className="text-center text-gray-500 text-xl">
            Your cart is empty 🛒
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {ProductList.map((item) =>
                cartItems[item.id] > 0 ? (
                  <div
                    key={item.id}
                    className="bg-white p-6 rounded-xl shadow-md border flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.productName}
                        </h3>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="bg-crimsonPink text-white p-2 rounded-full shadow-md">
                      <div className="flex items-center justify-center gap-2 ">
                        <FaMinus
                          onClick={() => removeFromCart(item.id)}
                          className="text-xl cursor-pointer hover:scale-110 transition-transform"
                        />
                        <div className=" pl-2 pr-2 ">
                          <p className="font-semibold text-xl">
                            {cartItems[item.id]}
                          </p>
                        </div>
                        <FaPlus
                          onClick={() => addToCart(item.id)}
                          className="text-xl cursor-pointer hover:scale-110 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>

            {/* Summary */}
            <div className="bg-white p-6 rounded-xl shadow-md border h-fit">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Summary
              </h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 text-sm text-gray-500">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-4 mb-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-crimsonPink hover:bg-pink-600 transition text-white font-semibold py-3 rounded-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
