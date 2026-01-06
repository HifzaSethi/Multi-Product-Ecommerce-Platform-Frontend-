import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useContext } from "react"; // Added useContext here
import { AuthContext } from "../Context/AuthContext";

const Header = ({ variant = "landing" }) => {
  // 1. Hooks must be at the top level
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // 2. This useEffect handles the "Back Button" refresh issue we discussed
  // ADD THIS FORCE-SYNC EFFECT
  // const [, setTick] = useState(0); // This is just to force a re-render
  // useEffect(() => {
  //   const onPageShow = (event) => {
  //     // 1. event.persisted detects if the page was pulled from browser memory
  //     // 2. navigation.type === 2 is a backup for older browsers
  //     if (
  //       event.persisted ||
  //       (window.performance && window.performance.navigation.type === 2)
  //     ) {
  //       window.location.reload();
  //     }
  //   };

  //   window.addEventListener("pageshow", onPageShow);
  //   return () => window.removeEventListener("pageshow", onPageShow);
  // }, []);
  // Header.jsx

  // ... inside the component
  useEffect(() => {
    console.log("Header detected user change:", user);
    const onPageShow = (event) => {
      if (
        event.persisted ||
        (window.performance && window.performance.navigation.type === 2)
      ) {
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", onPageShow);

    
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [user]); // <--- Add 'user' here to listen for the login/signup success
  // 3. Handle the loading state
  if (loading) {
    return (
      <nav className="bg-white shadow-md px-4 py-3 text-center">
        Checking login...
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left Section */}
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
            placeholder="Search for designs"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 outline-none"
          />
        </div>

        {/* Right (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Add a console log here to see if Header sees the user */}
          {console.log("Header rendering with user:", user)}

          {user && user.email ? (
            <>
              <p className="text-black text-xl px-4 py-2">{user.email}</p>
              <button
                onClick={() => navigate("/Logout")}
                className="text-red-600 font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/SignIn")}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/SignUp")}
                className="border border-purple-600 text-purple-700 px-4 py-2 rounded-lg"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
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
          {user ? (
            <>
              <p className="text-black font-medium px-1">{user.email}</p>
              <button
                onClick={() => navigate("/Logout")}
                className="text-red-600 font-semibold text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/SignIn")}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-left"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/SignUp")}
                className="border border-purple-600 text-purple-700 px-4 py-2 rounded-lg text-left"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
