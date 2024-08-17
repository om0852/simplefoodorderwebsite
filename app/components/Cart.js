import React from 'react';
import "@/app/globals.css"
const Cart = ({ cart }) => (
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
);

export default Cart;
