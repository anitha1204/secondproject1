
import React from 'react';
import img from '../assets/Home 3.png';

const Hero = () => {
  return (
    <div className="w-full bg-blue-100 mt-[50px] flex items-center justify-center py-10 px-4 md:px-10 lg:px-20 lg:h-80">
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start mb-8 md:mb-0 md:mr-10 ml-3 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">We're Here to Help You</h2>
          <p className="mb-6 text-base md:text-lg lg:text-xl">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="bg-gray-900 text-white p-2 w-40 rounded mx-auto md:mx-0">Know more</button>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={img} alt="Hero" className="w-full max-w-lg lg:h-80 object-contain lg:mr-[-130px]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
