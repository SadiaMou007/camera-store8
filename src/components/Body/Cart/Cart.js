import React from "react";
import "./Cart.css";
const Cart = ({item}) => {
  console.log(item);
  return (
    <div className="selected-cart me-0">
      <div><h6>{item.name}</h6></div>
    </div>
  );
};

export default Cart;
