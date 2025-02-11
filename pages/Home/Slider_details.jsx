import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "./Images/img1.png";
import image2 from "./Images/img2.png";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const images = [image1, image2];
  const { t } = useTranslation();
  const prevSlide = () => {
    setDirection("left");
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    setDirection("right");
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(autoPlay);
    };
  }, [currentIndex]);

  return (
    <>
      <h1 className="text-center text-4xl py-3 font-bold">
        {t("explore_resume_services")}
      </h1>
      <div className="relative flex justify-center items-center w-full md:w-[100%] h-64 md:h-[600px] mx-auto">
        <FaArrowLeft
          className="absolute top-1/2 left-2 md:left-28 transform -translate-y-1/2 text-[##00b38d] cursor-pointer z-10"
          onClick={prevSlide}
        />
        <FaArrowRight
          className="absolute top-1/2 right-2 md:right-28 transform -translate-y-1/2 text-[##00b38d] cursor-pointer z-10"
          onClick={nextSlide}
        />
        <div className="slider-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${
                index === currentIndex ? "active" : ""
              } ${direction}`}
            >
              {/* <img src={image} alt={`Slide ${index}`} className="w-full h-full rounded-3xl object-cover" /> */}
              <Image
                src={image}
                alt={`slide ${index}`}
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 flex justify-center w-full">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
