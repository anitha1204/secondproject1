

import React, { useState } from 'react';
import logo from "../assets/Logo 1.png";
import img from "../assets/Group 38.png";
import card1 from "../assets/Rectangle 4.png";
import card2 from "../assets/Rectangle 5.png";
 import card3 from "../assets/Rectangle 6.png";

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [card1, card2, card3, card3, card2, card1];

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
        <div className='overflow'>
            <section className="w-full h-screen relative">
                <img src={img} alt="Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 ">
                    <div className="absolute top-8 left-8 md:left-auto md:mr-[1000px]">
                        <img src={logo} alt="Logo" className="w-28 md:w-44" />
                    </div>
                    <button className="absolute top-10 right-10 bg-green-600 text-white py-2 px-4 rounded-lg">
                        Quick Chat
                    </button>
                    <div className="mt-16 text-center md:text-left md:mr-[600px] md:overflow-x-hidden md:overflow-y-hidden ">
                        <p className="text-3xl md:text-5xl">We're Building Your Future..</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 mt-5 md:mr-[850px]">
                        <button className="px-9 py-2 text-sm md:text-lg bg-black bg-opacity-60 rounded hover:bg-opacity-80">
                            Book Now
                        </button>
                        <button className="px-5 py-2 text-sm md:text-lg bg-black bg-opacity-60 rounded hover:bg-opacity-80">
                            Contact Now
                        </button>
                    </div>
                </div>
                {/* Desktop view */}
                <div className="hidden md:flex absolute w-full translate-y-[-150px] justify-around px-4">
                    <div className="text-left md:mr-[150px] ml-40 ">
                        <p className="text-2xl md:text-3xl text-white">Select your future</p>
                        <p className="text-white">It is a long established fact that a reader will be distracted by </p>
                        <p className="text-white">the readable a page when looking at its layout..</p>
                        
                    </div>
                    <div className="relative flex items-center">
                        <div className='relative translate-x-[-500px] translate-y-[50px] flex gap-4'>
                            <button
                                onClick={handlePrev}
                                className="text-white bg-black bg-opacity-50 px-2 rounded-full"
                            >
                                &#10094;
                            </button>
                            <button
                                onClick={handleNext}
                                className="text-white bg-black bg-opacity-50 px-2 rounded-full"
                            >
                                &#10095;
                            </button>
                        </div>
                        <div className="flex gap-4 overflow-hidden">
                            {currentImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Card ${index}`}
                                    className="w-72 h-96 object-cover rounded-2xl "
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* Mobile view */}
                <div className="md:hidden w-full ">
                    <div className="text-center mb-4">
                        <p className="text-2xl text-black">Select your future</p>
                        <p className="text-black">It is a long established fact that a reader will be distracted by</p>
                    </div>
                    <div className="relative flex items-center">
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 text-white bg-black bg-opacity-50 p-2 rounded-full"
                        >
                            &#10094;
                        </button>
                        <div className="flex overflow-hidden w-full justify-center">
                            <img
                                key={currentIndex}
                                src={images[currentIndex]}
                                alt={`Card ${currentIndex}`}
                                className="w-full h-64 object-cover rounded-2xl "
                            />
                        </div>
                        <button
                            onClick={handleNext}
                            className="absolute right-0 text-white bg-black bg-opacity-50 p-2 rounded-full"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
