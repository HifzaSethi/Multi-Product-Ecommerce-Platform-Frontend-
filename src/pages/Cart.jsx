import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API}/api/cart`, {
          withCredentials: true,
        });
        setCart(res.data.cart);
      } catch (err) {
        console.error("Failed to fetch favorites", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const removeCart = async (id) => {
    try {
      await axios.post(
        `${API}/api/cart/remove/${id}`,
        {},
        { withCredentials: true }
      );
      setCart(cart.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-20">Loading Cart...</p>;
  if (cart.length === 0)
    return <p className="text-center mt-20">No Cart yet!</p>;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <Header variant="home" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-6">
          {cart.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-md p-4"
            >
              <img
                src={product.images[0] || "/images/default-product.jpg"}
                alt={product.title}
                className="h-44 w-full object-cover rounded-lg"
              />
              <h3 className="mt-2 text-gray-800 font-semibold">
                {product.title}
              </h3>
              <p className="text-purple-700 font-bold">${product.price}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => navigate(`/product-detail/${product._id}`)}
                  className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
                >
                  Details
                </button>
                <button
                  onClick={() => removeCart(product._id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Cart;
