

import React, { useState } from 'react';
import img from '../assets/Asset 22.png';
import img1 from '../assets/Asset 23.png';
import img2 from '../assets/Asset 25.png';
import img3 from '../assets/Asset 28.png';
import img4 from '../assets/Asset 29.png';
import img5 from '../assets/Asset 33.png';
import img6 from '../assets/Asset 26.png';
import img7 from '../assets/Asset 32.png';
import { HiOutlineArrowCircleDown, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const image = [
  { src: img, label: 'Gated Community' },
  { src: img1, label: '131 Apts, Stilt + 4 Floors', subLabel: 'ASEIS MIC Structure' },
  { src: img2, label: 'CCTV' },
  { src: img3, label: '3000 sq.ft atrium - Open lawn' },
  { src: img4, label: 'Visitors Car Park' },
  { src: img5, label: '3 Automated Lifts', subLabel: 'For A Block' },
  { src: img6, label: 'Designed by Professional Architects' },
  { src: img7, label: '24hrs Security' }
];

const Amenities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleViewMoreClick = () => {
    setIsCarouselVisible(true);
  };

  return (
    <>
      <section className="mt-[365px] md:mt-40 lg:mt-60 px-2">
        <div className="text-center">
          <h1 className=' text-2xl md:text-3xl text-gray-500 font-bold'>Our Amenities</h1>
          <div className="flex flex-col items-center sm:hidden mt-4">
            <div className="flex flex-col items-center mb-4">
              <img src={img} alt="Gated Community" className="w-10 h-10 mb-2" />
              <p>Gated Community</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={img1} alt="131 Apts, Stilt + 4 Floors" className="w-10 h-10 mb-2" />
              <p>131 Apts, Stilt + 4 Floors</p>
              <p>ASEIS MIC Structure</p>
            </div>
          </div>
          <div className="hidden sm:flex flex-wrap justify-center gap-8 mt-10">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                <img src={image.src} alt={image.label} className=" mb-2" />
                <p>{image.label}</p>
                {image.subLabel && <p>{image.subLabel}</p>}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-6 sm:hidden">
            <HiOutlineArrowCircleDown className='text-3xl text-gray-400' onClick={handleViewMoreClick} />
          </div>
          <p className="text-center mt-2 sm:hidden">View More</p>
        </div>

        {/* Carousel for small screens */}
        {isCarouselVisible && (
          <div className="sm:hidden flex flex-col items-center mt-10">
            <div className="flex justify-between items-center w-full px-4">
              <HiChevronLeft className="text-2xl cursor-pointer" onClick={handlePrev} />
              <div className="flex flex-col items-center">
                <img src={images[currentIndex].src} alt={images[currentIndex].label} className="w-10 h-10 mb-2" />
                <p>{images[currentIndex].label}</p>
                {images[currentIndex].subLabel && <p>{images[currentIndex].subLabel}</p>}
              </div>
              <HiChevronRight className="text-2xl cursor-pointer" onClick={handleNext} />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Amenities;
