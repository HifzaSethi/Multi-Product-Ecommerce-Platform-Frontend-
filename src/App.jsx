// main.jsx or App.jsx
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import AdminDashboard from "./admin/pages/adminDashboard";
import AdminProduct from "./admin/pages/AdminProduct";
import Admincategories from "./admin/pages/AdminCategories";
import AdminOrder from "./admin/pages/AdminOrder";
const App = () => {
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
      </Routes>
    </>
  );
};
export default App;
