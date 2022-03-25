import React from "react";
import "./Cart.css";
import { AiFillDelete } from "react-icons/ai";


const Cart = ({ item }) => {
  const { name, img } = item;
  return (
    <div className="selected-cart ">
      <div className="row g-2 p-1 d-flex justify-content-center align-items-center border">
        <div className=" col-lg-3 border">
          <img className="img-fluid rounded-circle" src={img} alt="" />
        </div>
        <h6 className="col-lg-7 ps-2">{name}</h6>
        <div className="col-lg-2 del-icon">
          <AiFillDelete />
        </div>
      </div>
    </div>
  );
};

export default Cart;
