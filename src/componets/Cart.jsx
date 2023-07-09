import React, { useContext } from "react";

import "./cart.css";

import { ShopContext } from "../context/shop-context";

import { Pdata } from "./ProductData";

function Cart() {
  const {
    y,
    addToCart,
    cartItems,
    removeFromCart,
    removeAll,
    getTotalCartAmount,
    getTotalItems,
  } = useContext(ShopContext);

  const totalItems = getTotalItems();
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div>
        {totalItems === 0 ? (
          <h3>Your Cart is Empty</h3>
        ) : (
          <div className="cart-list">
            {Pdata.map((product, index) => {
              if (cartItems[product.id] !== 0) {
                return (
                  <div key={index} className="cart-item">
                    <div className="cart-item-img">
                      <img src={product.img} alt="" />
                      <h4>{product.name}</h4>
                      <button onClick={() => removeFromCart(product.id)}>
                        -
                      </button>
                      {cartItems[product.id]}
                      <button onClick={() => addToCart(product.id)}>+</button>
                      <button onClick={() => removeAll(product.id)}>
                        Remove
                      </button>
                    </div>
                    <div className="cart-item-info">
                      <h2>₹{product.price}</h2>
                    </div>
                  </div>
                );
              }
            })}
            <strong className="total-amount">
              Total Amount: ₹{totalAmount}
            </strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
