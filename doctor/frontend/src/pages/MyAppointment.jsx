import React, { useContext, useEffect, useState } from "react";
import { assets, Doctor } from "../assets/assets";
import { UserContext } from "@/context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RescheduleingAppointment from "@/component/RescheduleingAppointment";

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  const getAppointment = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4300/user/api/get-appointments",
        { headers: { token } }
      );
      if (data.success) {
        setAppointment(data.appointments);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (token) {
      getAppointment();
    }
  }, [token]);

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4300/user/api/cancel-appointement",
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        toast.success("appointment cancelled successfully");
      }
    } catch (error) {
      console.error("Error fetching doctors:", error.message);
    }
  };

  const payPayment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4300/user/api/checkout",
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        console.log("Redirected to Payment Session");
        // Redirect to the Stripe checkout session URL
        window.location.href = data.sessionUrl; // This will redirect the user to the Stripe session URL
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="px-4 sm:px-8 py-4 bg-gray-50">
      <div className="flex flex-col gap-6">
        <p className="text-xl sm:text-2xl font-bold mb-4">My Booking</p>
        {[...appointment].reverse().map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row  border border-blue-800 bg-white p-4 rounded-lg shadow-md"
          >
            {/* Left Side (Image) */}
            <div className="flex-shrink-0">
              <img
                src={item.docData.image}
                className="w-full sm:w-24 sm:h-36 object-cover rounded-md bg-blue-100"
              />
            </div>

            {/* Middle Section (Details) */}
            <div className=" flex-grow px-4">
              <p className="text-lg font-semibold">{item.docData.name}</p>
              <p className="text-sm text-gray-600">{item.docData.speciality}</p>
              <div className="flex items-center gap-2 mt-2 text-sm">
                <img
                  className="w-5 h-5"
                  src={assets.blueLocation}
                  alt="Location"
                />
                <p>{item.docData.address}</p>
              </div>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <img className="w-5 h-5" src={assets.calender} alt="Calendar" />
                <p>
                  {item.slotDate} | {item.slotTime}
                </p>
              </div>
            </div>

            {/* Bottom Section (Buttons) */}
            <div className="flex flex-col justify-center gap-2 mt-4 sm:mt-0 sm:flex-grow-0">
              {!item.cancelled && !item.rescheduled  && <RescheduleingAppointment appointmentId={item._id}/>}
              {item.rescheduled && <button className=" py-2 text-sm sm:text-lg text-red-800 border border-red-100 px-[75px] bg-red-50 rounded-lg">Rescheduled</button>} 
              {!item.cancelled && item.payment && <button className=" py-2 text-sm sm:text-lg text-purple-800 border bg-blue-50 border-blue-200 px-[75px] rounded-lg"> Paid</button>}
              {!item.cancelled &&  !item.payment && <button onClick={() => payPayment(item._id)} className="px-4 py-2 text-sm sm:text-base border border-blue-800 text-blue-800 rounded-lg hover:bg-blue-500 hover:text-white transition"aria-label="Pay Online"> Pay Online</button> }
              {!item.cancelled &&  <button onClick={() => cancelAppointment(item._id)} className="px-4 py-2 text-sm sm:text-base border border-blue-800 text-blue-800 rounded-lg hover:bg-blue-500 hover:text-white transition" aria-label="Cancel Appointment">Cancel Appointment</button>}
              {item.cancelled && <button className=" py-2 text-sm sm:text-lg text-red-800 border border-red-700 px-[75px] rounded-lg">Cancelled</button>}
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
