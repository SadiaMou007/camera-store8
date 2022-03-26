import React, { useEffect, useState } from "react";
import Camera from "./Camera/Camera";
import Cart from "./Cart/Cart";
import "./Body.css";
import Questions from "./Questions/Questions";
const Body = () => {
  const [cameras, setCameras] = useState([]);
  const [cart, setCart] = useState([]);
  const [randomCart, setRandomCart] = useState([]);

  // handle choose item
  const selectOne = () => {
    const length = cart.length;
    const random = Math.floor(Math.random() * length);
    setRandomCart([cart[random]]);
  };
  // update cart value
  const handleAddToCart = (camera) => {
    let flag = 0;
    cart.map((i) => {
      if (i.id === camera.id) {
        flag = 1;
      }
    });
    if (!flag) {
      const newCart = [...cart, camera];
      setCart(newCart);
    } else {
      setCart(cart);
    }
  };

  // set data to setCamera function
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);

  // return Camera, Cart and Questions component
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
            <h4 className="mt-5 text-center">Cart Items</h4>
            {cart.map((item) => (
              <Cart key={item.id} item={item}></Cart>
            ))}
            <button
              onClick={() => selectOne()}
              className="w-100 p-2 rounded border-0 mt-2 cart-btn"
            >
              Get one Random Item
            </button>
            {randomCart.length > 0 && (
              <div>
                <h6>Random Item</h6>
                {randomCart.map((item) => (
                  <Cart key={item.id} item={item}></Cart>
                ))}
              </div>
            )}
            <button
              onClick={() => {
                setCart([]);
                setRandomCart([]);
              }}
              className="border-0 w-100 my-2 p-2 rounded cart-btn"
            >
              Remove All
            </button>
          </div>
        </div>
      </div>

      <Questions></Questions>
    </div>
  );
};

export default Body;
