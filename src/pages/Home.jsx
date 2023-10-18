import React from "react";
import "./home.css";
import Products from "../components/Products";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
          <span className="cart-box">
            <AiOutlineShoppingCart style={{ fontSize: "30px" }} />
            <span className="cart-count">10</span>
          </span>
          <button className="signup-btn">Log Out</button>
        </div>
      </div>
      {/* products and filter section */}
      <Products />
    </div>
  );
};

export default Home;
