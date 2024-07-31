

import React, { useRef, useState } from "react";
import logo from "../assets/Logo 1.png";
import img from "../assets/Group 38.png";
import card1 from "../assets/Rectangle 4.png";
import card2 from "../assets/Rectangle 5.png";
import card3 from "../assets/Rectangle 6.png";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import Amenities from './Amenities';
import Uniqueness from './Uniqueness';
import Specification from './Specification'
import ImageGallery from './ImageGallery';
import HousePlan from './HousePlan';
import Hero from './Hero';
import Contact from './Contact';import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import bankLogos from '../assets/Bank Logo-01 2.png'; 
import companyLogo from '../assets/Logo 1.png'; 
import { Link } from "react-router-dom";

const Home = () => {
  const roomsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    card1,
    card2,
    card3,
    card2,
    card3,
    card1,
    card3,
    card1,
    card2,
  ];

  const imagesPerPage = 3;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const currentImages = images.slice(
    currentIndex * imagesPerPage,
    currentIndex * imagesPerPage + imagesPerPage
  );

  return (
    <>
    <div className="overflow">
      <section className="w-full h-screen relative">
        <img src={img} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
          <div className="absolute top-14 left-8 md:left-24 md:mr-auto">
            <img src={logo} alt="Logo" className="w-28 md:w-44" />
          </div>
          <button className="absolute top-14 right-10 bg-green-600 text-white py-2 px-4 rounded-lg">
            Quick Chat
          </button>
          <div className="mt-16 text-center md:text-left md:mr-[800px]">
            <p className="text-3xl md:text-5xl">We're Building Your Future..</p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-5 md:justify-start md:ml-28 md:mr-auto">
            <button
              className="px-9 py-2 text-sm md:text-lg bg-black bg-opacity-60 rounded hover:bg-opacity-80"
              onClick={() => {
                roomsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Book Now
            </button>
            <Link to="tel:+9123456789">
              <button className="px-7 py-2 text-sm md:text-lg bg-black bg-opacity-60 rounded hover:bg-opacity-80">
                Contact Now
              </button>
            </Link>
          </div>
        </div>
        {/* Desktop view */}
        <div className="hidden md:flex absolute w-full translate-y-[-150px] justify-around px-4">
          <div className="flex flex-col md:flex-row md:items-center w-full md:w-1/2 text-center md:text-left px-4 md:px-10 lg:px-20">
            <div className="flex flex-col md:ml-4 mb-60">
              <div className="text-left mb-28">
                <p className="text-2xl md:text-3xl text-white mb-2">
                  Select your future
                </p>
                <p className="text-white mb-1">
                  It is a long established fact that a reader will be distracted
                </p>
                <p className="text-white">
                  the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="flex flex-row justify-center md:justify-start space-x-4 md:mb-0 mr-[60px]">
                <HiOutlineArrowCircleLeft
                  size={40}
                  className="cursor-pointer text-gray-300"
                  onClick={handlePrev}
                />
                <HiOutlineArrowCircleRight
                  size={40}
                  className="text-gray-900 cursor-pointer"
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="flex gap-6 overflow-hidden">
              {currentImages.map((image, index) => (
                <div className="relative w-64 h-96 mb-40" key={index}>
                  
                  <img
                    src={image}
                    alt={`Card ${index}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile view */}
        <div className="md:hidden w-full">
          <div className="text-center mt-8">
            <p className="text-2xl text-black">Select your future</p>
            <p className="text-black">
              It is a long established fact that a reader will be distracted by
            </p>
          </div>
          <div className="relative flex items-center">
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
            >
              &#10094;
            </button>
            <div className="flex overflow-hidden w-full mt-6 ml-14">
              <img
                src={images[currentIndex]}
                alt={`Card ${currentIndex}`}
                className="w-64 h-80 object-cover rounded-2xl"
              />
            </div>
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>
    </div>
    <Amenities/>
    <Uniqueness/>
    <Specification />
    <ImageGallery />
    <HousePlan />
    <Hero />
    <Contact />

 {/* Footer */}
    <div className="bg-gray-800 text-white py-10 px-6 mt-10" ref={roomsRef}>
    <div className="container mx-auto text-center">
      <div className="mb-4">
        <img src={bankLogos} alt="Bank Logos" className="mx-auto" />
      </div>
      <div className="mb-6">
      <Link to='/' onClick={()=> window.scrollTo(0,0)}>
        <img src={companyLogo} alt="Company Logo" className="mx-auto h-30 w-40 cursor-pointer" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
        <div className="flex items-center">
          <FaPhoneAlt className="text-yellow-500 mr-2" />
          <span>7200 125 111</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-yellow-500 mr-2" />
          <span>1C/609, 1st floor, Lakshmi Bhavan, Anna Salai, Chennai 006.</span>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Home;
