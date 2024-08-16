import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Cart from './Cart';
import PlacedOrders from './PlacedOrders';

const CustomerPage = () => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handlePlaceOrder = (orderDetails) => {
    const newOrder = { ...orderDetails, items: cart };
    setOrders([...orders, newOrder]);
    setCart([]);
  };

  return (
    <div className="customer-page">
      <h2>Order Food</h2>
      <Menu onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
      {cart.length > 0 && (
        <form onSubmit={(e) => { e.preventDefault(); handlePlaceOrder(e.target.elements); }}>
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
      <PlacedOrders orders={orders} onClear={() => setOrders([])} />
    </div>
  );
};

export default CustomerPage;
