import React from "react";

const Header = () => (
  <header>
    <h1>Hotel Ambika</h1>
    <nav>
      {!localStorage.getItem("food_role") && (
        <a href="login" id="login-link">
          Login
        </a>
      )}
      {!localStorage.getItem("food_role") && (
        <a href="signup" id="login-link">
          Signup
        </a>
      )}
      {localStorage.getItem("food_role") == "admin" && (
        <a href="admin" id="admin-link">
          Admin Panel
        </a>
      )}
      {localStorage.getItem("food_role")  && (
        <button
          onClick={() => {
            localStorage.removeItem("food_role");
          }}
        >
          Logout
        </button>
      )}
    </nav>
  </header>
);

export default Header;
