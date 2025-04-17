import React from 'react';

const Location = () => (
  <section className="flex flex-col sm:flex-row h-auto bg-[#faf9f7]">
    <div className="w-full sm:w-1/2 flex flex-col justify-center items-start px-6 sm:px-10 py-6">
      <h2 className="text-3xl sm:text-5xl mb-2" style={{ fontFamily: 'Allura' }}>Salon Beau.ti.ful Inc.</h2>
      <div className="font-baskerville text-base sm:text-lg">
        <h3 className="text-xl font-semibold mb-1">Location</h3>
        <p className="mb-1">#3 901 Centennial Blvd</p>
        <p className="mb-1">Warman, SK</p>
        <p className="mb-3">Canada</p>
        <h3 className="text-xl font-semibold mb-1">Hours</h3>
        <ul>
          <li>Mon-Fri: 9:00 AM - 6:00 PM</li>
          <li>Sat: 10:00 AM - 4:00 PM</li>
          <li>Sun: Closed</li>
        </ul>
      </div>
    </div>
    <div className="w-full sm:w-1/2 flex justify-center items-center px-2 py-6">
      <iframe
        title="Salon Beautiful Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1219.033354392218!2d-106.5812560706231!3d52.33293589999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53046745b5f56d19%3A0x20e014a778a9449e!2sSALON%20BEAU.TI.FUL%20inc.!5e0!3m2!1sen!2sca!4v1744831396954!5m2!1sen!2sca"
        width="100%"
        className="w-full h-[200px] sm:h-[380px] rounded"
        style={{ border: 0, borderRadius: '0.5rem' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default Location;