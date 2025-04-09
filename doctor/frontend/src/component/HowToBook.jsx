import React from "react";
import { assets } from "@/assets/assets";

const HowToBook = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-12 xl:px-20">
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 mt-8 sm:mt-12">
        <p className="text-2xl sm:text-4xl xl:text-5xl text-center font-medium">
          An easy-to-use appointment scheduling app for doctors
        </p>
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-4 xl:gap-12 w-full">
          {/* Card 1 */}
          <div className="flex flex-col w-full lg:w-[32%] cursor-pointer hover:bg-gray-100 px-2 xl:gap-4 py-6 shadow-xl gap-4 sm:gap-6">
            <img src={assets.calender} alt="Calendar Icon" className="w-10 sm:w-12 lg:w-14 mx-auto" />
            <p className="text-md sm:text-lg text-gray-700 font-medium text-start">
              Create your practice’s Booking Page
            </p>
            <p className="text-sm xl:text-base text-center lg:text-left">
              Display your medical services online. Customize your Booking Page with your logo, contact details, reviews, and more.
            </p>
            <p className="text-sm xl:text-base text-center lg:text-left">
              Share specialists’ availability and{" "}
              <span className="text-blue-700">let patients confirm their appointments in minutes.</span>
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col w-full cursor-pointer hover:bg-gray-100 lg:w-[32%] px-2 xl:gap-4 py-6 shadow-xl gap-4 sm:gap-6">
            <img src={assets.use} alt="Use Icon" className="w-12 sm:w-14 lg:w-16 mx-auto" />
            <p className="text-md sm:text-lg text-gray-700 font-medium text-start">
              Book appointments from your website
            </p>
            <p className="text-sm xl:text-base text-center lg:text-left">
              Add a <span className="text-blue-700">‘Book Now’ button</span> to your practice’s website. Enable new and existing patients to self-book right away, without needing to contact your office.
            </p>
            <p className="text-sm xl:text-base text-center lg:text-left">
              Connect Setmore with Squarespace, WordPress, and more.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col w-full lg:w-[32%] cursor-pointer hover:bg-gray-100 px-2 xl:gap-4 py-6 shadow-xl gap-4 sm:gap-6">
            <img src={assets.message} alt="Message Icon" className="w-20 sm:w-24 lg:w-28 mx-auto" />
            <p className="text-md sm:text-lg text-gray-700 font-medium text-start">
              Set up automatic appointment confirmations
            </p>
            <p className="text-sm xl:text-base text-center lg:text-left">
              Attend to more patients while Setmore automates{" "}
              <span className="text-blue-700">booking confirmations via email.</span>
            </p>
            <p className="text-sm xl:text-base text-center lg:text-left">
              Personalize alerts with important pre-appointment information so visitors come prepared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBook;
