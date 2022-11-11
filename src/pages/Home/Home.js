import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../shared/ServiceCard/ServiceCard";
import CarouselSlider from "./Carousel/CarouselSlider";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services?count=3")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <CarouselSlider />
      <div className="text-center mx-5 md:mx-20 lg:mx-32 my-5 md:my-10 lg-my-20">
        <h2 className="text-3xl font-medium mb-4">Popular Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <Link to='/services'>
        <button className="px-3 py-1 mt-10 border font-medium rounded border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">View All</button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
