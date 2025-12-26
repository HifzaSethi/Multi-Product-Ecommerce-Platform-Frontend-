import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = ({ variant = "landing" }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          {variant !== "home" && (
            <h2 className="text-2xl font-bold text-purple-800">Logo</h2>
          )}

          {variant === "landing" && (
            <button
              onClick={() => navigate("/home")}
              className="hidden md:block text-yellow-600 hover:text-yellow-800 font-semibold italic text-xl"
            >
              Explore
            </button>
          )}
        </div>

        {/* Desktop Search */}
        <div className="hidden lg:block relative w-96">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700"
          />
          <input
            type="text"
            placeholder="Search for digital or physical designs"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Right (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {variant === "landing" ? (
            <>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Sign In
              </button>
              <button className="border border-purple-600 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-100">
                Sign Up
              </button>
            </>
          ) : (
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white">
              Email
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile Search */}
      <div className="mt-3 lg:hidden relative">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700"
        />
        <input
          type="text"
          placeholder="Search designs"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-3 md:hidden">
          {variant === "landing" && (
            <button
              onClick={() => navigate("/home")}
              className="text-yellow-600 font-semibold text-left"
            >
              Explore
            </button>
          )}

          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            Sign In
          </button>
          <button className="border border-purple-600 text-purple-700 px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
