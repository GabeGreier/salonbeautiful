import React from 'react';
import aboutImage from '../about.webp';

const About = () => (
  <section className="flex flex-col md:flex-row items-center justify-center h-auto min-h-[60vh] py-12 bg-[#faf9f7]">
    {/* Left: Text */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 sm:px-8 md:px-12 mb-8 md:mb-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-allura mb-4 text-center md:text-left">About Salon Beau.ti.ful</h2>
      <p className="font-baskerville text-base sm:text-lg leading-relaxed text-center md:text-left">
        Welcome to Salon Beau.ti.ful Inc., where individuality is celebrated and beauty is redefined. 
        Our talented team is dedicated to providing exceptional service in a warm, welcoming environment. 
        Whether you’re looking for a fresh cut, vibrant color, or a relaxing treatment, we’re here to help you express your unique style. 
        Experience the difference at Salon Beau.ti.ful—where you can truly be you.
      </p>
    </div>
    {/* Right: Image */}
    <div className="w-full md:w-1/2 flex justify-center items-center px-4 sm:px-8">
      <img
        src={aboutImage}
        alt="Inside Salon Beau.ti.ful"
        className="rounded-lg shadow-lg max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-full max-w-xs sm:max-w-md md:max-w-lg object-cover"
        style={{ objectPosition: 'center' }}
      />
    </div>
  </section>
);

export default About;
