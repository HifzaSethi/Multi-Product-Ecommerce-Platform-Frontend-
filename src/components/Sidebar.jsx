import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import {
  faHouseUser,
  faList,
  faPaperPlane,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [categoryOpen, setCategoryOpen] = useState(false); // click toggle
  const [hoverOpen, setHoverOpen] = useState(false); // hover (desktop)
  const categoryRef = useRef(null);
  const mobileCategoryRef = useRef(null);

  // Click outside to close (desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoryOpen(false);
      }
      if (
        mobileCategoryRef.current &&
        !mobileCategoryRef.current.contains(event.target)
      ) {
        setCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dropdown visible if hover OR click
  const isDropdownVisible = categoryOpen || hoverOpen;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col h-screen w-24 p-6 bg-gray-100 border-r border-gray-200 shadow-sm items-center justify-between">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-purple-800">Logo</h2>

        {/* Icons */}
        <div className="flex flex-col gap-8 text-2xl text-gray-700">
          <FontAwesomeIcon
            icon={faHouseUser}
            className="hover:text-purple-700 cursor-pointer"
          />

          {/* Category icon with hover + click dropdown */}
          <div
            ref={categoryRef}
            className="relative"
            onMouseEnter={() => setHoverOpen(true)}
            onMouseLeave={() => setHoverOpen(false)}
          >
            <FontAwesomeIcon
              icon={faList}
              className="hover:text-purple-700 cursor-pointer"
              onClick={() => setCategoryOpen(!categoryOpen)}
            />

            {isDropdownVisible && (
              <div className="absolute left-10 top-0 bg-white border shadow-md rounded-md w-32 p-1 flex flex-col gap-1 text-sm z-50">
                <button className="text-gray-700 hover:text-purple-700 text-left px-2 py-1 rounded hover:bg-gray-100">
                  Digital
                </button>
                <button className="text-gray-700 hover:text-purple-700 text-left px-2 py-1 rounded hover:bg-gray-100">
                  Physical
                </button>
              </div>
            )}
          </div>

          <FontAwesomeIcon
            icon={faBell}
            className="hover:text-purple-700 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="hover:text-purple-700 cursor-pointer"
          />
        </div>

        {/* Settings */}
        <FontAwesomeIcon
          icon={faGear}
          className="text-2xl text-gray-700 hover:text-purple-700 cursor-pointer"
        />
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 shadow-md flex items-center justify-around py-3 text-xl text-gray-700">
        <span className="text-purple-800 font-bold text-lg">Logo</span>

        <FontAwesomeIcon icon={faHouseUser} />

        {/* Mobile Category Icon */}
        <div ref={mobileCategoryRef} className="relative">
          <FontAwesomeIcon
            icon={faList}
            className="cursor-pointer"
            onClick={() => setCategoryOpen(!categoryOpen)}
          />
          {categoryOpen && (
            <div className="absolute bottom-12 left-0 bg-white border shadow-md rounded-md w-32 p-1 flex flex-col gap-1 text-sm z-50">
              <button className="text-gray-700 hover:text-purple-700 text-left px-2 py-1 rounded hover:bg-gray-100">
                Digital
              </button>
              <button className="text-gray-700 hover:text-purple-700 text-left px-2 py-1 rounded hover:bg-gray-100">
                Physical
              </button>
            </div>
          )}
        </div>

        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faPaperPlane} />
        <FontAwesomeIcon icon={faGear} />
      </nav>
    </>
  );
};

export default Sidebar;
