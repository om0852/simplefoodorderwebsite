"use client"
import React, { useState, useEffect } from 'react';
import './globals.css'; // Optional: If you have custom styles

const Home = () => {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const savedMenu = JSON.parse(localStorage.getItem('menuu')) || [
      { name: 'Shahi Paneer', price: 220 },
      { name: 'Paneer Malai Kofta', price: 220 },
    ];
    setMenu(savedMenu);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentPage(userData.role === 'admin' ? 'admin' : 'customer');
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handlePlaceOrder = (orderDetails) => {
    const newOrder = { ...orderDetails, items: cart };
    setOrders([...orders, newOrder]);
    setCart([]);
  };

  const handleAddItem = (newItem) => {
    const updatedMenu = [...menu, newItem];
    setMenu(updatedMenu);
    localStorage.setItem('menuu', JSON.stringify(updatedMenu));
  };

  const handleCompleteOrder = (orderId) => {
    const updatedOrders = orders.filter((_, index) => index !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div className="App">
      <header>
        <h1>Hotel Ambika</h1>
        <nav>
          {user ? (
            <a href="#" onClick={() => setCurrentPage(user.role === 'admin' ? 'admin' : 'customer')}>
              {user.role === 'admin' ? 'Admin Panel' : 'Customer Page'}
            </a>
          ) : (
            <a href="#" onClick={() => setCurrentPage('login')}>Login</a>
          )}
        </nav>
      </header>

      {currentPage === 'welcome' && (
        <div className="welcome-container">
          <img src="https://i.ibb.co/HxKWcgb/Whats-App-Image-2024-08-13-at-10-58-47-PM-1.jpg" alt="Hotel Ambika" className="welcome-image" />
          <h1>WELCOME TO HOTEL AMBIKA</h1>
          <h3>Andarsul, Tal:-Yeola, Dist:-Nashik (423402)</h3>
          <button onClick={() => setCurrentPage('login')}>Get Started</button>
        </div>
      )}

      {currentPage === 'login' && (
        <div className="login-form">
          <div className="login-images">
            <img src="https://www.pngkey.com/png/detail/251-2510994_savithri-catering-has-been-established-for-over-10.png" alt="Hotel Ambika" className="login-image" />
            <h1>Login Page</h1>
            <img src="https://restro.smarttechsoft.in/wp-content/uploads/2022/09/veg-thali-1.png" alt="Hotel Ambika" className="login-image" />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleLogin({ email: e.target.email.value, password: e.target.password.value, role: e.target.role.value }); }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
            <label htmlFor="role">Role:</label>
            <select id="role">
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit">Login</button>
          </form>
        </div>
      )}

      {currentPage === 'customer' && (
        <div className="customer-page">
          <h2>Order Food</h2>
          <div id="menu">
            <h3>Menu</h3>
            {menu.map((item, index) => (
              <div key={index}>
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
          <div id="cart">
            <h3>Cart</h3>
            {cart.length === 0 ? (
              <p>No items in the cart.</p>
            ) : (
              cart.map((item, index) => (
                <div key={index}>
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price}</p>
                </div>
              ))
            )}
          </div>
          {cart.length > 0 && (
            <form onSubmit={(e) => { e.preventDefault(); handlePlaceOrder({ name: e.target.name.value, address: e.target.address.value, mobile: e.target.mobile.value }); }}>
              <h3>Place Order</h3>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" required />
              <label htmlFor="mobile">Mobile:</label>
              <input type="text" id="mobile" required />
              <button type="submit">Place Order</button>
            </form>
          )}
          <div id="placed-orders">
            <h3>Placed Orders</h3>
            {orders.length === 0 ? (
              <p>No placed orders.</p>
            ) : (
              orders.map((order, index) => (
                <div key={index} className="order-item">
                  <h4>Order #{index + 1}</h4>
                  <p>Name: {order.name}</p>
                  <p>Address: {order.address}</p>
                  <p>Mobile: {order.mobile}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {currentPage === 'admin' && (
        <div className="admin-panel">
          <h2>Admin Panel</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleAddItem({ name: e.target['item-name'].value, price: e.target['item-price'].value }); }}>
            <h3>Add New Item</h3>
            <label htmlFor="item-name">Item Name:</label>
            <input type="text" id="item-name" required />
            <label htmlFor="item-price">Price:</label>
            <input type="number" id="item-price" required />
            <button type="submit">Add Item</button>
          </form>
          <div id="orders">
            <h3>Orders</h3>
            {orders.length === 0 ? (
              <p>No orders.</p>
            ) : (
              orders.map((order, index) => (
                <div key={index}>
                  <h4>Order #{index + 1}</h4>
                  <p>Name: {order.name}</p>
                  <p>Address: {order.address}</p>
                  <p>Mobile: {order.mobile}</p>
                  <button onClick={() => handleCompleteOrder(index)}>Complete Order</button>
                </div>
              ))
            )}
          </div>
          <div id="completed-orders">
            <h3>Completed Orders</h3>
            <p>No completed orders.</p>
          </div>
        </div>
      )}

      <footer>
        <p>&copy; 2024 Food Order Website</p>
      </footer>
    </div>
  );
};

export default Home;
