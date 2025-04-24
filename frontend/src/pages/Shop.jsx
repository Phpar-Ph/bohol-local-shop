import React from "react";

const sellers = [
  {
    id: 1,
    name: "Luna's Crafts",
    description: "Handmade jewelry and home décor from Bohol.",
    image: "https://source.unsplash.com/400x300/?handicraft",
  },
  {
    id: 2,
    name: "Island Bites",
    description: "Local snacks and delicacies made with love.",
    image: "https://source.unsplash.com/400x300/?snacks",
  },
  {
    id: 3,
    name: "Bohol Apparel",
    description: "Trendy local fashion from Bohol’s artisans.",
    image: "https://source.unsplash.com/400x300/?clothing",
  },
  // Add more sellers as needed
];

function Shop() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-crimsonPink">Local Sellers</h1>
        <p className="text-gray-600 mt-2">
          Discover amazing products from Bohol’s talented sellers.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {sellers.map((seller) => (
          <div
            key={seller.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={seller.image}
              alt={seller.name}
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {seller.name}
              </h2>
              <p className="text-gray-600 mt-2">{seller.description}</p>
              <button className="mt-4 px-4 py-2 bg-crimsonPink text-white rounded-lg hover:bg-pink-600 transition">
                Visit Shop
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
