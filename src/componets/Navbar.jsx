import React, { useContext } from "react";

import { FaShoppingCart } from "react-icons/fa";

import { ShopContext } from "../context/shop-context";

import { Link } from "react-router-dom";

import Cart from "./Cart";

import "./navbar.css";

function Navbar() {
  const { getTotalItems } = useContext(ShopContext);

  const totalItems = getTotalItems();
  return (
    <div className="navbar">
      <Link to={"/"}>
        <h1>Simple Store</h1>
      </Link>
      <Link to={"/cart"} element={<Cart />}>
        <p className="navbar-shop-icon">
          <FaShoppingCart />
          {totalItems > 0 && <>({totalItems})</>}
        </p>
      </Link>
    </div>
  );
}

export default Navbar;
