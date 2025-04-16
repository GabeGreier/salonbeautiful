import React from 'react';
import salonImage from '../salon.jpg';

const Hero = () => (
  <section
    className="w-full flex flex-col justify-between items-center h-[70vh] sm:h-screen bg-[#faf9f7] pt-20"
    aria-label="Hero Section"
  >
    <div
      className="w-full h-full flex-grow bg-cover bg-center"
      style={{ backgroundImage: `url(${salonImage})` }}
      role="img"
      aria-label="Salon Beautiful Interior"
    />
    <div className="w-full flex items-center justify-end h-1/5 bg-[#faf9f7]">
      <p className="text-2xl sm:text-4xl mr-6 sm:mr-20">
        BE DIFFERENT. BE YOUR OWN. BE YOU.
      </p>
    </div>
  </section>
);

export default Hero;
