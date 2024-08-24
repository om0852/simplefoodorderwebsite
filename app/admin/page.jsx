"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [orders, setOrders] = useState([]);
  const [confirm, setConfirm] = useState([]);
  const [menuu, setMenuu] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localCaller();
    }
  }, []);

  function localCaller() {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
    const confirmOrder = JSON.parse(localStorage.getItem("confirm")) || [];
    setConfirm(confirmOrder);
    // console.log(savedOrders);
  }

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const handleConfirm = (index) => {
    const confirmorder = orders[index];
    console.log(confirmorder);
    saveToLocalStorage("confirm", [...confirm, confirmorder]);
    const newOrder = orders.filter((d, ind) => ind != index);
    saveToLocalStorage("orders", newOrder);
    console.log(newOrder);
    localCaller();
    // saveToLocalStorage("orders",);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const name = document.getElementById("item-name").value;
    const price = document.getElementById("item-price").value;
    axios.post("/api/product", { title: name, price });
    alert("menu added");
  };

  return (
    <div className="container">
      <h1 className="my-2 text-xl"> Admin Panel</h1>
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
            <button onClick={() => handleConfirm(index)}>Confirm </button>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}

      <h1 className="mt-4">Confirm Order</h1>
      {confirm.length > 0 ? (
        confirm.map((order, index) => (
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
        <p>No Confirm Order found.</p>
      )}
    </div>
  );
};

export default Page;
