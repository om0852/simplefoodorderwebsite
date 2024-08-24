"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [orders, setOrders] = useState([]);
  const [menuu, setMenuu] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localCaller();
    }
  }, []);

  function localCaller() {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
    console.log(savedOrders);
  }

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const updateMenu = () => {};

  const handleAddItem = (e) => {
    e.preventDefault();
    const name = document.getElementById("item-name").value;
    const price = document.getElementById("item-price").value;
    axios.post("/api/product", { title: name, price });
  };

  return (
    <div>
      <form onSubmit={handleAddItem}>
        <label htmlFor="item-name">Item Name:</label>
        <input type="text" id="item-name" required />
        <label htmlFor="item-price">Price:</label>
        <input type="number" id="item-price" required />
        <button type="submit">Add Item</button>
      </form>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index}>
            <h3>Order {index + 1}</h3>
            <p>
              <strong>Name:</strong> {order.name}
            </p>
            <p>
              <strong>Address:</strong> {order.address}
            </p>
            <p>
              <strong>Mobile:</strong> {order.mobile}
            </p>
            <h4>Items:</h4>
            <ul>
              {order.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  ₹{item.name} - {item.price}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Page;
