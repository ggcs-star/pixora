import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Mission from "./Components/Mission";
import AboutSection from "./Components/About";
import SuperpowerSection from "./Components/SuperPower";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import CourseDetails from "./Components/CourseDetails";
import DesignVideoEditingDetails from "./Components/DesignVideoEditingDetails";
import AdvanceProgramDMCreation from "./Components/Advance_Program_DM_Creation";
import About2 from "./Components/About2";
import OurCourses from "./Components/OurCourses";
import Why_Choose_Us_2 from "./Components/Why_Choose_Us_2";
import Contact_Add from "./Components/Contact_Add";

function HomePage({ scrollRefs, handleViewCourse }) {
  const { homeRef, aboutRef, superpowerRef, whyChooseRef, ContactRef, scrollToSection } =
    scrollRefs;

  return (
    <div className="min-h-screen font-sans overflow-hidden">
      {/* Navbar with scrolling */}
      {/* <Navbar
        onNavClick={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          superpower: () => scrollToSection(superpowerRef),
          whyChoose: () => scrollToSection(whyChooseRef),
          Contact: () => scrollToSection(ContactRef),
        }}
      /> */}

      {/* Page sections */}
      <div ref={homeRef}>
        <Hero />
      </div>
 
      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <div>
        <Mission />
      </div>

      

      <div ref={superpowerRef}>
        {/* Pass router navigation handler */}
        <SuperpowerSection onViewCourse={handleViewCourse} />
      </div>

      {/* <div ref={whyChooseRef}>
        <WhyChooseUs />
      </div> */}

      <div ref={ContactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const superpowerRef = useRef(null);
  const whyChooseRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollRefs = {
    homeRef,
    aboutRef,
    superpowerRef,
    whyChooseRef,
    ContactRef,
    scrollToSection,
  };

  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <HomePage
              scrollRefs={scrollRefs}
              handleViewCourse={(slug) => (window.location.href = `/course/${slug}`)}
            />
          }
        />

        {/* Course details page */}
        <Route path="/course/:slug" element={<CourseDetails />} />
        <Route path="/about" element={<About2 />} />
        <Route path="/courses" element={<OurCourses />} />
        <Route path="/why-choose-us" element={<Why_Choose_Us_2 />} />
        <Route path="/contactadd" element={<Contact_Add />} />
        <Route path="/course/diploma-in-design-and-video-editing" element={<DesignVideoEditingDetails />} />
        <Route path="/course/advance-program-in-digital-media-creation" element={<AdvanceProgramDMCreation />} />
      </Routes>
    </Router>
  );
}

export default App;
