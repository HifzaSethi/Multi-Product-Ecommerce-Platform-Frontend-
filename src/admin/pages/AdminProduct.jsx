import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import AdminHeader from "../components/AdminHeader";

const AdminProduct = () => {
  const products = [
    {
      id: 1,
      name: "Digital Poster",
      type: "Digital",
      category: "Wall Art",
      price: 15,
      sales: 12,
      status: "Active",
      image: "/assets/image1.jpeg",
    },
    {
      id: 2,
      name: "Handmade Mug",
      type: "Physical",
      category: "Kitchen",
      price: 12,
      sales: 3,
      status: "Active",
      image: "/assets/image2.jpeg",
    },
    {
      id: 1,
      name: "Digital Poster",
      type: "Digital",
      category: "Wall Art",
      price: 15,
      sales: 12,
      status: "Active",
      image: "/assets/image1.jpeg",
    },
    {
      id: 1,
      name: "Digital Poster",
      type: "Digital",
      category: "Wall Art",
      price: 15,
      sales: 12,
      status: "Active",
      image: "/assets/image1.jpeg",
    },
    {
      id: 1,
      name: "Digital Poster",
      type: "Digital",
      category: "Wall Art",
      price: 15,
      sales: 12,
      status: "Active",
      image: "/assets/image1.jpeg",
    },
    {
      id: 3,
      name: "Custom Notebook",
      type: "Physical",
      category: "Stationery",
      price: 20,
      sales: 0,
      status: "Inactive",
      image: "/assets/imahe3.jpeg",
    },
    {
      id: 1,
      name: "Digital Poster",
      type: "Digital",
      category: "Wall Art",
      price: 15,
      sales: 12,
      status: "Active",
      image: "/assets/image1.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />

      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">Products</h1>
          <p className="text-sm text-gray-500">
            Manage your store products and availability
          </p>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-xl shadow-md overflow-x-auto ">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="bg-purple-700 text-white  top-0">
              <tr>
                <th className="px-4 py-4 text-left">Product</th>
                <th className="px-4 py-4">Type</th>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4">Price</th>
                <th className="px-4 py-4">Sales</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-300">
              {products.map((prod) => (
                <tr key={prod.id} className="hover:bg-gray-50 transition">
                  {/* Product */}
                  <td className="px-4 py-3 flex items-center gap-3">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-14 h-14 rounded-md object-cover border"
                    />
                    <span className="font-medium text-gray-800">
                      {prod.name}
                    </span>
                  </td>

                  {/* Type */}
                  <td className="px-4 py-3 text-center">
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">
                      {prod.type}
                    </span>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-3 text-center">
                    <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                      {prod.category}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="px-4 py-3 text-center font-medium">
                    ${prod.price}
                  </td>

                  {/* Sales */}
                  <td className="px-4 py-3 text-center">{prod.sales}</td>

                  {/* Status */}
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs text-white ${
                        prod.status === "Active"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    >
                      {prod.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3 text-right">
                    <button className="text-red-600 hover:text-red-800 transition flex items-center gap-1 ml-auto">
                      <FontAwesomeIcon icon={faTrash} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
