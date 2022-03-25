import React from "react";
import "./Camera.css";
import { BsCartCheckFill } from "react-icons/bs";

const Camera = ({ camera,handleAddToCart}) => {
  const { name, img, price } = camera;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-4 p-2">
      <div className="">
        <div className="card">
          <img className="camera-img" src={img} alt="" />
          <div className="card-body">
            <h5 className="card-title name my-3">{name}</h5>
            <p className="card-text fw-bold">Price: ${price}</p>
          </div>
          <div >
            <button className="bg-dark p-2 w-100 border-0 text-white fw-bold bg-opacity-50" onClick={()=>handleAddToCart(camera)}>
              Add To Cart <BsCartCheckFill className="cart-icon"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera;
