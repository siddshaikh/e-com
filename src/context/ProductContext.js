import { createContext, useState } from "react";

export const MyContext = createContext(false);
const ProductContext = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  return (
    <MyContext.Provider
      value={{ cartOpen, setCartOpen, cart, addToCart, setCart }}
    >
      {children}{" "}
    </MyContext.Provider>
  );
};

export default ProductContext;
