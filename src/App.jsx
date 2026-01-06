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
import AdminRoute from "../src/Routes/AdminRoute";
import AddProducts from "../src/admin/pages/AddProduct";
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
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/AdminProducts"
          element={
            <AdminRoute>
              <AdminProduct></AdminProduct>
            </AdminRoute>
          }
        />
        <Route
          path="/admin/AdminOrder"
          element={
            <AdminRoute>
              <AdminOrder />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/AdminCategories"
          element={
            <AdminRoute>
              <Admincategories />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/AddProducts"
          element={
            <AdminRoute>
              <AddProducts />
            </AdminRoute>
          }
        />
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
