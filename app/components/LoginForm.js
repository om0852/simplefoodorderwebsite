import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(email,password)
    await axios.post("/api/login",{email,password,role}).then((res)=>{
      if(res.data.message){
        localStorage.setItem("food_role",role);
        alert(res.data.message)
        router.push("/")
      }
    })
  };

  return (
    <div className="login-form">
      <div className="login-images">
        <img src="https://www.pngkey.com/png/detail/251-2510994_savithri-catering-has-been-established-for-over-10.png" alt="Hotel Ambika" className="login-image" />
        <h1>Login Page</h1>
        <img src="https://restro.smarttechsoft.in/wp-content/uploads/2022/09/veg-thali-1.png" alt="Hotel Ambika" className="login-image" />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <label htmlFor="role">Role:</label>
        <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
