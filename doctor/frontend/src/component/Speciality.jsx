import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { specialityData } from "../assets/assets";

const Speciality = () => {
  const navigate = useNavigate();

  return (
    // <div
    //   id="speciality"
    //   className=" flex flex-col  mt-4 px-6 md:px-36 xl:mx-40 m-auto "
    // >
    //   <p className="text-sm text-gray-700 text-center">
    //     Why Travelers Choose Us
    //   </p>
    //   <p className="text-3xl text-blue-500 font-semibold text-center">
    //     Our Services
    //   </p>
    //   <p className="w-full text-xs mb-2 text-gray-500 text-center">
    //     From breathtaking destinations to seamless travel planning, discover how
    //     we make every journey unforgettable.
    //   </p>

    //   <div className="grid grid-cols-4   gap-4 mt-2 justify-center">
    //     {specialityData.map((item, index) => (
    //       <div
    //         key={index}
    //         onClick={() => navigate(`doctors/${item.speciality}`)}
    //         className="flex w-20 lg:w-36 xl:w-44 h-24 lg:h-36  flex-col justify-center items-center b px-1  cursor-pointer group transition-transform transform duration-500 hover:-translate-y-2 bg-[#eff4ff] rounded"
    //       >
    //         <img src={item.image} className="w-14 lg:w-20 pt-3 pb-2" alt="" />
    //         <h3 className="text-blue-900 text-sm  pb-2">{item.speciality}</h3>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div id="speciality" className="mt-8 flex flex-col gap-5">
      <div>
        <p className="text-sm text-gray-700 text-center">
          Why Patients Choose Us
        </p>
        <p className="text-3xl text-blue-500 font-semibold text-center">
          Our Services
        </p>
        <p className="w-full text-xs mb-2 text-gray-500 text-center">
          From breathtaking destinations to seamless travel planning, discover
          how we make every journey unforgettable.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 m-auto">
        {specialityData.slice(0,6).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`doctors/${item.speciality}`)}
            className="flex flex-col justify-center items-center border border-blue-700 px-3 rounded-lg cursor-pointer group transition-transform transform duration-500 hover:-translate-y-2 hover:bg-blue-200"
          >
            <img src={item.image} className="w-10 pt-3 pb-2" alt="" />
            <h3 className="text-black font-medium pb-2">{item.speciality}</h3>
            <p className="text-xs text-wrap text-gray-800 text-center">
              Focused on digestive system health.Providing expert care for your
              needs
            </p>
            {/* <p className="text-xs  text-gray-800 pb-4 text-center">Providing expert care for your needs.</p> */}
            <img
              src={assets.arrow}
              className="w-16 px-2 border h-6 border-blue-600 rounded-lg mt-2 mb-2"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
