import { Userscomment } from "@/assets/assets";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comment = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col justify-center w-full">
      <div>
        <p className="text-sm text-gray-700 text-center">
          What Our Patients Say About Our Top Doctors
        </p>
        <p className="text-3xl text-blue-500 font-semibold text-center">
          Trusted by Thousands
        </p>
        <p className="w-full text-xs text-gray-500 text-center">
          Discover how our leading doctors provide expert, compassionate care
          tailored to every patient.
        </p>
      </div>
      <div className="grid grid-cols-4   gap-4 mt-2 justify-center"></div>
      <div className="mx-20 h-[230px] relative ">
        <Slider {...settings}>
          {Userscomment.map((data, index) => (
            <div
              key={index}
              className="flex flex-col relative bg-white px-4 py-3 items-center gap-4 h-[200px]  p-6 "
            >
              <div className="bg-blue-50 px-3 py-5 h-[200px]  rounded-lg shadow-lg">
                <div>
                  <img
                    src={data.image}
                    className="w-16  h-16 rounded-full object-cover"
                    alt={data.name}
                  />
                </div>
                <div className=" z-10">
                  <p className="text-sm z-0 text-gray-500 ">{data.comment}</p>
                  <h1 className="text-xl  font-bold text-black/00 ">
                    {data.name}
                  </h1>
                </div>
                <p className="-top-6 font-serif right-10 z-100 text-gray-200 text-9xl absolute">,,</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Comment;
