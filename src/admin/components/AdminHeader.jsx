import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const AdminHeader = () => {
  return (
    <header className="flex justify-between items-center bg-white shadow-md px-6 py-4 sticky top-0 z-20">
      {/* Left - Page title */}
      <h2 className="text-2xl font-bold text-purple-800">Logo</h2>

      {/* Right - Notifications + Profile */}
      <div className="flex items-center gap-4">
        <button className="relative text-gray-600 hover:text-gray-800 transition">
          <FontAwesomeIcon icon={faBell} size="lg" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs  leading-none text-red-100 bg-red-600 rounded-full">
            1
          </span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
          <FontAwesomeIcon
            icon={faUserCircle}
            size="2x"
            className="text-gray-700"
          />
          <span className="hidden md:inline text-gray-800 font-semibold">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
