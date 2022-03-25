import React, { useEffect, useState } from "react";
import Camera from "./Camera/Camera";
import Cart from "./Cart/Cart";
const Body = () => {
const [cameras,setCameras]=useState([])
useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setCameras(data))
},[])
  return (
    <div className="container bg-light ">
      <div className="row">
        <div className="col-lg-8 col-sm-8">
{
    cameras.map(camera=><Camera key={camera.id} camera={camera}></Camera>)
}
        </div>
        <div className="col-lg-4 col-sm-4">
        <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Body;
