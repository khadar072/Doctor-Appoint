import React, { useContext } from "react";
import { Doctor } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/context/UserContext";

const Topdoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center  text-gray-800 my-10 md:mx-6">
      <p className="text-sm text-gray-700 text-center">
        Meet Our Leading Medical Experts
      </p>
      <p className="text-3xl text-blue-500 font-semibold text-center">
        Top Doctors
      </p>
      <p className="w-full text-xs text-gray-500 text-center">
        Explore our roster of highly qualified, experienced doctors dedicated to
        delivering exceptional healthcare.
      </p>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 xl:gap-4 pt-5 px-1 sm:px-0 cursor-pointer">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="border px-3 py-3 rounded-lg h-auto transition-transform transform duration-500 hover:-translate-y-2 hover:border-2 hover:border-blue-700"
          >
            <div className="mb-1">
              <img
                className="h-[180px] xl:h-[240px] w-full  bg-blue-100 border object-cover rounded-lg"
                src={item.image}
                alt={`${item.name}`}
              />
            </div>

            <div className="flex flex-col mt-2 gap-1 sm:gap-0 items-start px-3">
              <div className="flex gap-1 items-center justify-center">
                <p
                  className={`w-[6px] h-[6px] rounded-full ${
                    item.available ? "bg-green-500" : "bg-gray-500"
                  } `}
                ></p>
                <p
                  className={`text-xs   ${
                    item.available ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  {item.available ? "Available" : "Not Avialable"}
                </p>
              </div>
              <h3 className="text-sm font-medium">{item.name}</h3>
              <p className="text-xs mt-1 border border-blue-500 px-2 rounded flex items-center justify-center mb-1">
                {item.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 px-6 py-2 border border-blue-600 text-blue-600 hover:text-white rounded-lg hover:bg-blue-700 transition-all">
          Learn More
        </button>
    </div>
  );
};

export default Topdoctors;
