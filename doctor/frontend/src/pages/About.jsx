import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="flex flex-col mt-6 gap-2 sm:gap-5 ">
      <p className="text-center text-xl font-semibold text-gray-800 ">
        About Us
      </p>
      <div className="flex  flex-col sm:flex-row   w-full rounded-lg mt-3">
        {/* left side */}
        <div className="sm:w-[30%] w-full pl-20  rounded-l-lg ">
          <img src={assets.doc5} alt="" className=" pl-10 w-56  bottom-0 pt-3" />
        </div>
        {/* right side */}
        <div className="w-full sm:w-[60%]   pl-3 pb-3 pr-5 ">
          <h1 className="text-center text-2xl text-gray-800 font-semibold my-3 ">
            Who We Are
          </h1>
          <p className="text-gray-800 text-lg  text-wrap text-start pt-10  ">
          We are a dedicated platform designed to simplify. Our mission is to connect patients with he right doctors efficiently and provide a seamless experience for booking appointments,ensuringthat healthcare is accessible and hassle-free.
          We are a dedicated platform designed to simplify. Our mission is to connect patients with he right doctors efficiently and provide a seamless experience for booking appointments.
          </p>
        </div>
      </div>

      <div>
        <p className="text-center text-xl font-medium mb-2">Why Choose Us?</p>
        <p className="text-center text-gray-500 px-10">
          We make it easy to connect with trusted doctors and schedule
          appointments at your convenience. Our platform is user-friendly,
          secure, and designed to save you time while ensuring you receive the
          best care. Our platform is user-friendly, secure, and designed to save
          you time while ensuring you receive the best care.
        </p>
      </div>

      <div className="flex  flex-col sm:flex-row items-center gap-6 mt-6 px-6 mb-12 ">
        <div className="flex flex-col gap-4  border border-black  rounded-md  transition-transform transform cursor-pointer duration-500 hover:-translate-y-2 hover:bg-blue-200 px-3 py-3 items-center">
          <img className="w-12 flex  justify-center" src={assets.mission} alt="" />
          <p className="text-lg text-center font-medium ">Mission</p>
          <p className="text-wrap text-center">
          To empower communities by providing innovative solutions that address social challenges, foster collaboration, and create  meaningful impact.
          </p>
        </div>
        <div className="flex flex-col gap-4 shadow border border-black rounded-md  cursor-pointer duration-500 hover:-translate-y-2 hover:bg-blue-200 px-3 py-3 items-center
        // style={{ shadow: bl )`,  }}
        ">
          <img className="w-10 flex  justify-center" src={assets.vision1} alt="" />
          <p className="text-lg text-center font-medium ">Vition</p>
          <p className="text-wrap text-center">
          To empower communities by providing innovative solutions that address social challenges, foster collaboration, and create  meaningful impact.
          </p>
        </div>
        <div className="flex flex-col gap-4 shadow border border-black  rounded-md cursor-pointer duration-500 hover:-translate-y-2 hover:bg-blue-200  px-3 py-3 items-center">
          <img className="w-16 flex  justify-center" src={assets.achievements} alt="" />
          <p className="text-lg text-center font-medium ">Achievment</p>
          <p className="text-wrap text-center">
          To empower communities by providing innovative solutions that address social challenges, foster collaboration, and create  meaningful impact.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
