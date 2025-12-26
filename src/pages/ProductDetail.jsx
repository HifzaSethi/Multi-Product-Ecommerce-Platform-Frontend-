import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBolt,
  faStar,
  faBox,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto bg-gray-50">
        <Header variant="home" />

        {/* Product Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-lg p-6 sm:p-8">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src="./assets/image1.jpeg"
                alt="Product"
                className="w-full h-72 sm:h-96 md:h-[450px] object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between">
              {/* Info */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Digital Poster – Minimal Wall Art
                </h1>

                <p className="text-xl sm:text-2xl font-bold text-purple-700 mt-3">
                  $15.00
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">
                    (120 reviews)
                  </span>
                </div>

                {/* Meta */}
                <div className="mt-6 space-y-2 text-gray-700 text-sm sm:text-base">
                  <p>
                    <FontAwesomeIcon
                      icon={faBox}
                      className="mr-2 text-purple-600"
                    />
                    Size: A3 / A4 / Digital Download
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faTag}
                      className="mr-2 text-purple-600"
                    />
                    Category: Wall Art
                  </p>
                  <p className="text-gray-500 text-sm">Sales: 1,200+</p>
                </div>

                {/* Description */}
                <p className="mt-6 text-gray-700 leading-relaxed text-sm sm:text-base">
                  This modern digital poster is perfect for home and office
                  décor. Delivered as a high-quality digital download, ready to
                  print and frame.
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-8 space-y-3">
                <button className="w-full flex items-center justify-center gap-3 bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition text-base sm:text-lg">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Add to Cart
                </button>

                <button className="w-full flex items-center justify-center gap-3 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition text-base sm:text-lg">
                  <FontAwesomeIcon icon={faBolt} />
                  Buy Now
                </button>

                <button className="w-full border border-purple-600 text-purple-700 py-3 rounded-xl hover:bg-purple-50 transition">
                  View Related Products
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
