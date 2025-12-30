import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
const API = import.meta.env.VITE_API_URL;
const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // 1. Always clear previous errors before a new attempt
    // 1. Password Strength Check (New)
    const specialCharRegex = /[!@#$%^&*]/;
    if (password.length < 6 || !specialCharRegex.test(password)) {
      return setError(
        "Password must be at least 6 characters and include a special character (!@#$%^&*)"
      );
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match"); // 2. Use 'return' to stop the function here
    }
    // SignUp.jsx - Inside your try block
    try {
      const res = await axios.post(
        `${API}/api/auth/signup`,
        { name, email, password },
        { withCredentials: true }
      );

      console.log("Setting user to:", res.data.user);
      setUser(res.data.user);

      // INSTEAD OF navigate("/home"), use this:
      window.location.href = "/home";
    } catch (err) {
      // 3. This correctly catches "Email already exist" from your backend
      setError(err.response?.data || "Something went wrong");
    }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Create Account
        </h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>

            <input
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/SignIn")}
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
