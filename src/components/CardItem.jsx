import React from "react";

export default function CardItem({Img}) {
  return (
    <>
      <div className="card bg-base-100  overflow-hidden shadow-xl hover:shadow-2xl ">
        <figure className="h-full">
          <img
            src={Img}
            alt="Shoes"
            className=" h-full object-cover"
          />
        </figure>
      </div>
    </>
  );
}
