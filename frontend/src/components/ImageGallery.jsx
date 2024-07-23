import React from 'react';
import img from '../assets/Rectangle 9.png';
import img1 from '../assets/Rectangle 10.png';
import img2 from '../assets/Rectangle 11.png';
import img3 from '../assets/Rectangle 12.png';
import img4 from '../assets/Rectangle 13.png';

const ImageGallery = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-500 font-bold">Actual Flat Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 sm:mx-0">
          <img src={img} alt="" className="rounded shadow-lg h-48 w-48 mx-auto hover:scale-110 transition-transform duration-300" />
          <img src={img1} alt="" className="rounded shadow-lg h-48 w-48 mx-auto hover:scale-110 transition-transform duration-300" />
          <img src={img2} alt="" className="rounded shadow-lg h-48 w-48 mx-auto hover:scale-110 transition-transform duration-300" />
          <img src={img3} alt="" className="rounded shadow-lg h-48 w-48 mx-auto hover:scale-110 transition-transform duration-300" />
          <img src={img4} alt="" className="rounded shadow-lg h-48 w-48 mx-auto hover:scale-110 transition-transform duration-300" />
        </div>
        <button className="px-4 py-2 text-xs md:px-9 md:py-2 md:text-lg bg-gray-400 bg-opacity-60 rounded hover:bg-opacity-80 mt-4  ">
          View Image
        </button>
      </div>
    </section>
  );
}

export default ImageGallery;
