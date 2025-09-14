import React from 'react';
import { useRef } from 'react';
import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Mission from './Components/Mission';
import AboutSection from './Components/About';
import SuperpowerSection from './Components/SuperPower';
import WhyChooseUs from './Components/WhyChooseUs';
import Contact  from './Components/Contact';
import Footer from './Components/Footer';

function App() {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    // const missionRef = useRef(null);
    const superpowerRef = useRef(null);
    const whyChooseRef = useRef(null);
    const ContactRef = useRef(null);

    
    const scrollToSection = (ref) => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return (

      <div className="min-h-screen font-sans  overflow-hidden">

            {/* Navbar Component */}
            <Navbar
                  onNavClick={{
                      home: () => scrollToSection(homeRef),
                      about: () => scrollToSection(aboutRef),
                      mission: () => scrollToSection(missionRef),
                      superpower: () => scrollToSection(superpowerRef),
                      whyChoose: () => scrollToSection(whyChooseRef),
                      Contact: () => scrollToSection(ContactRef),
                  }}
            />


            {/* Hero Component */}
            <div ref={homeRef}>
              <Hero />
            </div>


            {/* Mission Component */}
            <div>
              <Mission />
            </div>


            {/* About Us Component */}
            <div ref={aboutRef}>
              <AboutSection />
            </div>


            {/* SuperPower Component */}
            <div ref={superpowerRef}>
              <SuperpowerSection />
            </div>


            {/* Why_Choose_Us Component */}
            <div ref={whyChooseRef}>
              <WhyChooseUs />
            </div>


            {/* Contact Us Component */}
            <div ref={ContactRef}>
              <Contact />
            </div>


            {/* Footer Component */}
            <Footer />


      </div>
    );

}

export default App;

