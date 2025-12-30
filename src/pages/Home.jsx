import React from "react";
import { useContext } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

import {
  faCartShopping,
  faCircleInfo,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  // Dummy products array
  const products = [
    { id: 1, name: "Digital Poster", price: 15, image: "/images/product1.jpg" },
    { id: 2, name: "Handmade Mug", price: 12, image: "/images/product2.jpg" },
    {
      id: 3,
      name: "Custom Notebook",
      price: 20,
      image: "/images/product3.jpg",
    },
    { id: 4, name: "Wall Art Print", price: 25, image: "/images/product4.jpg" },
    { id: 5, name: "Greeting Card", price: 8, image: "/images/product5.jpg" },
    { id: 6, name: "Sticker Pack", price: 5, image: "/images/product6.jpg" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <Header variant="home" key={user?.email || "guest"} />
        {/* Hero Section */}
        <div className="bg-purple-100 p-8 rounded-lg m-6">
          <h1 className="text-3xl font-bold text-purple-800 mb-2">
            Welcome to My Shop
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            Unique handmade and digital designs for everyone.
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Shop Now
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-6">
          {products.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="h-44 bg-gray-200 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-purple-700 font-bold text-lg mt-1">
                  ${product.price}
                </p>

                {/* Action Buttons */}
                <div className="mt-4 space-y-2">
                  {/* Details */}
                  <button
                    onClick={() => navigate("/product-detail")}
                    className="w-full flex items-center justify-center gap-2 border border-purple-600 text-purple-700 py-2 rounded-xl hover:bg-purple-50 transition"
                  >
                    <FontAwesomeIcon icon={faCircleInfo} />
                    Details
                  </button>

                  {/* Add to Cart */}
                  <button className="w-full flex items-center justify-center gap-2 bg-green-700 text-white py-2 rounded-xl hover:bg-green-800 transition">
                    <FontAwesomeIcon icon={faCartShopping} />
                    Add to Cart
                  </button>

                  {/* Buy Now */}
                  <button className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition">
                    <FontAwesomeIcon icon={faBolt} />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
