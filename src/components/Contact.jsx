import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Only import the icons you use
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <footer className="h-[20vh] flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 bg-[#faf9f7]" aria-label="Contact and Footer">
    <div className="flex flex-col items-start font-baskerville mb-4 sm:mb-0">
      <p className="text-base sm:text-lg mb-1">Phone: (306) 555-1234</p>
      <p className="text-base sm:text-lg mb-1">Email: info@salonbeautiful.com</p>
    </div>
    <div className="flex flex-col items-end font-baskerville">
      <div className="flex space-x-4 mb-2">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:opacity-80 transition duration-300" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:opacity-80 transition duration-300" />
        </a>
      </div>
      <p className="text-base sm:text-lg">© 2025 Salon Beau.ti.ful Inc. All rights reserved.</p>
    </div>
  </footer>
);

export default Contact;
