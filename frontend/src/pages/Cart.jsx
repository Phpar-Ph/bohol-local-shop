import React from "react";

const Cart = () => {
  // Dummy cart items — you can replace this with real props or context
  const cartItems = [
    {
      id: 1,
      name: "Handmade Coconut Oil",
      price: 12.99,
      quantity: 2,
      image: "/images/coconut-oil.jpg",
    },
    {
      id: 2,
      name: "Organic Bohol Honey",
      price: 9.5,
      quantity: 1,
      image: "/images/honey.jpg",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-xl">
            Your cart is empty 🛒
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white p-4 rounded-xl shadow-sm border"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <button className="px-2 py-1 bg-gray-200 rounded">
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button className="px-2 py-1 bg-gray-200 rounded">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right font-semibold text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white p-6 rounded-xl shadow-md border h-fit">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Summary
              </h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 text-sm text-gray-500">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-4 mb-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
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
