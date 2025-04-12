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
    <div className="flex flex-col pl-0 md:pl-32 justify-center w-full">
      <div className="mb-8">
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
      <div className="grid grid-cols-4    gap-4 mt-2 justify-center"></div>
      <div className="mx-20 h-[240px] mb-24 relative ">
        <Slider {...settings}>
          {Userscomment.map((data, index) => (
            <div class="flex flex-wrap items-center  justify-center gap-4">
            <div class="flex flex-col items-center bg-white px-3 py-8 rounded-lg border border-gray-300/80 max-w-[272px] text-sm text-center text-gray-500">
                <div class="relative mb-4">
                    <img class="h-16 w-16 rounded-full" src={data.image} alt="userImage1"/>
                    <svg class="absolute top-0 -right-2" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10.5" cy="10.5" r="8.5" fill="#2563EB"/>
                        <path d="m11.584 13.872 1.752-3.288 1.104-.288a2.7 2.7 0 0 1-.432.576.76.76 0 0 1-.552.24q-.672 0-1.248-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.168.912-.144.504-.576 1.296l-1.92 3.552zm-5.4 0 1.752-3.288 1.08-.288a2.2 2.2 0 0 1-.408.576.76.76 0 0 1-.552.24q-.696 0-1.272-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.144.912-.144.504-.576 1.296L7.96 14.832z" fill="#fff"/>
                    </svg>
                </div>
                <p>“{data.comment}”</p>
                <p class="text-lg  font-medium text-blue-600 mt-5">{data.name}</p>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Comment;
