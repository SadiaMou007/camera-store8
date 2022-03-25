import React, { useEffect, useState } from "react";
import Camera from "./Camera/Camera";
import Cart from "./Cart/Cart";
import "./Body.css";
const Body = () => {
  const [cameras, setCameras] = useState([]);
  const [cart, setCart] = useState([]);

const handleAddToCart=(camera)=>{
  const newCart=[...cart,camera];
  setCart(newCart);
  console.log(cart);
}

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);
  return (
    <div className="container bg-light ">
      <div className="row">
        <div className="col-lg-9 col-sm-9">
          <div className="row my-5 g-2">
            {cameras.map((camera) => (
              <Camera key={camera.id} camera={camera} handleAddToCart={handleAddToCart}></Camera>
            ))}
          </div>
        </div>
        <div className="col-lg-3 col-sm-3 body">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Body;
