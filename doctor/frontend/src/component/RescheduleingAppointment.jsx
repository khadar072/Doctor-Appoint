import React, { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { SlCalender } from "react-icons/sl";
import { IoMdClock } from "react-icons/io";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { UserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RescheduleingAppointment = ({appointmentId}) => {
  const [slotDate, setSlotDate] = useState(new Date());
  const [slotTime, setSlotTime] = useState(""); // Selected time
  const [Time, setTime] = useState([]); // Time slots
  const { token } = useContext(UserContext);

  const handleSave = async () => {
    try {
      console.log("Booking details:", { appointmentId, slotDate, slotTime });

      const { data } = await axios.post(
        "http://localhost:4300/user/api/reschedule-appointement",
        {
          appointmentId,
          slotDate,
          slotTime,
        },
        {
          headers: { token },
        }
      );

      if (data.success) {
        toast.success("Appointment reschedulled successfully!");
      }
    } catch (error) {
      console.error(
        "Error booking appointment:",
        error.response?.data || error.message
      );
      toast.error("doctor is not avialible please select ather doctors");
    }
  };

  useEffect(() => {
    getTimeSlots();
  }, []);

  const getTimeSlots = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push(`${i}:00 AM`);
      timeList.push(`${i}:30 AM`);
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push(`${i}:00 PM`);
      timeList.push(`${i}:30 PM`);
    }
    setTime(timeList);
  };

  const isPastDay = (day) => {
    return day < new Date();
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-6 py-2 text-sm sm:text-base border border-blue-800 text-center text-blue-800 rounded-lg hover:bg-blue-500 hover:text-white transition">
            Reschedule Appointment
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book An Appointment</DialogTitle>
            <DialogDescription>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Date Selection */}
                <div className="flex flex-col gap-1">
                  <h2 className="flex items-center gap-2 text-lg font-medium text-black">
                    <SlCalender className="text-blue-700" />
                    <p>Select Date</p>
                  </h2>
                  <Calendar
                    mode="single"
                    selected={slotDate}
                    onSelect={setSlotDate}
                    disabled={isPastDay}
                    className="rounded-md border text-blue-800 hover:bg-blue-50"
                  />
                </div>

                {/* Time Slot Selection */}
                <div className="flex flex-col gap-1 text-xs">
                  <h2 className="flex items-center gap-2 text-lg font-medium text-black">
                    <IoMdClock className="text-blue-700" />
                    Select Time
                  </h2>
                  <div className="grid grid-cols-3 gap-2">
                    {Time.map((time, index) => (
                      <button
                        key={index}
                        className={`border text-center rounded-xl px-1 py-1.5 cursor-pointer transition-colors duration-200 
                              ${
                                time === slotTime
                                  ? "bg-blue-700 text-white"
                                  : "border-blue-600 hover:bg-blue-700 hover:text-white"
                              }`}
                        onClick={() => setSlotTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex sm:justify-end gap-2 sm:gap-0">
            <DialogClose asChild>
              <Button
                type="button"
                className="bg-red-700 hover:bg-red-600 px-6 h-8"
              >
                Close
              </Button>
            </DialogClose>
            <Button
              onClick={handleSave}
              type="button"
              disabled={!(slotDate && slotTime)}
              className="bg-blue-700 hover:bg-blue-600 px-6 h-8"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RescheduleingAppointment;
