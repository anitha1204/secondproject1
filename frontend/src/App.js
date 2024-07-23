import React from 'react';
import Home from './components/Home'
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Uniqueness from './components/Uniqueness';
import Specification from './components/Specification';
import ImageGallery from './components/ImageGallery';
import HousePlan from './components/HousePlan';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Home/>
      <Amenities />
      <Uniqueness />
      <Specification />
      <ImageGallery />
      <HousePlan />
      <Hero />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;