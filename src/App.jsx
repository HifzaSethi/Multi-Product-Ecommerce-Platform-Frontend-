// main.jsx or App.jsx
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import AdminDashboard from "./admin/pages/adminDashboard";
import AdminProduct from "./admin/pages/AdminProduct";
import Admincategories from "./admin/pages/AdminCategories";
import AdminOrder from "./admin/pages/AdminOrder";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SigIn";
import Logout from "./pages/Logout";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
const App = () => {
  const { user, loading } = useContext(AuthContext);

  // 1. IMPORTANT: Wait for the identity check to finish
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p> {/* Or a Spinner */}
      </div>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/AdminProducts" element={<AdminProduct />} />
        <Route path="/admin/AdminOrder" element={<AdminOrder />} />
        <Route path="/admin/AdminCategories" element={<Admincategories />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route
          path="/Logout"
          element={user ? <Logout /> : <Navigate to="/SignIn" replace />}
        />
      </Routes>
    </>
  );
};
export default App;
