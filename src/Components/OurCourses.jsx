import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { coursesData, superpowerData } from "../DB/db";
import SeoMeta from "./SeoMeta";

const OurCourses = () => {
  const navigate = useNavigate();

  const handleInquiry = (link) => {
    window.open(link, "_blank");
  };

  const handleLearnMore = (slug) => {
    navigate(`/course/${slug}`);
  };

  useEffect(() => {
      // scroll to top whenever About2 mounts
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
    <>
      <SeoMeta
        title="Framisty Design Institute"
        description="Explore all design and video editing courses at Framisty Design Institute. Learn from professionals with real projects."
        url="https://framisty.com/our-courses"
      />
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[30vh] 2xl:min-h-[9vh] flex flex-col items-center justify-center
                    px-4 sm:px-6 md:px-10 text-center overflow-hidden
                    bg-gradient-to-b from-[#24143C] via-[#2B124C] to-[#000000] border-b-2"
      >
        <Navbar />

        <div className="max-w-5xl mt-16 sm:mt-12 md:mt-10 lg:mt-16 xl:mt-20 2xl:mt-24 mb-6 sm:mb-4 md:mb-2 2xl:mb-[2rem]">
          <h1 className="text-white font-bold text-4xl sm:text-6xl md:text-6xl 2xl:text-6xl">
            Our Courses
          </h1>
        </div>
      </section>

      

      <section
          className="bg-[#000000] w-full min-h-[110vh] px-4 sm:px-6 md:px-10 text-center overflow-hidden border-b-2"
      >
        <div
          className="
            Explore-courses 
            mt-12 sm:mt-10 md:mt-8 lg:mt-12 xl:mt-14 2xl:mt-16
            mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20
          "
        >
          

          <div className="flex flex-col items-center gap-10 md:gap-12">
              {coursesData.map((card) => (
                <div
                  key={card.id}
                  className="
                    bg-[#161618] rounded-2xl shadow-lg 
                    flex flex-col md:flex-col lg:flex-row
                    justify-between items-center 
                    gap-10 md:gap-12 lg:gap-16
                    p-6 sm:p-8 md:p-10 lg:p-12
                    transition-transform duration-300 hover:scale-[1.01]
                    w-[90%] sm:w-[85%] md:w-[90%] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px]
                    max-w-full
                  "
                >
                  {/* Left Section */}
                  <div className="flex-1 text-center md:text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
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

                    <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                      {card.description}
                    </p>

                    <div className="flex gap-4 flex-wrap justify-center md:justify-center lg:justify-start">
                      <button
                        onClick={() => handleInquiry(card.inquiryLink)}
                        style={{ backgroundColor: card.btnColor }}
                        className="hover:opacity-90 text-black px-6 py-2 rounded-full font-semibold transition duration-300"
                      >
                        Enquire Now
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
                  <div className="flex-1 max-w-sm sm:max-w-md md:max-w-[32rem] lg:max-w-lg rounded-xl overflow-hidden">
                    <video
                      src={card.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-48 sm:h-56 md:h-72 lg:h-72 object-cover rounded-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
        </div>
        
        <div
          className="
            rounded-2xl shadow-lg 
            flex flex-col lg:flex-row       /* tablet (md) tak column, lg+ par row */
            justify-between items-center 
            gap-4 lg:gap-6 xl:gap-8 2xl:gap-29  
            p-4 sm:p-5 md:p-6 
            transition-transform duration-300  
            w-full max-w-[69rem] mx-auto
          "
        >
        {/* Image */}
        <div className="flex-1 flex justify-center h-full">
          <div className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[359px] 2xl:max-w-[520px] aspect-[7/4] border border-[#d1d5db] rounded-xl overflow-hidden flex items-center justify-center bg-[#0f0f0f]">
            <img
              src={superpowerData.certificate.img}
              alt="Pixohype Certificate"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div
          className="
            flex-1 flex justify-center lg:justify-start 
            text-center lg:text-left
          "
        >
          <div className="text-white">
            {/* Title */}
            <h3 className="text-lg sm:text-xl md:text-3xl 2xl:text-3xl font-semibold text-[#94D84F] mb-4">
              {superpowerData.certificate.title}
            </h3>

            {/* Points */}
            <ul className="text-sm sm:text-lg leading-snug md:text-sm md:font-medium md:w-[34rem] 2xl:text-[16px] xl:font-medium 2xl:w-[39rem] text-gray-200 list-decimal list-inside space-y-2">
              {superpowerData.certificate.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
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
