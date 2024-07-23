


import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import img1 from '../assets/brochure_v3-05.png'; 
import img2 from '../assets/brochure_v3-06.png';


const HousePlan = () => {
  const images = [img1, img2]; // Add more images as needed
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="mt-2">
      <h1 className="text-2xl md:text-3xl text-gray-500 font-bold text-center ">3d House Plan</h1>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between ">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 px-4">
          
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Key plan</h3>
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-blue-700">Enquiry Now</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 relative">
          <div className="flex justify-center">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="rounded shadow-lg" />
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
            <button onClick={handlePrev} className="bg-white p-2 rounded-full shadow-md">
              <HiChevronLeft className="text-2xl" />
            </button>
            <button onClick={handleNext} className="bg-white p-2 rounded-full shadow-md">
              <HiChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HousePlan;
