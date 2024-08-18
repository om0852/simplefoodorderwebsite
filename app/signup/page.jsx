"use client";
import axios from "axios";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [gotp, setGotp] = useState(Infinity);
  const [uotp, setUotp] = useState("");
  const handleSubmit = (event) => {
    if (uotp == gotp) {
      axios
      .post("/api/signup", { email, password, role })
      .then((res) => alert(res.data.message));
    } else {
      event.preventDefault();
      alert("invalid otp");
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
        <label htmlFor="email">Number:</label>
        <input
          type="number"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {gotp != Infinity && (
          <>
            <label>Otp:</label>
            <input
              type="number"
              value={uotp}
              onChange={(e) => setUotp(e.target.value)}
              required
            />
          </>
        )}
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="customer">Customer</option>
        </select>
        <button
          type="button"
          onClick={() => {
            axios.post("/api/sendotp", { to: email }).then((res) => {
              if (res.data.otp) {
                setGotp(res.data.otp);
              }
            });
          }}
        >
          Send otp
        </button>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Page;
