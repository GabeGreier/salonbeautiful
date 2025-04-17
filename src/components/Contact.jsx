import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <footer className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-6 bg-[#eeede9] font-baskerville" aria-label="Contact and Footer">
    <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0 w-full sm:w-auto">
      <p className="text-base sm:text-lg mb-1 text-center sm:text-left">Phone: (306) 955-2244</p>
      <p className="text-base sm:text-lg mb-1 text-center sm:text-left">Email: salonbeautiful16@gmail.com</p>
    </div>
    <div className="flex flex-col items-center sm:items-end w-full sm:w-auto">
      <div className="flex flex-row space-x-4 mb-2">
        <a href="https://www.instagram.com/salonbeautifulinc/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:opacity-80 transition duration-300" />
        </a>
        <a href="https://www.facebook.com/salonbeautifulinc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:opacity-80 transition duration-300" />
        </a>
      </div>
      <p className="text-base sm:text-lg text-center sm:text-right">© 2025 Salon Beau.ti.ful Inc. All rights reserved.</p>
    </div>
  </footer>
);

export default Contact;
