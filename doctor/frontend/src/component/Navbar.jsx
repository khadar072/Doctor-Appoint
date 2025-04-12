import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { UserContext } from "@/context/UserContext";
import { toast } from "react-toastify";
import { SearchIcon } from "lucide-react";
import { MdLightMode } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [open, setOpen] = React.useState(false); // For the profile dropdown
  const { token, setToken, userData } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // Toggle dropdown on click

  const logoutHandler = () => {
    // Simulate token removal (e.g., clear from localStorage)
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    toast.success("logout successfully");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/" className="flex gap-1.5">
        <img className="h-12" src={assets.logo2} alt="dummyLogoColored" />
        <div className="relative text-blue-500">
          <p className="font-semibold pt-1">Doctor</p>
          <p className=" absolute top-5 font-semibold">Appointment</p>
        </div>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink className="text-blue-500 hover:text-blue-600" to="/">
          Home
        </NavLink>
        <NavLink className="text-blue-500 hover:text-blue-600" to="/doctors">
          Doctors
        </NavLink>
        {
          token && <NavLink className="text-blue-500 hover:text-blue-600" to="/my-appointment">
                     My-Appointment
                   </NavLink>
        }
        <NavLink className="text-blue-500 hover:text-blue-600" to="/contact">
          Contact
        </NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <SearchIcon />
        </div>

        <div className="relative cursor-pointer">
          <MdLightMode size={25} className="text-blue-600" />
        </div>

        {token ? (
          <div className="flex flex-col w-28 text-sm relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-14 h-14 rounded-full text-left border bg-white text-gray-700 border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none"
            >
              <img
                className="h-14 w-14 rounded-full"
                src={userData.image}
                alt="userImage1"
              />
            </button>

            {showDropdown && (
              <ul className="absolute w-44 bg-white border border-gray-300 rounded shadow-md mt-1 py-2 -right-8 top-[68px] z-10">
                <li
                  onClick={() => {
                    navigate("/profile");
                    setShowDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer"
                >
                  Profile
                </li>
                <li
                  onClick={() => {
                    logoutHandler();
                    setShowDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer px-8 py-2 bg-blue-500 hover:bg-blue-600 transition text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <BiMenuAltRight size={30} className="text-blue-600" />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute  top-[60px] left-0 w-full bg-white z-20 shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/doctors" onClick={() => setOpen(false)}>
            Doctors
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
          {token ? (
            <div className="flex gap-2  flex-col">
              <NavLink to="/my-appointment" onClick={() => setOpen(false)}>
                My-Appointment
              </NavLink>
              <NavLink to="/profile" onClick={() => setOpen(false)}>
                Profile
              </NavLink>
              <button
                onClick={() => {
                  logoutHandler();
                  setOpen(false); // Close the menu after logout
                }}
                className="cursor-pointer px-6 py-2 mt-2 bg-blue-500 hover:bg-blue-600 transition text-white rounded-lg text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {navigate("/login")
              setOpen(false)}
              }
              className="cursor-pointer px-6 py-2 mt-2 bg-blue-500 hover:bg-blue-600 transition text-white rounded-lg text-sm"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
