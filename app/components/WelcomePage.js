import React from 'react';

const WelcomePage = ({ onGetStarted }) => (
  <div className="welcome-container">
    <img src="https://i.ibb.co/HxKWcgb/Whats-App-Image-2024-08-13-at-10-58-47-PM-1.jpg" alt="Hotel Ambika" className="welcome-image" />
    <h1>WELCOME TO HOTEL AMBIKA</h1>
    <h3>Andarsul, Tal:-Yeola, Dist:-Nashik (423402)</h3>
    <button onClick={onGetStarted}>Get Started</button>
  </div>
);

export default WelcomePage;
