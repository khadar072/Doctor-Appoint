import React from "react";
import { assets } from "../assets/assets";

const CreateAccount = () => {
  return (
    <div className="my-10 sm:mt-16 bg-blue-600 text-white flex  px-6 sm:px-10 md:px-14 lg:px-10 xl:px-20 ">
      <div className="w-full flex flex-col items-start py-[70px] xl:py-[75px]  ">
        <p className=" text-4xl font-semibold">Book An Appointment </p>
        <p className="text-4xl font-semibold">With 100+ Trusted Doctors</p>
        <button className="bg-white px-4 py-2 rounded-lg text-black text-center mt-3 ">Create account</button>
      </div>
      <div className="hidden md:block  md:w-1/2 lg:w-[400px]  relative">
        <img className=" absolute lg:max-w-3xl xl:max-w-7xl  bottom-0 right-0" src={assets.banner16} alt="" />
      </div>
    </div>
  );
};

export default CreateAccount;
