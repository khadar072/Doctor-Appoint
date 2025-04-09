import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "@/context/UserContext";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState();
  const [filter, setFilter] = useState(false);
  const { doctors } = useContext(UserContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality]);

  return (
    <div className="mt-4 flex flex-col w-full ">
      <p className="text-blue-500">Browse Through Doctor Speciality</p>
      {/* Filter Button and Dropdown */}
      <div className="block md:hidden px-2 py-1 relative">
        <p
          onClick={() => setFilter(!filter)}
          className="px-4 py-1 text-2xl border border-blue-600 cursor-pointer"
        >
          Filter
        </p>

        {filter && (
          <div className="flex flex-col w-full gap-2 mt-2 border border-blue-600 bg-white shadow-lg z-50">
            <p
              onClick={() => {
                speciality === "Surgery"
                  ? navigate("/doctors")
                  : navigate("/doctors/Surgery");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === "Surgery" ? "bg-blue-100" : ""
              } `}
            >
              Surgery
            </p>
            <p
              onClick={() => {
                speciality === "Neurological"
                  ? navigate("/doctors")
                  : navigate("/doctors/Neurological");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === "Neurological" ? "bg-blue-100" : ""
              }`}
            >
              Neurological
            </p>
            <p
              onClick={() => {
                speciality === "Cardiologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Cardiologist");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === "Cardiologist" ? "bg-blue-100" : ""
              }`}
            >
              Cardiologist
            </p>
            <p
              onClick={() => {
                speciality === "Dentist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Dentist");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === "Dentist" ? "bg-blue-100" : ""
              }`}
            >
              Dentist
            </p>
            <p
              onClick={() => {
                speciality === "Pediatric"
                  ? navigate("/doctors")
                  : navigate("/doctors/Pediatric");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === "Pediatric" ? "bg-blue-100" : ""
              }`}
            >
              Pediatric
            </p>
            <p
              onClick={() => {
                speciality === "General Doctor"
                  ? navigate("/doctors")
                  : navigate("/doctors/General Doctor");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === " General Doctor" ? "bg-blue-100" : ""
              }`}
            >
              General Doctor
            </p>
            <p
              onClick={() => {
                speciality === "Orthopedic"
                  ? navigate("/doctors")
                  : navigate("/doctors/Orthopedic");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === " Orthopedic" ? "bg-blue-100" : ""
              }`}
            >
              Orthopedic
            </p>
            <p
              onClick={() => {
                speciality === "Otology"
                  ? navigate("/doctors")
                  : navigate("/doctors/Otology");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === " Otology" ? "bg-blue-100" : ""
              }`}
            >
              Otology
            </p>
          </div>
        )}
      </div>
      {/* Main Content */}
      <div
        className={`flex flex-col  sm:flex-row sm:mb-80 lg:mb-0 w-full gap-2 mt-2 transition-all duration-300 ${
          filter ? "mt-4" : ""
        }`}
      >
        {/* Left Side */}
        <div className="hidden md:flex flex-col w-44 xl:w-48 xl:text-lg gap-1 mr-4 xl:mr-10">
          <p
            onClick={() =>
              speciality === "Surgery"
                ? navigate("/doctors")
                : navigate("/doctors/Surgery")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "Surgery" ? "border-blue-600" : ""
            }`}
          >
            Surgery
          </p>
          <p
            onClick={() =>
              speciality === "Neurological"
                ? navigate("/doctors")
                : navigate("/doctors/Neurological")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full h-auto ${
              speciality === "Neurological" ? "border-blue-600" : ""
            }`}
          >
            Neurological
          </p>
          <p
            onClick={() =>
              speciality === "Cardiologist"
                ? navigate("/doctors")
                : navigate("/doctors/Cardiologist")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "Cardiologist" ? "border-blue-600" : ""
            }`}
          >
            Cardiologist
          </p>
          <p
            onClick={() =>
              speciality === "Dentist"
                ? navigate("/doctors")
                : navigate("/doctors/Dentist")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "Dentist" ? "border-blue-600" : ""
            }`}
          >
            Dentist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatric"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatric")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "Pediatric" ? "border-blue-600" : ""
            }`}
          >
            Pediatric
          </p>
          <p
            onClick={() =>
              speciality === "General Doctor"
                ? navigate("/doctors")
                : navigate("/doctors/General Doctor")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "General Doctor" ? "border-blue-600" : ""
            }`}
          >
            General Doctor
          </p>
          <p
            onClick={() =>
              speciality === "Orthopedic"
                ? navigate("/doctors")
                : navigate("/doctors/Orthopedic")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "Orthopedic" ? "border-blue-600" : ""
            }`}
          >
            Orthopedic
          </p>
          <p
            onClick={() =>
              speciality === "Otology"
                ? navigate("/doctors")
                : navigate("/doctors/Otology")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "Otology" ? "border-blue-600" : ""
            }`}
          >
            Otology
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full flex-1 grid grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-6 px-2 sm:px-4  cursor-pointer">
          {filterDoc &&
            filterDoc.map((item) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                key={item._id}
                className="border px-1 py-2 gap-2 rounded-lg h-auto transition-transform transform duration-500 hover:-translate-y-2 hover:border-2 hover:border-blue-700"
              >
                <div className=" mb-1">
                  <img
                    className="h-[200px] xl:h-[240px] w-full  border object-cover  bg-blue-100 rounded-lg"
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="flex flex-col mt-1 gap-1 sm:gap-0 items-start px-5">
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
      </div>
    </div>
  );
};

export default Doctors;
