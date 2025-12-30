import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// Create AuthContext
export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const API = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        // Adding a timestamp (?t=...) ensures the browser sees this as a BRAND NEW request
        // and cannot use a cached "logged in" response.
        const response = await axios.get(`${API}/api/auth/me?t=${Date.now()}`, {
          withCredentials: true,
        });
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
        // This is where you wanted the path check
        if (window.location.pathname === "/home") {
          console.log("Session expired/Logged out - clearing home state");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
    // FIX: Listen for the back button (pageshow)
    const handlePageShow = (event) => {
      // persisted is true if the page was loaded from the BFCache
      if (event.persisted) {
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []); // empty dependency array means this runs once on mount

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
