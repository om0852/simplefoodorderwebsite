import React from 'react';

const PlacedOrders = ({ orders, onClear }) => (
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
    {orders.length > 0 && (
      <button onClick={onClear}>Clear Orders</button>
    )}
  </div>
);

export default PlacedOrders;
