import React, { useContext } from "react";
import "./Cart.css";
import { MyContext } from "../../context/ProductContext";

const Cart = () => {
  const { cart, addToCart, setCart } = useContext(MyContext);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const totalPrice = calculateTotalPrice(cart);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
