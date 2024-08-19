import React, { useEffect, useState } from "react";

const Header = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Access localStorage only on the client side
      setRole(localStorage.getItem("food_role"));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("food_role");
    setRole(null);
  };

  return (
    <header>
      <h1>Hotel Ambika</h1>
      <nav>
        {!role && (
          <>
            <a href="login" id="login-link">
              Login
            </a>
            <a href="signup" id="signup-link">
              Signup
            </a>
          </>
        )}
        {role === "admin" && (
          <a href="admin" id="admin-link">
            Admin Panel
          </a>
        )}
        {role && (
          <button onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
