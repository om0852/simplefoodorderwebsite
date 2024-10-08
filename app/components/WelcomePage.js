import Link from "next/link";
import React, { useState, useEffect } from "react";

const WelcomePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onGetStarted = () => {
    // Your onGetStarted logic here
  };

  return (
    <div id="welcome-page" className="welcome-container container">
      <img
        src="https://i.ibb.co/HxKWcgb/Whats-App-Image-2024-08-13-at-10-58-47-PM-1.jpg"
        alt="Hotel Ambika"
        className="welcome-image"
      />
      <h1>WELCOME TO HOTEL AMBIKA</h1>
      <h3>Andarsul, Tal:-Yeola, Dist:-Nashik (423402)</h3>
      {isClient && localStorage.getItem("food_role") && (
        <button onClick={onGetStarted}>
          <Link href="/order">Get Started</Link>
        </button>
      )}
    </div>
  );
};

export default WelcomePage;
