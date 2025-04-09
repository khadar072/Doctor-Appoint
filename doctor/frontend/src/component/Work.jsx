import React from "react";
import { assets } from "../assets/assets";

const Work = () => {
  return (
    <div className="mt-7 flex flex-col justify-center items-center  mb-4">
      <h1 className="text-2xl font-semibold  mt-4 ">How It Works!</h1>
      <p className="text-xs text-gray-800 text-center mb-3">Discover book, and experience  personalizes healthcare effortlessly
      <br /> with  our  user-friendly Doctor Appointment Website</p>
      <div  className="flex justify-center items-center gap-6">
      <div className="flex flex-col items-center">
        <img className="w-16 rounded shadow-md my-3" src={assets.person} alt="" />
        <div>
          <h1 className="text-lg font-medium text-center">Find Doctor</h1>
          <p className="text-xs text-center text-gray-800">Discover Skilled  doctor based on <br />
          specialist and location</p>
        </div>
        </div>
        <div className="flex flex-col items-center">
        <img className="w-16 rounded shadow-md my-3" src={assets.calender} alt="" />
        <div>
          <h1 className="text-lg font-medium text-center">Book Appointment</h1>
          <p className="text-xs text-center text-gray-800">Effortlessy book appointment at<br />
          your convinience</p>
        </div>
        </div>
        <div className="flex flex-col items-center">
        <img className="w-16 rounded shadow-md my-3" src={assets.health} alt="" />
        <div>
          <h1 className="text-lg font-medium text-center">Get Services</h1>
          <p className="text-xs text-center text-gray-800">Receive personilized  healthcare<br />
          services tailored to your needs</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Work
