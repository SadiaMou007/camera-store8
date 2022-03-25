import React, { useEffect, useState } from "react";
import Camera from "./Camera/Camera";
import Cart from "./Cart/Cart";
import "./Body.css";
const Body = () => {
  const [cameras, setCameras] = useState([]);
  const [cart, setCart] = useState([]);

  // handle choose item
  const selectOne = () => {
    const length = cart.length;
    const random = Math.floor(Math.random() * length);
    setCart([cart[random]]);
  };
  // update cart value
  const handleAddToCart = (camera) => {
    const newCart = [...cart, camera];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);

  return (
    <div className="container bg-light body">
      <div className="row">
        <div className="col-lg-9 col-sm-9">
          <div className="row my-5 g-2">
            {cameras.map((camera) => (
              <Camera
                key={camera.id}
                camera={camera}
                handleAddToCart={handleAddToCart}
              ></Camera>
            ))}
          </div>
        </div>
        <div className="col-lg-3 col-sm-3">
          <div className="selected-cart">
            <h4 className="mt-5">Selected Camera</h4>
            {cart.map((item) => (
              <Cart key={item.id} item={item}></Cart>
            ))}
            <button
              onClick={() => selectOne()}
              className="w-100 p-2 rounded border-0 mt-2 cart-btn"
            >
              Choose 1 For Me
            </button>
            <button onClick={()=>setCart([])} className="border-0 w-100 my-2 p-2 rounded cart-btn">
              Choose Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
