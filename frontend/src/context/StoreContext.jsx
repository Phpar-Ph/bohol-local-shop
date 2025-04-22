import React, { useEffect } from "react";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prevItems) => ({ ...prevItems, [itemId]: 1 }));
    } else {
      setCartItems((prevItems) => ({
        ...prevItems,
        [itemId]: prevItems[itemId] + 1,
      }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: prevItems[itemId] - 1,
    }));
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
