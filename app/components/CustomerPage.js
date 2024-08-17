import React from 'react';
import PlacedOrders from './PlacedOrders';
import axios from 'axios';

const CustomerPage = ({ cart, menu, orders, setOrders, setCart }) => {
  const handlePlaceOrder = (formElements) => {
    const newOrder = {
      name: formElements.name.value,
      address: formElements.address.value,
      mobile: formElements.mobile.value,
      items: cart,
    };
    axios.post("/api/order",{data:[...orders, newOrder]})
    setOrders([...orders, newOrder]);
    setCart([]);
  };

  return (
    <div className="customer-page">
      <h2>Order Food</h2>
      {/* <Menu onAddToCart={handleAddToCart} /> */}
      {/* <Cart cart={cart} /> */}
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
