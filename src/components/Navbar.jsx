import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsShrunk(window.scrollY > window.innerHeight * 0.2);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 bg-[#faf9f7] ${
        isShrunk ? 'h-16 shadow-lg' : 'h-[18vh]'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 h-full">
        {/* Title scrolls to top */}
        <button
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
          className="bg-transparent border-none p-0 m-0 cursor-pointer focus:outline-none"
          aria-label="Scroll to top"
          style={{ fontFamily: 'Allura' }}
        >
          <h1
            className={`transition-all duration-300 whitespace-nowrap font-allura ${
              isShrunk ? 'text-3xl sm:text-4xl' : 'text-5xl sm:text-7xl'
            }`}
            aria-label="Salon Beautiful Logo"
          >
            Salon Beau.ti.ful Inc.
          </h1>
        </button>
        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden text-3xl focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? '✕' : '☰'}</span>
        </button>
        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center space-x-6 sm:space-x-12 text-lg sm:text-2xl font-baskerville">
          <li>
            <a
              href="https://insightdns.com/$/Start/?ID=8602BD467A8FDBAF9F448A4645CC23BE"
              className="hover:underline"
              aria-label="Book an appointment"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book
            </a>
          </li>
          <li>
            <Link
              to="about"
              smooth
              duration={500}
              offset={-window.innerHeight / 4}
              className="hover:underline"
              aria-label="Learn about us"
            >
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth className="hover:underline" aria-label="Contact us">Contact</Link>
          </li>
          {/* Social Icons */}
          <li>
            <a href="https://www.instagram.com/salonbeautifulinc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:opacity-80 transition duration-300" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/salonbeautifulinc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:opacity-80 transition duration-300" />
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col bg-[#faf9f7] shadow-lg absolute w-full left-0 top-full font-baskerville text-lg">
          <li>
            <a
              href="https://insightdns.com/$/Start/?ID=8602BD467A8FDBAF9F448A4645CC23BE"
              className="block px-6 py-4 border-b hover:underline"
              aria-label="Book an appointment"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
            >
              Book
            </a>
          </li>
          <li>
            <Link to="team" smooth className="block px-6 py-4 border-b hover:underline" aria-label="Meet our team" onClick={handleNavClick}>Team</Link>
          </li>
          <li>
            <Link
              to="about"
              smooth
              duration={500}
              offset={-window.innerHeight / 4}
              className="block px-6 py-4 border-b hover:underline"
              aria-label="Learn about us"
              onClick={handleNavClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth className="block px-6 py-4 border-b hover:underline" aria-label="Contact us" onClick={handleNavClick}>Contact</Link>
          </li>
          {/* Social Icons */}
          <li>
            <a href="https://www.instagram.com/salonbeautifulinc" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="block px-6 py-4 border-b">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:opacity-80 transition duration-300" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/salonbeautifulinc" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="block px-6 py-4">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:opacity-80 transition duration-300" />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;