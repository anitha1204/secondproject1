// import React, { useState } from 'react';
// import img1 from '../assets/brochure_v3-05.png'; 
// import img2 from '../assets/brochure_v3-06.png';
// import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi";

// const HousePlan = () => {
//   const images = [img1, img2]; // Add more images as needed
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <section className=" px-4">
//       <h1 className="text-2xl md:text-3xl text-gray-500 font-bold text-center mb-4">3D House Plan</h1>
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between mt-8">
        
//         {/* Left Side */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left lg:mb-0 px-4">
//           <div className="flex flex-col items-center lg:items-start">
//             <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-4 text-gray-900">Key Plan</h3>
            
//             <p className="mb-4 text-base sm:text-lg md:text-xl lg:text-[20px]">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//             </p>
//             <button className="px-6 py-2 bg-gray-900 text-white rounded-lg mb-4">Enquiry Now</button>
//             <div className="flex flex-row justify-center lg:justify-start space-x-4">
//               <HiOutlineArrowCircleLeft size={40} className="text-gray-300 cursor-pointer" onClick={handlePrev} />
//               <HiOutlineArrowCircleRight size={40} className="text-gray-900 cursor-pointer" onClick={handleNext} />
//             </div>
//           </div>
//         </div>
       
//         {/* Right Side */}
//         <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center relative mt-8 lg:mt-0">
//           <div className="w-full lg:hidden flex justify-center">
//             <img 
//               src={images[currentIndex]} 
//               alt={`Image ${currentIndex + 1}`} 
//               className="rounded shadow-lg max-w-full h-auto lg:w-[300px] lg:h-[300px] cursor-pointer" 
//               onClick={handleNext} 
//             />
//           </div>
//           <div className="hidden lg:flex lg:flex-row lg:space-x-4">
//            <img src={img1} alt="" className="rounded shadow-lg w-[350px] h-[400px]" />
//              <img src={img2} alt="" className="rounded shadow-lg w-[150px] h-[210px] lg:mt-20" />
//            </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HousePlan;


import React, { useState } from 'react';
import img1 from '../assets/brochure_v3-05.png'; 
import img2 from '../assets/brochure_v3-06.png';
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi";

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
    <section className="px-4">
      <h1 className="text-2xl md:text-3xl text-gray-500 font-bold text-center mb-4">3D House Plan</h1>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between mt-8">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:mb-0 px-4">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-4 text-gray-900">Key Plan</h3>
            
            <p className="mb-4 text-base sm:text-lg md:text-xl lg:text-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button className="px-6 py-2 bg-gray-900 text-white rounded-lg mb-4">Enquiry Now</button>
            <div className="flex flex-row justify-center lg:justify-start space-x-4">
              <HiOutlineArrowCircleLeft size={40} className="text-gray-300 cursor-pointer" onClick={handlePrev} />
              <HiOutlineArrowCircleRight size={40} className="text-gray-900 cursor-pointer" onClick={handleNext} />
            </div>
          </div>
        </div>
       
        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center relative mt-8 lg:mt-0">
          <div className="w-full flex justify-center lg:hidden">
            <div className="relative">
              <img 
                src={images[currentIndex]} 
                alt={`Image ${currentIndex + 1}`} 
                className="rounded shadow-lg max-w-full h-auto cursor-pointer transition-transform duration-300 ease-in-out transform" 
                style={{ width: '300px', height: '300px' }} 
                onClick={handleNext} 
              />
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-row lg:space-x-4">
            <img src={img1} alt="Image 1" className="rounded shadow-lg w-[350px] h-[400px]" />
            <img src={img2} alt="Image 2" className="rounded shadow-lg w-[150px] h-[210px] lg:mt-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HousePlan;
