import { createContext, useEffect, useState } from "react";

import { Pdata } from "../componets/ProductData";

export const ShopContext = createContext(null);

var total = 0;

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Pdata.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [y, setY] = useState(5);

  const [cartItems, setCartItems] = useState(getDefaultCart());

  function addToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function removeFromCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function removeAll(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  }

  function getTotalCartAmount() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Pdata.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  function getTotalItems() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Pdata.find((product) => product.id === Number(item));
        totalAmount += cartItems[item];
      }
    }
    return totalAmount;
  }

  return (
    <ShopContext.Provider
      value={{
        y,
        total,
        addToCart,
        removeFromCart,
        cartItems,
        removeAll,
        getTotalCartAmount,
        getTotalItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
