import { createContext, useState } from "react";

export const CartConsumer = createContext();

export const CartProvider = ({ children }) => {
  const [CartData, setCartData] = useState(0);

  function increaseCart() {
    setCartData((prev) => prev + 1);
  }

  return (
    <CartConsumer.Provider
      value={{
        CartData,
        increaseCart,
      }}
    >
      {children}
    </CartConsumer.Provider>
  );
};
