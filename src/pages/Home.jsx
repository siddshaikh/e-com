import React from "react";
import "./home.css";
import Products from "../components/Products";

const Home = () => {
    
  return (
    <div>
      {/* basic nav section */}
      <div className="nav flex">
        {/* section first */}
        <div className="first flex">
          <h1 className="main-logo">E-com</h1>
          <h2 className="nav-item products">Products</h2>
        </div>
        {/* section second */}
        <div className="second flex">
            <h2 className="nav-item">Log in</h2>
            <button className="signup-btn">Sign Up</button>
        </div>
      </div>
      {/* products and filter section */}
      <Products/>
    </div>
  );
};

export default Home;
