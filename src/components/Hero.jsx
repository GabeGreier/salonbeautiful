import React from 'react';
import salonImage from '../assets/salon.webp';

const Hero = () => (
  <section
    className="w-full flex flex-col justify-between items-center h-screen bg-[#faf9f7] pt-[18vh] overflow-x-hidden"
    aria-label="Hero Section"
  >
    <div
      className="w-full flex-grow bg-cover bg-center"
      style={{ backgroundImage: `url(${salonImage})` }}
      role="img"
      aria-label="Salon Beautiful Interior"
    />
    <div className="w-full flex items-center justify-end h-[18vh] bg-[#faf9f7]">
      <p className="text-lg sm:text-2xl md:text-4xl mr-2 sm:mr-6 md:mr-20 text-right w-full pr-2 sm:pr-0">
        BE DIFFERENT. BE YOUR OWN. BE YOU.
      </p>
    </div>
  </section>
);

export default Hero;
