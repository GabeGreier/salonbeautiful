import React, { useRef, useEffect } from 'react';
import salonImage from '../assets/salon.webp';

const phrases = [
  "BE DIFFERENT.",
  "BE YOUR OWN.",
  "BE YOU.",
];

const Hero = () => {
  const phraseRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      phraseRefs.current.forEach((el, i) => {
        if (el) {
          // Increase the delay between each phrase
          const trigger = 60 + i * 180; // was i * 80, now i * 180 for more delay
          const progress = Math.max(0, Math.min(1, (scrollY - trigger) / 40));
          el.style.transform = `translateY(${-progress * 120}px)`;
          el.style.opacity = `${1 - progress}`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative w-full flex flex-col justify-between items-center h-screen bg-[#faf9f7] pt-[18vh] overflow-x-hidden"
      aria-label="Hero Section"
    >
      <div
        className="w-full flex-grow bg-cover bg-center relative z-10"
        style={{ backgroundImage: `url(${salonImage})` }}
        role="img"
        aria-label="Salon Beautiful Interior"
      />
      <div className="w-full flex items-center justify-center gap-4 h-[18vh] bg-[#faf9f7] relative z-10 px-4 sm:px-12 overflow-hidden">
        {phrases.map((text, i) => (
          <span
            key={text}
            ref={el => (phraseRefs.current[i] = el)}
            className="text-lg sm:text-2xl md:text-4xl whitespace-nowrap transition-transform duration-300"
            style={{ transition: 'transform 0.3s, opacity 0.3s' }}
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
