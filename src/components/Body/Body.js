import React from "react";
import Camera from "./Camera/Camera";
import Cart from "./Cart/Cart";

const Body = () => {
  return (
    <div className="container bg-info bg-opacity-10 ">
      <div className="row">
        <div className="col-lg-8 col-sm-8">
        <Camera></Camera>
        </div>
        <div className="col-lg-4 col-sm-4">
        <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Body;
