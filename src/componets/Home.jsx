import React, { useContext, useState } from "react";

import { Pdata } from "./ProductData";

import "./home.css";
import { ShopContext } from "../context/shop-context";

import { motion } from "framer-motion";
function Home() {
  const {
    y,
    addToCart,
    cartItems,
    removeFromCart,
    removeAll,
    getTotalCartAmount,
    getTotalItems,
  } = useContext(ShopContext);

  // const cartItemCount = cartItems[id];

  console.log(y);
  const totalAmount = getTotalCartAmount();

  const totalItem = getTotalItems();
  return (
    <div className="home">
      <div className="product-list">
        {Pdata.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="product-item"
              initial={{ opacity: 0, x: "10vw" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="product-item-img">
                <img src={item.img} alt="noimag.png" />
              </div>
              <div className="product-item-info">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                {cartItems[item.id] > 0 && (
                  <div>
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    {cartItems[item.id]}
                    <button onClick={() => addToCart(item.id)}>+</button>
                  </div>
                )}

                {cartItems[item.id] > 0 ? (
                  <button onClick={() => removeAll(item.id)}>Remove</button>
                ) : (
                  <button onClick={() => addToCart(item.id)}>Add</button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
