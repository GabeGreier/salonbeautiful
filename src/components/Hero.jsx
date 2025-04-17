import React from 'react';
import salonImage from '../salon.webp';

const Hero = () => (
  <section
    className="w-full flex flex-col justify-between items-center h-screen bg-[#faf9f7] pt-[18vh]"
    aria-label="Hero Section"
  >
    <div
      className="w-full flex-grow bg-cover bg-center"
      style={{ backgroundImage: `url(${salonImage})` }}
      role="img"
      aria-label="Salon Beautiful Interior"
    />
    <div className="w-full flex items-center justify-end h-[18vh] bg-[#faf9f7]">
      <p className="text-2xl sm:text-4xl mr-6 sm:mr-20">
        BE DIFFERENT. BE YOUR OWN. BE YOU.
      </p>
    </div>
  </section>
);

export default Hero;
