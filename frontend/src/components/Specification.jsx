

import React, { useState } from 'react';
import { HiOutlineArrowCircleDown, HiOutlineArrowCircleUp } from "react-icons/hi";
import img from '../assets/Rectangle 4.png'; 

const Specification = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const specifications = [
    { title: 'Structure', content: 'RCC Framed structure designed for a seismic consideration of zone stipulated by IS Code.' },
    { title: 'Flooring' },
    { title: 'Walls' },
    { title: 'Kitchen' },
    { title: 'Toilets' },
    { title: 'Ceilings' },
    { title: 'Fixtures & Fittings' },
    { title: 'Balcony/Utility Door/ Windows/Ventilators' },
    { title: 'Sanitary Fittings' },
    { title: 'Electrical' },
    { title: 'TV/Telephone points' },
    { title: 'Elevators' },
    { title: 'Power Backup' }
  ];

  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-2xl md:text-3xl text-gray-500 font-bold text-center mb-6">Our Amenities</h1>
      <section className="flex flex-col lg:flex-row items-center justify-center bg-blue-100 p-2 rounded-lg w-full max-w-screen-lg mx-auto mt-2">
        <div className="lg:w-1/2 flex flex-col items-center mb-6 lg:mb-0">
          <img src={img} alt="Building" className="rounded-lg w-full max-w-md  lg:mb-0 lg:h-auto h-[300px]" />
          <button className="bg-gray-900 text-white py-2 px-4 rounded ">Enquiry Now</button>
        </div>
        <div className="lg:w-1/2 w-full">
          {specifications.map((spec, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer border-b border-gray-300 pb-2"
                onClick={() => toggleSection(index)}
              >
                <h2 className="text-lg font-semibold">{spec.title}</h2>
                <div className="flex items-center">
                  {openSection === index ? (
                    <HiOutlineArrowCircleUp className="text-xl ml-2" />
                  ) : (
                    <HiOutlineArrowCircleDown className="text-xl ml-2" />
                  )}
                </div>
              </div>
              {openSection === index && spec.content && (
                <p className="mt-2 text-gray-700">{spec.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Specification;
