import React, { useEffect, useState } from 'react';

const Menu = ({menu, onAddToCart }) => {
 
  return (
    <div id="menu" >
      <h3>Menu</h3>
      {menu && menu.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <button onClick={() => onAddToCart(item.name)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
