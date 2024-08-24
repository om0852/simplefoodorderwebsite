import React, { useEffect, useState } from 'react';

const Menu = ({menu, onAddToCart }) => {
 
  return (
    <div id="menu" >
      <h3>Menu</h3>
      {menu && menu.map((item, index) => {
        return(
        <div key={index}>
          <h2>{item.name}</h2>
          <p>Price:₹{item.price}</p>
          <button onClick={() => onAddToCart(item.name)}>Add to Cart</button>
        </div>
      )})}
    </div>
  );
};

export default Menu;
