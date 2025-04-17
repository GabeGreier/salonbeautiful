import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import Team from './components/Team';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';

const App = () => (
  <div className="bg-[#faf9f7] min-h-screen overflow-x-hidden"
       style={{ fontFamily: 'Libre Baskerville' }}>
    <Navbar />
    <main>
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="location">
        <Location />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  </div>
);

export default App;