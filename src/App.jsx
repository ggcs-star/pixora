// import React, { useRef, useState } from "react";
// import "./App.css";
// import Hero from "./Components/Hero";
// import Navbar from "./Components/Navbar";
// import Mission from "./Components/Mission";
// import AboutSection from "./Components/About";
// import SuperpowerSection from "./Components/SuperPower";
// import WhyChooseUs from "./Components/WhyChooseUs";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
// import CourseDetails from "./Components/CourseDetails"; 

// function App() {
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const superpowerRef = useRef(null);
//   const whyChooseRef = useRef(null);
//   const ContactRef = useRef(null);

//   // ✅ Track current page
//   const [currentPage, setCurrentPage] = useState("home");
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // ✅ When user clicks "View Course"
//   const handleViewCourse = (courseSlug) => {
//     setSelectedCourse(courseSlug);
//     setCurrentPage("course");
//   };

//   // ✅ When user clicks back from course details
//   const handleBackToHome = () => {
//     setCurrentPage("home");
//     setSelectedCourse(null);
//   };

//   // ✅ If course page is active
//   if (currentPage === "course") {
//     return <CourseDetails slug={selectedCourse} onBack={handleBackToHome} />;
//   }

//   // ✅ Default home page content
//   return (
//     <div className="min-h-screen font-sans overflow-hidden">
//       <Navbar
//         onNavClick={{
//           home: () => scrollToSection(homeRef),
//           about: () => scrollToSection(aboutRef),
//           superpower: () => scrollToSection(superpowerRef),
//           whyChoose: () => scrollToSection(whyChooseRef),
//           Contact: () => scrollToSection(ContactRef),
//         }}
//       />

//       <div ref={homeRef}>
//         <Hero />
//       </div>

//       <div>
//         <Mission />
//       </div>

//       <div ref={aboutRef}>
//         <AboutSection />
//       </div>

//       {/* ✅ Pass handleViewCourse to SuperpowerSection */}
//       <div ref={superpowerRef}>
//         <SuperpowerSection onViewCourse={handleViewCourse} />
//       </div>

//       <div ref={whyChooseRef}>
//         <WhyChooseUs />
//       </div>

//       <div ref={ContactRef}>
//         <Contact />
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Mission from "./Components/Mission";
import AboutSection from "./Components/About";
import SuperpowerSection from "./Components/SuperPower";
import WhyChooseUs from "./Components/WhyChooseUs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import CourseDetails from "./Components/CourseDetails";

function HomePage({ scrollRefs, handleViewCourse }) {
  const { homeRef, aboutRef, superpowerRef, whyChooseRef, ContactRef, scrollToSection } =
    scrollRefs;

  return (
    <div className="min-h-screen font-sans overflow-hidden">
      {/* ✅ Navbar with scrolling */}
      <Navbar
        onNavClick={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          superpower: () => scrollToSection(superpowerRef),
          whyChoose: () => scrollToSection(whyChooseRef),
          Contact: () => scrollToSection(ContactRef),
        }}
      />

      {/* ✅ Page sections */}
      <div ref={homeRef}>
        <Hero />
      </div>

      <div>
        <Mission />
      </div>

      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <div ref={superpowerRef}>
        {/* ✅ Pass router navigation handler */}
        <SuperpowerSection onViewCourse={handleViewCourse} />
      </div>

      <div ref={whyChooseRef}>
        <WhyChooseUs />
      </div>

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
        {/* ✅ Home page */}
        <Route
          path="/"
          element={
            <HomePage
              scrollRefs={scrollRefs}
              handleViewCourse={(slug) => (window.location.href = `/course/${slug}`)}
            />
          }
        />

        {/* ✅ Course details page */}
        <Route path="/course/:slug" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
