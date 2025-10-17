// import React from 'react'

// import Navbar from './Navbar'
// import { useNavigate } from 'react-router-dom';


// import DigitalMediaDesign from "../assets/Videos/Digital Media & Design.mp4"
// import DesignVideoEditing from "../assets/Videos/Design & Video Editing.mp4"
// import UiUx from "../assets/Videos/UIUX.mp4"

// import Contact from "../Components/Contact";
// import Footer from "../Components/Footer";

// const OurCourses = () => {

//     const navigate = useNavigate();

//     const handleInquiry = () => {
//         navigate("/contact");
//     };

//     const handleLearnMore = (slug) => {
//         navigate(`/course/${slug}`);
//     };


//     // Array of card objects
//     const cardDetails = [
//         {
//             id: 1,
//             title: "Diploma in",
//             highlight: "Digital Media & Design",
//             description: "Intensive studio-style training for branding, print & digital creatives",
//             gradientFrom: "#FB2F5C",
//             gradientTo: "#F08540",
//             color: "#F5B041",
//             video: DigitalMediaDesign,
//             slug: "diploma-in-digital-media-design",
//             btnColor: "#F5614C"
//         },
//         {
//             id: 2,
//             title: "Diploma in",
//             highlight: "Design & Video Editing",
//             description: "Intensive studio-style training for branding, print & digital creatives",
//             gradientFrom: "#F9F97F",
//             gradientTo: "#81D246",
//             color: "#8FE671",
//             video: DesignVideoEditing,
//             slug: "diploma-in-design-and-video-editing",
//             btnColor: "#94D84F"
//         },
//         {
//             id: 3,
//             title: "Advance Program in",
//             highlight: "Digital Media Creation",
//             description: "Intensive studio-style training for branding, print & digital creatives",
//             gradientFrom: "#E04FFF",
//             gradientVia: "#FF6D8D",
//             gradientTo: "#FFA26B",
//             color: "#E564D8",
//             video: UiUx,
//             slug: "advance-program-in-digital-media-creation",
//             btnColor: "#E958DD"
//         },
        
//     ];

//     return (
//         <>
        

//             <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center
//                     px-4 sm:px-6 md:px-10 text-center overflow-hidden
//                     bg-gradient-to-b from-[#24143C]  via-[#2B124C] to-[#000000] border-b-2 ">
                    
//                     {/* <div
//                         className="absolute bottom-0 left-0 w-full h-[2px]"
//                         style={{
//                         background: "linear-gradient(to right, #442485, #8A1367, #FB2F5C, #F08540)"
//                         }}
//                     ></div> */}

//                 <Navbar />

//                 <div className="max-w-5xl">


//                         <h1 className='text-white font-bold text-4xl sm:text-7xl'>Our Courses</h1>
                    
//                 </div>
//             </section>

//             <section className='bg-[#000000] w-full min-h-[110vh] px-4 sm:px-6 md:px-10 text-center overflow-hidden border-b-2'>

                
//                 <div className='Explore-courses mt-20 mb-10'>
                
                
//                     <div className="flex flex-col items-center gap-10">

//                         {cardDetails.map((card) => (

//                             <div key={card.id} className="bg-[#161618] rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-6 p-6 md:p-10 transition-transform duration-300 hover:scale-[1.01] w-full max-w-[800px]">
                                
//                                 {/* Text Section */}
//                                 <div className="flex-1">

//                                     <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white text-left">

//                                         {card.title} <br />

//                                         <span className="bg-clip-text text-transparent font-semibold" style={{ backgroundImage: `linear-gradient(to right, ${card.gradientFrom}, ${card.gradientTo})`,}}>
//                                         {card.highlight}
//                                         </span>

//                                     </h3>

//                                     <p className="text-gray-300 mb-6 text-left">{card.description}</p>

//                                     <div className="flex gap-4 flex-wrap">

//                                         <button onClick={handleInquiry} style={{ backgroundColor: card.btnColor }} className="hover:opacity-90 text-black px-6 py-2 rounded-full font-semibold transition duration-300">
//                                             Inquiry Now
//                                         </button>
//                                         <button onClick={() => handleLearnMore(card.slug)} className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
//                                             Learn More
//                                         </button>

//                                     </div>

//                                 </div>

//                                 {/* Video Section */}
//                                 <div className="flex-1 max-w-md rounded-xl overflow-hidden">

//                                     <video src={card.video} autoPlay loop muted playsInline className="w-full h-54 md:h-72 object-cover rounded-xl"/>
                                
//                                 </div>

//                             </div>

//                         ))}
//                     </div>


//                 </div>
                
//             </section>
            

//             <section className='contact-section'>
//                 <Contact />
//             </section>

//             <section className="footer-section">
//                 <Footer />
//             </section>

            

//         </>
//     )
// }

// export default OurCourses




import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { coursesData } from "../DB/db";

const OurCourses = () => {
  const navigate = useNavigate();

  const handleInquiry = () => {
    navigate("/contact");
  };

  const handleLearnMore = (slug) => {
    navigate(`/course/${slug}`);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[60vh] flex flex-col items-center justify-center
                    px-4 sm:px-6 md:px-10 text-center overflow-hidden
                    bg-gradient-to-b from-[#24143C] via-[#2B124C] to-[#000000] border-b-2"
      >
        <Navbar />

        <div className="max-w-5xl">
          <h1 className="text-white font-bold text-4xl sm:text-7xl">Our Courses</h1>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-[#000000] w-full min-h-[110vh] px-4 sm:px-6 md:px-10 text-center overflow-hidden border-b-2">
        <div className="Explore-courses mt-20 mb-10">
          <div className="flex flex-col items-center gap-10">
            {coursesData.map((card) => (
              <div
                key={card.id}
                className="
                  bg-[#161618] rounded-2xl shadow-lg 
                  flex flex-col md:flex-row justify-between items-center gap-16
                  p-6 sm:p-8 md:p-10 lg:p-12
                  transition-transform duration-300 hover:scale-[1.01]
                  w-[90%] sm:w-[85%] md:w-[80%] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px]
                  max-w-full
                "
              >
                {/* Left Section */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white text-left">
                    {card.title} <br />
                    <span
                      className="bg-clip-text text-transparent font-semibold"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${card.gradientFrom}, ${card.gradientTo})`,
                      }}
                    >
                      {card.highlight}
                    </span>
                  </h3>

                  <p className="text-gray-300 mb-6 text-left text-sm sm:text-base md:text-lg">
                    {card.description}
                  </p>

                  <div className="flex gap-4 flex-wrap">
                    <button
                      onClick={handleInquiry}
                      style={{ backgroundColor: card.btnColor }}
                      className="hover:opacity-90 text-black px-6 py-2 rounded-full font-semibold transition duration-300"
                    >
                      Inquiry Now
                    </button>
                    <button
                      onClick={() => handleLearnMore(card.slug)}
                      className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Right Section (Video) */}
                <div className="flex-1 max-w-sm sm:max-w-md lg:max-w-lg rounded-xl overflow-hidden">
                  <video
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Footer */}
      <section className="contact-section">
        <Contact />
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </>
  );
};

export default OurCourses;
