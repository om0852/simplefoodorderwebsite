import React, { useEffect, useState } from 'react';

const Menu = ({ onAddToCart }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Fetch the menu from local storage or default values
    const savedMenu = JSON.parse(localStorage.getItem('menuu')) || [
      { name: 'Shahi Paneer', price: 220 },
      { name: 'Paneer Malai Kofta', price: 220 },
      // Add more items as needed
    ];
    setMenu(savedMenu);
  }, []);

  return (
    <div id="menu">
      <h3>Menu</h3>
      {menu.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
