"use client";
import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import PlacedOrders from "../components/PlacedOrders";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomerPage from "../components/CustomerPage";

const defaultMenu = () => [
  { name: "Shahi Paneer", price: 220 },
  { name: "Paneer Malai Kofta", price: 220 },
  // Add other items as needed
];

const Order = () => {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const [customerDetails, setCustomerDetails] = useState({});
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    mobile: "",
  });

  // Check if running in the browser before accessing localStorage
  const isBrowser = typeof window !== "undefined";

  // Load saved data from localStorage
  useEffect(() => {
    if (isBrowser) {
      const savedMenu = JSON.parse(localStorage.getItem("menuu")) || [];
      const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
      const savedCompletedOrders =
        JSON.parse(localStorage.getItem("completedOrders")) || [];
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const savedCustomerDetails =
        JSON.parse(localStorage.getItem("customerDetails")) || {};

      setMenu(savedMenu.length ? savedMenu : defaultMenu());
      setOrders(savedOrders);
      setCompletedOrders(savedCompletedOrders);
      setCart(savedCart);
      setCustomerDetails(savedCustomerDetails);
    }
  }, [isBrowser]);

  // Save data to localStorage on state change
  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem("menuu", JSON.stringify(menu));
      localStorage.setItem("orders", JSON.stringify(orders));
      localStorage.setItem("completedOrders", JSON.stringify(completedOrders));
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("customerDetails", JSON.stringify(customerDetails));
    }
  }, [menu, orders, completedOrders, cart, customerDetails, isBrowser]);

  const addToCart = (itemName) => {
    const item = menu.find((i) => i.name === itemName);
    if (item) {
      setCart([...cart, item]);
    }
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const newOrder = { ...orderDetails, items: [...cart] };
    setOrders([...orders, newOrder]);
    setCart([]);
  };

  const handleSaveDetails = (e) => {
    e.preventDefault();
    setCustomerDetails({
      ...customerDetails,
      name: e.target.name.value,
      mobile: e.target.mobile.value,
    });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Menu onAddToCart={addToCart} menu={menu} />

        {/* Other pages/components can be added here based on currentPage */}
        <Cart cart={cart} />
      </div>
        <CustomerPage
          orders={orders}
          cart={cart}
          menu={menu}
          setOrders={setOrders}
          setCart={setCart}
        />
      <Footer />
    </div>
  );
};

export default Order;
