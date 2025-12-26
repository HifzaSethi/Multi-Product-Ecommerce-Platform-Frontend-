import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faSpinner,
  faClock,
  faTruck,
  faRotateLeft,
  faCircleCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const AdminOrder = () => {
  const Orders = {
    TotalOrders: "23",
    PendingOrders: "4",
    CompletedOrders: "19",
    Revenue: "$56",
  };

  const tabs = [
    { name: "All", icon: faList },
    { name: "Pending", icon: faClock },
    { name: "Processing", icon: faSpinner },
    { name: "Shipped", icon: faTruck },
    { name: "Completed", icon: faCircleCheck },
    { name: "Cancelled", icon: faXmark },
    { name: "Refunded", icon: faRotateLeft },
  ];

  const ordercards = Object.entries(Orders);
  const orderInformation = [
    {
      orderId: "ORD-1023",
      customerName: "Sara Khan",
      products: ["Wall Art Print"],
      orderType: "Physical",
      totalPrice: 45,
      paymentStatus: "Paid",
      orderStatus: "Pending",
      orderDate: "2025-04-12",
    },
    {
      orderId: "ORD-1024",
      customerName: "Ali Ahmed",
      products: ["Digital Poster"],
      orderType: "Digital",
      totalPrice: 5,
      paymentStatus: "Paid",
      orderStatus: "Completed",
      orderDate: "2025-04-11",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-12 flex flex-col gap-5">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
        <p className="text-gray-500 mt-1">
          Manage your orders and shipping details
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
        {ordercards.map(([orders, value]) => (
          <div
            key={orders}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
          >
            <h2 className="text-gray-500 text-lg mb-2">{orders}</h2>
            <p className="text-3xl font-bold text-purple-700">{value}</p>
          </div>
        ))}
      </div>

      {/* Tabs / Filters */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">
          Filter Through
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                         bg-purple-600 text-white font-medium
                         hover:bg-purple-700 transition
                         active:scale-95"
            >
              <FontAwesomeIcon icon={tab.icon} />
              <span className="text-sm">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* table of order  */}
      <div className="p-4 overflow-x-auto mt-2">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">
          Orders Information
        </h2>
        <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-md">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Customer Name</th>
              <th className="py-2 px-4 text-left">Products</th>
              <th className="py-2 px-4 text-left">Order Type</th>
              <th className="py-2 px-4 text-left">Total Price</th>
              <th className="py-2 px-4 text-left">Payment Status</th>
              <th className="py-2 px-4 text-left">Order Status</th>
              <th className="py-2 px-4 text-left">Order Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orderInformation.map((Info) => (
              <tr key={Info.orderId} className="border-b last:border-none">
                <td className="py-3.5 px-4">{Info.orderId}</td>
                <td className="py-3.5 px-4">{Info.customerName}</td>
                <td className="py-3.5 px-4">{Info.products}</td>
                <td className="py-3.5 px-4">{Info.orderType}</td>
                <td className="py-3.5 px-4">{Info.totalPrice}</td>
                <td className="py-3.5 px-4">{Info.paymentStatus}</td>
                <td className="py-3.5 px-4">{Info.orderStatus}</td>
                <td className="py-3.5 px-4">{Info.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrder;
