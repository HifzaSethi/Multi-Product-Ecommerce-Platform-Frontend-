import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBolt } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const { id } = useParams();
  const API = import.meta.env.VITE_API_URL;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API}/api/admin/adminProduct/${id}`, {
          withCredentials: true,
        });
        setProduct(res.data.product);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading product...</p>;
  if (!product)
    return <p className="text-center mt-20 text-red-500">Product not found</p>;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-auto bg-gray-50">
        <Header variant="home" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-lg p-6 sm:p-8">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={product.images[0] || "/images/default-product.jpg"}
                alt={product.title}
                className="w-full h-72 sm:h-96 md:h-[450px] object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {product.title}
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-purple-700 mt-3">
                  ${product.price}
                </p>
                <p className="mt-4 text-gray-700">
                  Category: {product.categories || "General"}
                </p>
                <p className="mt-2 text-gray-700">
                  Tags: {product.tags || "None"}
                </p>
                <p className="mt-6 text-gray-700 leading-relaxed text-sm sm:text-base">
                  {product.description}
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <button className="w-full flex items-center justify-center gap-3 bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition text-base sm:text-lg">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Add to Cart
                </button>

                <button className="w-full flex items-center justify-center gap-3 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition text-base sm:text-lg">
                  <FontAwesomeIcon icon={faBolt} />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
