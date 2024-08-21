import React, { useState } from "react";
import PlacedOrders from "./PlacedOrders";
import axios from "axios";

const CustomerPage = ({ cart, menu, orders, setOrders, setCart }) => {
  const [gotp, setGotp] = useState(Infinity);
  const [mobile, setMobile] = useState("");
  const [email,setEmail]=useState("")
  const [uotp, setUotp] = useState("");
  const handlePlaceOrder = (formElements) => {
    if(uotp==gotp){

      const newOrder = {
        name: formElements.name.value,
        address: formElements.address.value,
        mobile: formElements.mobile.value,
        items: cart,
      };
      axios.post("/api/order", { data: [...orders, newOrder] });
      setOrders([...orders, newOrder]);
      setCart([]);
      alert("Order Place successfully")
    }else{
      alert("invalid otp")
    }
  };

  return (
    <div className="customer-page container">
      <h2>Order Food</h2>
      {/* <Menu onAddToCart={handleAddToCart} /> */}
      {/* <Cart cart={cart} /> */}
      {cart.length > 0 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePlaceOrder(e.target.elements);
          }}
        >
          <h3>Place Order</h3>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" required />
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="number"
            id="mobile"
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {gotp != Infinity && (
            <>
              <label htmlFor="mobile">Otp:</label>
              <input type="text" onChange={(e)=>setUotp(e.target.value)} id="mobile" required />
            </>
          )}
          {gotp != Infinity && <button type="submit">Place Order</button>}
          {gotp == Infinity && (
            <button
              type="button"
              onClick={() => {
                axios.post("/api/sendotp", { email }).then((res) => {
                  console.log(res.data)
                  if (res.data.otp) {

                    setGotp(res.data.otp);
                    alert("otp send successfully");
                  }
                });
              }}
            >
              Send Otp
            </button>
          )}{" "}
        </form>
      )}
      <PlacedOrders orders={orders} onClear={() => setOrders([])} />
    </div>
  );
};

export default CustomerPage;
