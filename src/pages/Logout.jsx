import axios from "axios";
import { useState, useContext } from "react";
const API = import.meta.env.VITE_API_URL;
import { AuthContext } from "../Context/AuthContext";

const Logout = () => {
  const { setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await axios.post(`${API}/api/auth/logout`, {}, { withCredentials: true });
      setUser(null);
      window.location.href = "/SignIn";
    } catch (err) {
      console.log("Logout fail", err);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Logout
        </h2>

        {/* {error && <p className="text-red-600 text-center mb-4">{error}</p>} */}

        <form className="space-y-4">
          <p className="block text-sm font-medium text-red-600 mb-1">
            Are you sure ,you want to logout!
          </p>
          <button
            onClick={handleLogout}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};
export default Logout;
