import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const AdminCategories = () => {
  // Dummy category data (frontend only)
  const categories = [
    {
      id: 1,
      name: "Wall Art",
      type: "Digital",
      productsCount: 12,
      status: "Active",
      createdAt: "2025-04-10",
    },
    {
      id: 2,
      name: "Stickers",
      type: "Physical",
      productsCount: 8,
      status: "Active",
      createdAt: "2025-04-08",
    },
    {
      id: 3,
      name: "Greeting Cards",
      type: "Physical",
      productsCount: 5,
      status: "Hidden",
      createdAt: "2025-04-05",
    },
  ];

  return (
    <div className="p-4 sm:p-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Categories</h1>

        {/* Add Category Button */}
        <button className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg">
          <FontAwesomeIcon icon={faPlus} />
          Add Category
        </button>
      </div>

      {/* Categories Table Wrapper (for responsiveness) */}
      <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-md">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Category Name</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Products</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Created</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id} className="border-b last:border-none">
                {/* Category Name */}
                <td className="px-4 py-3.5 font-medium text-gray-800">
                  {category.name}
                </td>

                {/* Type */}
                <td className="px-4 py-3.5">{category.type}</td>

                {/* Products Count */}
                <td className="px-4 py-3.5">{category.productsCount}</td>

                {/* Status Badge */}
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        category.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    {category.status}
                  </span>
                </td>

                {/* Created Date */}
                <td className="px-4 py-3.5 text-gray-600">
                  {category.createdAt}
                </td>

                {/* Actions */}
                <td className="px-4 py-3.5">
                  <div className="flex justify-center gap-3">
                    {/* Edit Button */}
                    <button className="text-blue-600 hover:text-blue-800">
                      <FontAwesomeIcon icon={faPen} />
                    </button>

                    {/* Delete Button */}
                    <button className="text-red-600 hover:text-red-800">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCategories;
