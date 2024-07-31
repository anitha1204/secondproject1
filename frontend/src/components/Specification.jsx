
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
    { title: 'Flooring', content: 'Vitrified tile flooring in living, dining, bedrooms, itchen and ceramic tile flooring in balconies. Stilt to have Grano flooring.' },
    { title: 'Walls', content: 'Interior walls: Plastered and painted with emulsion paint.'},
    { title: 'Kitchen', content: 'Granite cooking paltform with single bowl SS sink with drain board on only one side of the kitchen area. Ceramic tile dadoing upto 2 fet height.' },
    { title: 'Toilets', content: 'Flooring with anti-skid ceramic tiles and for walls coloured glazed tiles from the floor to a height of 7 feet.' },
    { title: 'Ceilings', content: 'Putty finish painting. Open loft in all master bed rooms.' },
    { title: 'Fixtures & Fittings', content: 'Main door:Teak, wood frame,HDF moulded design door shutter with sufficient thickness to house all hardware. High quality hinges, tower bolts, lock and security eye. Other Doors: Hard wood frame HDF moulded design door shutter with good quality hinges, tower bolts, locks and handles. Internal surface of toilet doors painted.' },
    { title: 'Balcony/Utility Door/Windows/Ventilators', content: 'UPVC framed glazed sliding door with glass shutter.' },
    { title: 'Sanitary Fittings', content: 'All white coloured WC/wash basin of Parryware (or) equivalent make, CP fitting of Parryware (or) equivalent make.' },
    { title: 'Electrical', content: 'Best quality cables/wiring through PVC concealed in walls and ceiling. Light points. Fan/exhaust points, power points, call bell point, telephone points, TV points and one AC point in Master bedroom. The electrical room will have panel boards, meters, etc., as per TNEB norms, along with outlet for internet.' },
    { title: 'TV/Telephone points', content: 'One outlet for TV & Telephone in the living area and in the master bedroom. Provision for cable TV connection.' },
    { title: 'Elevators', content: '3 Automatic Lift for A block of reputed brand.' },
    { title: 'Power Backup', content: 'Backup for common area lighting, pumps & lifts.' }
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl md:text-3xl text-gray-500 font-bold text-center mb-6">Specification</h1>
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
