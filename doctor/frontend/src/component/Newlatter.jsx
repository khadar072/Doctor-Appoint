import React from "react";

const Newlatter = () => {
  return (
    <div className="w-full my-10 flex justify-center items-center">
      <div className=" w-full sm:w-2/3 bg-blue-600 rounded-lg px-2 sm:px-6 py-2 sm:py-4 gap-1">
        <p className="text-xl sm:text-3xl text-center font-semibold text-white">Subscripe Our NewLetter</p>
        <div className="flex justify-center items-center w-full pl-2 sm:pl-10 relative py-3 sm:py-4">
          <input className="w-full pl-4 py-3 rounded-lg " type="text" placeholder="Example@gmail.com" />
          <button className="absolute bg-black text-white text-center  px-5 py-2 right-1">subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newlatter;
