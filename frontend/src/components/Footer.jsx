import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import bankLogos from '../assets/Bank Logo-01 2.png'; 
import companyLogo from '../assets/Logo 1.png'; 

const FooterSection = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <img src={bankLogos} alt="Bank Logos" className="mx-auto  " />
        </div>
        <div className="mb-6">
          <img src={companyLogo} alt="Company Logo" className="mx-auto h-30 w-40" />
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
  );
};

export default FooterSection;
