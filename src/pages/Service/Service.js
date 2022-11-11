import React from "react";
import { useLoaderData } from "react-router-dom";

const Service = () => {
  const { _id, name, imgurl, price, intro, description } = useLoaderData();
  return (
    <div>
      <div className="p-5 md:p-10 ">
        <img src={imgurl} alt="" className="w-11/12 md:w-2/5 mx-auto" />
        <div className="w-11/12 md:w-1/2 mx-auto">
          <h2 className="text-3xl font-medium my-3">{name}</h2>
          <p className="text-lg">{intro}</p>
          <h3 className="text-xl font-medium text-orange-600 my-3">
            Price: ${price}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
