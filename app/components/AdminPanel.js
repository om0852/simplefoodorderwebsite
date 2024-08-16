import React, { useState } from 'react';
import Orders from './Orders';
import CompletedOrders from './CompletedOrders';

const AdminPanel = ({ orders, onAddItem, onCompleteOrder }) => {
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem(newItem);
    setNewItem({ name: '', price: '' });
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <h3>Add New Item</h3>
        <label htmlFor="item-name">Item Name:</label>
        <input type="text" id="item-name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} required />
        <label htmlFor="item-price">Price:</label>
        <input type="number" id="item-price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} required />
        <button type="submit">Add Item</button>
      </form>
      <Orders orders={orders} onCompleteOrder={onCompleteOrder} />
      <CompletedOrders />
    </div>
  );
};

export default AdminPanel;
