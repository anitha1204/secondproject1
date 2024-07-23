
import React from 'react';
import img from '../assets/Home 3.png';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:p-20">
      <div className="md:w-1/2 text-center md:text-left p-4 md:p-10 bg-blue-100 h-80 flex flex-col justify-center items-center md:items-start">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">We're Here to Help You</h2>
        <p className="mb-6">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <button className="bg-gray-900 text-white p-2 w-40 rounded mx-auto md:mx-0">Know more</button>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={img} alt="" className="w-full max-w-xs md:max-w-sm" />
      </div>
    </div>
  );
}

export default Hero;
