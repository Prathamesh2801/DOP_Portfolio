import React from "react";
import { Link } from "react-router-dom";

export default function CardItem({ Img, id, production, director }) {
  return (
    <Link to={`/details/${id}`} className="block w-full aspect-[13/7] relative group">
      {production || director ? (
        <div className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 rounded-md">
          <figure className="w-full">
            <img
              src={Img}
              alt={`Project ${id}`}
              className="w-full object-cover rounded-t-md"
            />
          </figure>
          <div className="p-3 bg-base-100 rounded-b-md">
            {production && (
              <p className="text-base text-gray-400">Production : &nbsp; {production}</p>
            )}
            {director && (
              <p className="text-base text-gray-400">Director : &nbsp; {director}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-base-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 rounded-md">
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
        <figure className="w-full h-full">
          <img
            src={Img}
            alt={`Project ${id}`}
            className="w-full h-full object-cover"
          />
        </figure>
        </div>
      )}
    </Link>
  );
}
