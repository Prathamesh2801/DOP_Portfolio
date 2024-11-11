import React from "react";
import CardItem from "./CardItem";
import Img1 from "../assets/img/Img1.jpg"
import Img2 from "../assets/img/Img2.jpg"
import Img3 from "../assets/img/Img4.jpg"
export default function Cards() {
  return (

    <div className="py-16 px-14 bg-base-200">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        <CardItem Img={Img1}/>
        <CardItem Img={Img2}/>
        <CardItem Img={Img3}/>
        <CardItem Img={Img1}/>
        <CardItem Img={Img2}/>
        <CardItem Img={Img3}/>
    </div>
    </div>
  );
}
