import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, name, imgurl, price, intro } = service;
  return (
    <div className="max-w-sm p-5 rounded-lg shadow-md">
      <PhotoProvider>
        <PhotoView src={imgurl}>
          <img src={imgurl} alt="" />
        </PhotoView>
      </PhotoProvider>
      <h2 className="text-2xl font-bold mt-3">{name}</h2>
      <h3 className="text-lg font-medium text-orange-600">${price}</h3>
      <p className="py-3">{intro}</p>
      <Link to={`/services/${_id}`}>
        <button className="px-3 py-1 border font-medium rounded border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">View Details</button>
      </Link>
    </div>
  );
};

export default ServiceCard;
