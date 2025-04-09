import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="bg-gray-100  relative  z-10 overflow-hidden max-h-[650px] xl:max-h-[800px] flex justify-center items-center">
      {/* Background Pattern */}
      <div className="h-[600px] w-[600px] bg-blue-500  absolute -top-1/2 right-0 rounded-3xl rotate-45"></div>
      <div className="h-[300px] w-[300px] absolute border-[30px] border-blue-500 -bottom-44 -left-28 xl:bottom-20 xl:left-10 rounded-3xl"></div>

      {/* Hero Section */}
      <div className="flex flex-col z-10 md:flex-row flex-wrap xl:gap-24 px-6 md:px-10 lg:px-20 xl:px-32">
        {/* Left Part */}
        <div className="w-full md:w-1/2 xl:w-1/2 pl-10 xl:pl-20 flex justify-center flex-col">
          <p className="text-3xl font-bold">
            Book Your Doctor <br /> Appointment Online
          </p>
          <p className="text-sm mt-3 text-blue-700">
            A healthcare Tomorrow Starts Today Schedule Your Appointment. Your
            wellness, Our Expertise. Set Up Your Appointment Today.
          </p>
          <a
            href="#speciality"
            className="border w-32 text-center bg-blue-500 text-white text-sm py-1 mt-2 rounded-lg"
          >
            Explore Now
          </a>
        </div>

        {/* Right Part */}
        <div className="md:w-1/2 xl:w-1/2 relative flex justify-center">
          <img
            src={assets.banner7}
            alt="Doctor Image"
            className="w-full -w-[500px] h-auto rounded-lg xl:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
