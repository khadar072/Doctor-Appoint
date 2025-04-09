import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-500 mt-20 text-white  relative px-6 pt-32  pb-4 rounded-t-lg">
      <div className="w-full  absolute -top-[70px] flex justify-center items-center">
        <div className=" w-full sm:w-2/3 bg-blue-700 rounded-lg px-2 sm:px-6 py-2 sm:py-4 gap-1">
          <p className="text-xl sm:text-3xl text-center font-semibold text-white">
            Subscripe Our NewLetter
          </p>
          <div className="flex justify-center items-center w-full pl-2 sm:pl-10 relative py-3 sm:py-4">
            <input
              className="w-full text-gray-600 pl-4 py-3 rounded-lg "
              type="text"
              placeholder="Example@gmail.com"
            />
            <button className="absolute bg-black text-white text-center  px-5 py-2 right-1">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left side */}
          <div className="space-y-4">
            <div className="flex">
              <img src={assets.logo2} className="w-26 h-12 " alt="" />
              <div className=" flex flex-col text-white relative pt-2 ">
                <p className=" font-semibold">Doctor </p>
                <p className=" absolute top-6 font-semibold">Appointment</p>
              </div>
            </div>
            <p className="text-sm text-white leading-relaxed">
              Have questions or need assistance? We're here to help! Feel free
              to reach out to us anytime, and we'll get back to you as soon as
              possible.
            </p>
          </div>

          {/* Middle section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:col-span-2">
            {/* Main Links */}
            <div>
              <h2 className="text-lg text-white font-semibold  mb-4">
                Main Links
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavLink className="hover:text-blue-600 transition" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:text-blue-600 transition"
                    to="/doctors"
                  >
                    Doctors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:text-blue-600 transition"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:text-blue-600 transition"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">
                Contact Us
              </h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <img className="w-6" src={assets.phone} alt="Phone" />
                  <p className="ml-2 text-white">+251 00 000000</p>
                </li>
                <li className="flex items-center">
                  <img className="w-6" src={assets.message} alt="Message" />
                  <p className="ml-2 text-white">khadar@gmail.com</p>
                </li>
                <li className="flex items-center">
                  <img
                    className="w-6"
                    src={assets.blueLocation}
                    alt="Location"
                  />
                  <p className="ml-2 text-white">Debre Burhan, DBU</p>
                </li>
              </ul>
            </div>

            {/* External Links */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <img className="w-6" src={assets.facebook} alt="Facebook" />
                  <p className="ml-2 text-white">Facebook</p>
                </li>
                <li className="flex items-center">
                  <img className="w-6" src={assets.twitter} alt="Twitter" />
                  <p className="ml-2 text-white">Twitter</p>
                </li>
                <li className="flex items-center">
                  <img className="w-6" src={assets.instogram} alt="Instagram" />
                  <p className="ml-2 text-white">Instagram</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-black">
            &copy; 2024 Doctor Appointment. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
