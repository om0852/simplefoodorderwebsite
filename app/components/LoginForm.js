import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/login", { email, password, role });
      if (res.data.message !== "Login Failed") {
        localStorage.setItem("food_role", role);
        alert(res.data.message);
        if (res.data.data.type == "admin") {
          router.push("/admin");
        }
        router.push("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert("An error occurred during login. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <div className="login-images">
        <img
          src="https://www.pngkey.com/png/detail/251-2510994_savithri-catering-has-been-established-for-over-10.png"
          alt="Hotel Ambika"
          className="login-image"
        />
        <h1>Login Page</h1>
        <img
          src="https://restro.smarttechsoft.in/wp-content/uploads/2022/09/veg-thali-1.png"
          alt="Hotel Ambika"
          className="login-image"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          disabled={loading}
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
