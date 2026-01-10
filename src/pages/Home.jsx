import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleInfo,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API}/api/admin/adminProduct`, {
          withCredentials: true,
        });
        setProducts(res.data.products || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <Header variant="home" key={user?.email || "guest"} />

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-6">
          {products.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center">
              No products available
            </p>
          ) : (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <div className="h-44 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.images[0] || "/images/default-product.jpg"}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {product.title}
                  </h3>
                  <p className="text-purple-700 font-bold text-lg mt-1">
                    ${product.price}
                  </p>

                  <div className="mt-4 space-y-2">
                    <button
                      onClick={() => navigate(`/product-detail/${product._id}`)}
                      className="w-full flex items-center justify-center gap-2 border border-purple-600 text-purple-700 py-2 rounded-xl hover:bg-purple-50 transition"
                    >
                      <FontAwesomeIcon icon={faCircleInfo} />
                      Details
                    </button>

                    <button className="w-full flex items-center justify-center gap-2 bg-green-700 text-white py-2 rounded-xl hover:bg-green-800 transition">
                      <FontAwesomeIcon icon={faCartShopping} />
                      Add to Cart
                    </button>

                    <button className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition">
                      <FontAwesomeIcon icon={faBolt} />
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
