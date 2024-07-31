
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
    { title: 'Flooring', content: '' },
    { title: 'Walls', content: '' },
    { title: 'Kitchen', content: '' },
    { title: 'Toilets', content: '' },
    { title: 'Ceilings', content: '' },
    { title: 'Fixtures & Fittings', content: '' },
    { title: 'Balcony/Utility Door/Windows/Ventilators', content: '' },
    { title: 'Sanitary Fittings', content: '' },
    { title: 'Electrical', content: '' },
    { title: 'TV/Telephone points', content: '' },
    { title: 'Elevators', content: '' },
    { title: 'Power Backup', content: '' }
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl md:text-3xl text-gray-500 font-bold text-center mb-6">Our Amenities</h1>
      <section className="flex flex-col lg:flex-row items-center justify-center bg-blue-100 rounded-lg w-full max-w-6xl mx-auto mt-10 p-4 lg:p-8 lg:ml-60">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <img src={img} alt="Building" className="rounded-lg w-full max-w-xs lg:max-w-sm lg:h-[390px] h-[300px] object-cover lg:ml-[-170px] " />
          <button className="bg-gray-900 text-white py-2 px-4 rounded mt-4 lg:mt-6">Enquiry Now</button>
        </div>
        {/* Right Side */}
        <div className="w-full mt-6 lg:mt-0 lg:w-[1300px]">
          {specifications.map((spec, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer border-b border-gray-300 pb-4"
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
