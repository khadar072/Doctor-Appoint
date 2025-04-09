import { assets } from "@/assets/assets";
import { UserContext } from "@/context/UserContext";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";


const Navbar2 = () => {
  const { token, userData, setToken } = useContext(UserContext);
  const navigate = useNavigate()


    const logoutHandler = () => {
      // Simulate token removal (e.g., clear from localStorage)
      localStorage.removeItem('token');
      setToken('');
      navigate("/");
      toast.success('logout successfully')
    };

    
  return (
    <div className="h-20 w-full  flex flex-col justify-center items-center">

        {/* right part */}
      <div className=" w-full flex justify-between bg-blue-600  px-20">
        <div className="h-12  gap-0 flex ">
          <img src={assets.logo2} className="w-26 h-12 " alt="" />
          <div className=" flex flex-col text-white relative pt-2 ">
            <p className=" font-semibold">Doctor </p>
            <p className=" absolute top-6 font-semibold">Appointment</p>
          </div>
        </div>
        <div className="flex gap-3 pt-3">
          <p className="text-white h-7 px-4 text-center rounded-xl font-semibold border">
            Welcome, {token ? userData.name : "Patient"}
          </p>
         
        </div>
      </div>


      {/* left part */}
      <div className="h-8 bg-white shadow-lg z-0 flex justify-center items-center w-full gap-6">
      <div className="flex gap-4" >
        <NavLink to="/" className="hover:text-blue-700 font-semibold">
          Home
        </NavLink>
        <NavLink to="/doctors" className="hover:text-blue-700 font-semibold">
          Doctors
        </NavLink>
        <NavLink to="/about" className="hover:text-blue-700 font-semibold">
          About Us
        </NavLink>
        <NavLink to="/contact" className="hover:text-blue-700 font-semibold">
          Contact Us
        </NavLink>

        {token ? (
          <>
            <NavLink
              to="/my-appointment"
              className="font-semibold hover:text-blue-600"
            >
              My Appointment
            </NavLink>
            <p  onClick={() => { logoutHandler();}}  className="font-semibold cursor-pointer hover:text-blue-600">
              Logout
            </p>
          </>
        ) : (
          <>
            <NavLink to="/login" className="font-semibold hover:text-blue-600">
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="font-semibold hover:text-blue-600"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
      </div>
    </div>
  );
};

export default Navbar2;
