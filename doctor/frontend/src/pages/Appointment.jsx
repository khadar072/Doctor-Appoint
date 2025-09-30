import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, Doctor } from '../assets/assets';
import RelatedDoctors from '../component/RelatedDoctors';
import BookingAppointment from '../component/BookingAppointment';
import { useContext } from 'react';
import { UserContext } from '@/context/UserContext';

const Appointment = () => {
  const { docId } = useParams(); // Extract doctor ID from URL
  const [doctor, setDoctor] = useState(null);
  const {doctors}=useContext(UserContext)
 
 


  const getTime = () => {
   // Update state once
  };

  useEffect(() => {
    getTime();
  }, []);

  useEffect(() => {
    if (docId) {
      // Find the doctor with the matching ID
      const foundDoctor = doctors.find(doc => doc._id === docId);
      setDoctor(foundDoctor);
    }
  }, [docId,doctors]);

  if (!doctor) {
    // Show loading or "not found" message if doctor is null
    return <p>Loading... or Doctor not found!</p>;
  }

  return (
    <div className="flex flex-col pl-2 sm:pl-10 mt-6 ">

      {/* doctor detail */}
      <div className="flex  items-start gap-4 w-full border px-2 xl:px-4 py-3">
        <div className="flex flex-col sm:flex-row gap-3 xl:gap-6 w-full">
          {/* Left side: Doctor's image */}
          <div className="w-full   sm:w-[35%] xl:w-[35%]  h-80 xl:h-96 xl flex mb-3 rounded-lg sm:mb-0 items-start bg-blue-300">
            <img className='w-full h-full rounded-lg object-cover  ' src={doctor.image} alt={doctor.name} />
          </div>
          {/* Right side: Doctor's details */}
          <div className='flex-1 '>
            <p className="font-bold text-lg xl:text-xl">{doctor.name}</p>
            <div className="flex items-center text-center justify-start gap-2 mt-1">
              <img className="w-5 h-5 xl:w-7 xl:h-7 " src={assets.expireince} alt="Experience Icon" />
              <p className='text-sm xl:text-sm'>{doctor.expireince} years of experience</p>
            </div>
            <p className="mt-0.5 xl:mt-3 text-sm border rounded-lg px-2 w-32"> {doctor.speciality}</p>
            <p className="mt-0.5 xl:mt-3 text-lg font-medium">About:</p> <p className='text-sm xl:text-lg  text-wrap'> {doctor.about}</p>
            <p className="mt-0.5 xl:mt-3 font-medium">Appointment Fee: <span className='font-normal'>${doctor.fees}</span> </p>
            
            <BookingAppointment docId={docId}/>
          </div>
        </div>
      </div>
      {/* Related doctors */}
      <div className="w-full flex flex-col items-center mt-3 sm:pl-32">
        <p className="text-center font-medium text-lg mb-1">Related Doctors</p>
        <div className="w-full max-w-7xl">
        <RelatedDoctors docId={docId} speciality={doctor.speciality} />
      </div>
    </div>
    </div>
  );
};

export default Appointment;


