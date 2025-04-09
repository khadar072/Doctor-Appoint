import React from "react";
import { assets } from "../assets/assets";

const Middle = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center bg-cover bg-center  text-white text-center px-4 py-6 xl:py-10  mb-4"
      style={{ backgroundImage: `url(${assets.banner3})`,  }}
    >
      {/* Blue Blur Effect */}
      <div className="absolute inset-0 bg-blue-400/50 backdrop-blur-md rounded-lg"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-1">Your Health is Our Priority</h1>
        <p className="text-xs mb-1">
          Our team of experienced doctors is here to ensure your well-being.
          Schedule your consultation now!
        </p>
        <p className="text-lg mb-1">
          Scheduling an appointment with our top doctors has never been easier.
        </p>
        <p className="text-xs mb-2">Get personalized care at your convenience.</p>
        <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Middle;
