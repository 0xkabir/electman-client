import React from "react";
import { FaPhoneAlt, FaBolt } from "react-icons/fa";
import "./CallElectMan.css";

const CallElectMan = () => {
  return (
    <div className="custom-bg h-[480px] flex items-center">
      <div className="bg-white md:p-10 md:w-3/5 lg:w-2/5 mx-3 md:mx-20 h-[400px] md:h-96">
        <h2 className="text-4xl font-medium m-4 md:m-auto px-8 py-5 border-l-4 border-orange-600">
          Do You <span className="text-orange-600">Need Help</span> With
          Electrical Maintenance?
        </h2>
        <p className="text-gray-600 my-5 px-5 md:px-auto">
          ElectMan's electrical repair and service options are proudly offered
          to clients. Give a call today to schedule a free service estimate!
        </p>
        <div className="flex justify-evenly">
          <button className="px-5 py-3 rounded bg-orange-600 hover:bg-white text-white hover:text-orange-600 border border-orange-600 font-medium flex items-center">
            <FaPhoneAlt className="mr-2" />
            Give a Call
          </button>
          <button className="px-5 py-3 rounded bg-gray-700 hover:bg-white text-white hover:text-orange-600 border border-gray-700 hover:border-orange-600 font-medium flex items-center">
            <FaBolt className="mr-2 text-orange-600" />
            Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallElectMan;
