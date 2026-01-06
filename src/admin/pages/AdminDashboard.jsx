import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faPlus, faEdit, faList } from "@fortawesome/free-solid-svg-icons";
const AdminDashboard = () => {
  const Navigate = useNavigate();
  const data = {
    TotalProduct: 21,
    Physical: 3,
    Digital: 4,
    Orders: 5,
    Revenue: 67,
  };

  const orderList = [
    {
      OrderID: 1023,
      Customer: "Sara",
      ProductName: "Wall art print",
      Price: 45,
    },
    { OrderID: 1024, Customer: "Ali", ProductName: "Digital Poster", Price: 5 },
  ];

  // Convert data object to array for mapping
  const metrics = Object.entries(data); // [ ["TotalProduct",21], ["Physical",3], ...]

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Header */}
        <AdminHeader />
        {/* Metrics / KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
          {metrics.map(([key, value]) => (
            <div
              key={key}
              className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center justify-center"
            >
              <h2 className="text-gray-500 text-sm">{key}</h2>
              <p className="text-2xl font-bold text-purple-700">{value}</p>
            </div>
          ))}
        </div>
        {/* Recent Orders */}
        <div className="p-4 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-3">Recent Orders</h2>
          <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-md">
            <thead className="bg-purple-700 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Order ID</th>
                <th className="py-2 px-4 text-left">Customer</th>
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orderList.map((order) => (
                <tr key={order.OrderID} className="border-b last:border-none">
                  <td className="py-3.5 px-4">{order.OrderID}</td>
                  <td className="py-3.5 px-4">{order.Customer}</td>
                  <td className="py-3.5 px-4">{order.ProductName}</td>
                  <td className="py-3.5 px-4">${order.Price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-wrap gap-6 mb-4 mt-20">
            {/* Add Product */}
            <button
              className="bg-green-700 text-white py-3 px-5 rounded-lg font-semibold hover:bg-green-800 transition"
              onClick={() => Navigate("/admin/AddProducts")}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Product
            </button>

            {/* Manage Categories */}
            <button className="bg-blue-700 text-white py-3 px-5 rounded-lg font-semibold hover:bg-blue-800 transition">
              <FontAwesomeIcon icon={faList} className="mr-2" />
              Manage Categories
            </button>

            {/* Edit Product */}
            <button className="bg-purple-700 text-white py-3 px-5 rounded-lg font-semibold hover:bg-purple-800 transition">
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
              Edit Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
