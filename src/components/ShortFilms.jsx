import React from "react";
import CardItem from "./CardItem";
import { DATA } from "../assets/data/data";


export default function ShortFilms() {
  const shortFlims = DATA.filter((item) => item.id > 16 && item.id <= 19);
  return (
    <div className="py-16 px-14 bg-base-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {shortFlims.map((data) => (
          <CardItem key={data.id} id={data.id} Img={data.Img} />
        ))}
      </div>
    </div>
  );
}
