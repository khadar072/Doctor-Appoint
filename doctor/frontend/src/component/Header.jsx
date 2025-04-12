import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    // <div className="h-[70vh] xl:h-[74vh] w-full bg-cover border mt-6 bg-center relative overflow-hidden">
    //   {/* Background Design */}
    //   <div className="h-full w-full relative">
    //     {/* Rotated background box - Top Right */}
    //     <div
    //       className="absolute rounded-3xl rotate-45 bg-blue-500 dark:bg-gray-500 
    //                     w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] xl:w-[800px] xl:h-[800px] 
    //                     -top-40 right-10 sm:-top-48 sm:right-20 md:-top-56 md:right-34 xl:-top-[360px] xl:right-48 "
    //     ></div>

    //     {/* Bottom Left bordered box */}
    //     <div
    //       className="absolute rounded-3xl border-[20px] sm:border-[25px] md:border-[20px] xl:border-[30px] border-blue-500 dark:border-gray-500 
    //                     w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] 
    //                     -bottom-16 -left-10 sm:-bottom-20 sm:-left-14 md:-bottom-52 md:-left-40 xl:-bottom-28 xl:-left-20 "
    //     ></div>


    //     {/* the main text and imge */}
    //     <div className="flex flex-col  md:flex-row flex-wrap xl:gap-24 px-6 md:px-8 lg:px-20 xl:px-20">
    //       {/* Left Part */}
    //       <div className="w-full md:w-1/2 pl-20 xl:pl-20 relative flex justify-center flex-col">
    //         <p className=" text-2xl xl:text-3xl font-bold">
    //           Book Your Doctor <br /> Appointment Online
    //         </p>
    //         <p className="text-xs xl:text-sm mt-3 dark:text-white text-blue-700">
    //           A healthcare Tomorrow Starts Today Schedule Your Appointment. Your
    //           wellness, Our Expertise. Set Up Your Appointment Today.
    //         </p>
    //         <a
    //           href="#speciality"
    //           className="border w-32 text-center bg-blue-500 text-white text-sm py-1 mt-2 rounded-lg"
    //         >
    //           Explore Now
    //         </a>
    //       </div>

    //       {/* Right Part */}
    //       <div className=" relative  flex">
    //         <img
    //           src={assets.banner7}
    //           alt="Doctor Image"
    //           className="w-full sm:w-[450px] pl-16 xl:pl-0 bottom-0 xl:w-[590px]  xl:pt-12 h-auto rounded-lg "
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   {/* Main Content */}
    // </div>
    <div className="flex flex-col md:flex-row flex-wrap relative px-6 md:px-14 lg:px-20 border-2 mt-6 overflow-hidden">
      <div
           className="absolute rounded-3xl rotate-45 bg-blue-500 dark:bg-gray-500 
                        w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[710px] md:h-[710px] 
                       -top-40 right-10 sm:-top-48 sm:right-20 md:-top-56 md:right-38 xl:-top-[360px] xl:right-48 "
       ></div>
         <div
          className="absolute rounded-3xl border-[20px] sm:border-[25px] md:border-[20px] xl:border-[30px] border-blue-500 dark:border-gray-500 
                        w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] 
                        -bottom-16 -left-10 sm:-bottom-20 sm:-left-14 md:-bottom-44 md:-left-40 "
         ></div>
      {/* left side */}
        <div className="md:w-1/2 flex z-10 flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight">Book Your Doctor <br /> Appointment Online</p>
            <div>
              <p>
              A healthcare Tomorrow Starts Today Schedule Your Appointment. Your  wellness, Our Expertise. Set Up Your Appointment Today.
              </p>
              
            </div>
            <a href="#speciality" className="px-8 py-2 text-blue-600 border-blue-600 border rounded-lg ">
              Explore Now
              </a>
        </div>
      {/* right side */}
      <div className="md:w-1/2 relative flex items-center justify-center ">
          <img src={assets.banner12} alt="" className="w-full md:absolute h-auto bottom-0 md:w-[500px] object-cover rounded-lg"/>
      </div>
    </div>
  );
};

export default Header;
