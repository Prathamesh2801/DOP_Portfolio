import React from "react";

export default function CardItem({ Img }) {
  return (
    <>
      <div className="card bg-base-100 overflow-hidden shadow-xl hover:shadow-2xl relative">
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
        <figure className="h-full">
          <img
            src={Img}
            alt="Shoes"
            className="h-full object-cover"
          />
        </figure>
      </div>
    </>
  );
}
