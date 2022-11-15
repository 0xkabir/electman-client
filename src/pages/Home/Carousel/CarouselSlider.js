import { Carousel } from "flowbite-react";

import React from "react";

import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import img3 from "./images/img-3.jpg";

const CarouselSlider = () => {
  return (
    <div className="h-60 sm:h-64 xl:h-[500px]">
      <Carousel>
        <div className="relative flex items-center">
          <img src={img1} alt="..." className="brightness-50 h-64 md:h-auto object-cover"/>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white absolute w-3/4 md:w-1/2 left-16 md:left-20 lg:left-40 mx-auto">Spectacular <span className="text-orange-400">Customer Service</span> On the Market</h2>
        </div>
        <div className="relative flex items-center">
          <img src={img2} alt="..." className="brightness-50 h-64 md:h-auto object-cover"/>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white absolute w-3/4 md:w-1/2 left-16 md:left-20 lg:left-40 mx-auto">Offering the <span className="text-orange-400">Quikest Response</span> On Cilents Need</h2>
        </div>
        <div className="relative flex items-center">
          <img src={img3} alt="..." className="brightness-50 h-64 md:h-auto object-cover"/>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white absolute w-3/4 md:w-1/2 left-16 md:left-20 lg:left-40 mx-auto">Offering <span className="text-orange-400">Affordable</span> Service Plans on the Budget</h2>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
