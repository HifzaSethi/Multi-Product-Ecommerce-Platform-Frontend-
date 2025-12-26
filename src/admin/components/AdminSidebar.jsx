import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCartShopping,
  faTags,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();
  const menuItems = [
    { name: "AdminProducts", icon: faBoxOpen },
    { name: "AdminOrder", icon: faCartShopping },
    { name: "AdminCategories", icon: faTags },
    { name: "AdminSettings", icon: faGear },
    { name: "AdminLogout", icon: faRightFromBracket },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col bg-purple-700 text-white w-64 space-y-6 px-4 py-6 h-screen">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Panel</h1>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => navigate(`${item.name}`)}
              className={`flex items-center gap-3 p-3 rounded-lg hover:bg-purple-800 transition-colors cursor-pointer ${
                active === item.name ? "bg-purple-900" : ""
              }`}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.name}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-purple-700 text-white flex justify-around items-center py-3 shadow-inner">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex flex-col items-center justify-center cursor-pointer transition-colors ${
              active === item.name ? "text-yellow-400" : "text-white"
            }`}
          >
            <FontAwesomeIcon icon={item.icon} size="lg" />
            <span className="text-xs mt-1">{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminSidebar;
