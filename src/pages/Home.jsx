import React, { useContext } from "react";
import "./home.css";
import Products from "../components/Products";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MyContext } from "../context/ProductContext";
import Cart from "../components/Cart/Cart";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { cartOpen, setCartOpen, cart } = useContext(MyContext);
  const navigate = useNavigate();

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div style={{ position: "relative" }}>
      {/* basic nav section */}
      <div
        style={{
          position: "absolute",
          marginLeft: "500px",
          marginTop: "300px",
          position: "fixed",
        }}
      >
        {cartOpen && <Cart />}
      </div>
      <div className="nav flex">
        {/* section first */}
        <div className="first flex">
          <h1 className="main-logo">E-com</h1>
          <h2 className="nav-item products">Products</h2>
        </div>
        {/* section second */}
        <div className="second flex">
          <span className="cart-box" onClick={handleCartOpen}>
            <AiOutlineShoppingCart style={{ fontSize: "30px" }} />
            <span className="cart-count">{cart.length}</span>
          </span>
          <button className="signup-btn" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
      {/* products and filter section */}
      <Products />
    </div>
  );
};

export default Home;
