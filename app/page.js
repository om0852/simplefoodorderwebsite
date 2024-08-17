"use client";
import React, { useState, useEffect } from "react";
import "./globals.css"; // Optional: If you have custom styles
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomePage from "./components/WelcomePage";

const Home = () => {
  
  return (
  <div>
    <Header/>
    <WelcomePage/>
    <span className="">

    </span>
    <Footer/>
  </div> 
  );
};

export default Home;
