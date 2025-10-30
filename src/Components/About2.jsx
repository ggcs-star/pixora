import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { aboutData } from "../DB/db";

const About2 = () => {
  const navigate = useNavigate();

  const handleInquiry = (link) => {
    window.open(link, "_blank");
  };

  const handleLearnMore = (slug) => {
    navigate(`/course/${slug}`);
  };

  const handleCourse = () => {
    navigate(heroSection.onClickLink);
  }

  useEffect(() => {
    // scroll to top whenever About2 mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  const { heroSection, infoCards, storySection, missionVision, coreValues, courses, rightIcon } = aboutData;

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[79vh]  flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-10 text-center overflow-hidden border-b-2"
        style={{
          background: `linear-gradient(to bottom, ${heroSection.backgroundGradient.from}, ${heroSection.backgroundGradient.via}, ${heroSection.backgroundGradient.to})`,
        }}
      >

        <div
          className="absolute bottom-0 left-0 w-full h-[2px]"
          style={{ background: heroSection.borderGradient }}
        ></div>

        <Navbar />

        <div className="max-w-5xl">
          <h1 className="text-xl mt-20 2xl:mt-[4rem] sm:text-4xl md:text-4xl lg:text-6xl font-bold text-white text-center pt-16">
            {heroSection.title1}
          </h1>

          <h1 className="text-xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
            {heroSection.title2Prefix}{" "}
            <span className="bg-gradient-to-r from-[#F988AE] to-[#F7BB97] bg-clip-text text-transparent">
              {heroSection.title2Highlight}
            </span>
          </h1>

          <h1 className="text-white text-sm md:text-2xl 2xl:text-2xl font-medium mt-10">
            {heroSection.description1} <br />
          </h1>

          <button className="text-white bg-[#F5614C] rounded-4xl px-4 py-2 font-medium mt-10 mb-10 cursor-pointer" onClick={handleCourse}>
            {heroSection.buttonText}
          </button>
        </div>

        {/* Info Cards */}
        <div className="relative z-30 w-full py-7 mt-[-3rem]">
          <div className="max-w-5xl md:max-w-[71rem] 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-3 mt-10 sm:mt-12 ">
              {infoCards.map((card) => (
                <div
                  key={card.id}
                  className="flex items-center bg-[#191919] border border-[#2E2E2E] rounded-2xl px-4 sm:px-5 md:px-6 py-4 sm:py-5 shadow-lg min-h-[88px] sm:min-h-[94px] md:min-h-[100px]  gap-3 sm:gap-4 hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Icon Section */}
                  <span className="flex-shrink-0 w-12 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-10 lg:h-9 flex items-center justify-center rounded-full overflow-hidden">
                    <img
                      src={card.icon}
                      alt={card.text}
                      className="w-full h-full object-contain"
                    />
                  </span>

                  {/* Text Section */}
                  <div className="flex-1 text-left">
                    <p className="text-[13px] sm:text-sm md:text-base lg:text-sm 2xl:text-sm font-normal leading-snug sm:leading-tight text-white">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </section>

      

      <section className="bg-[#000000] w-full min-h-[110vh] px-4 sm:px-6 md:px-8 lg:px-10 text-center overflow-hidden border-b-2">
          {/* Story Section */}
          <div className="max-w-5xl mx-auto md:max-w-[40rem] lg:max-w-[64rem] 2xl:max-w-[70rem]">
            <div className="bg-[#161618] border border-[#2E2E2E] p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl mb-8 md:mb-12 mt-14 md:mt-16">
              <h2 className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-[#F988AE] to-[#F7BB97] bg-clip-text text-transparent mb-3 md:mb-5 text-left">
                {storySection.heading}
              </h2>

              {storySection.paragraphs.map((para, i) => (
                <p key={i} className="text-[#FFFFFF] font-regular text-left mt-3 md:mt-4 text-sm md:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Mission / Vision Section */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-col-1 justify-center items-center gap-6 md:gap-8 mt-6 md:mt-10">
            {[...aboutData.missions, ...aboutData.visions].map((mv, i) => (
              <div
                key={i}
                className="
                  bg-[#161618] border border-[#2E2E2E]
                  w-full sm:w-[22rem] md:w-[90%] lg:w-[28rem] xl:w-[31rem] 2xl:w-[34rem]
                  h-auto md:h-[15rem] lg:h-[16rem]
                  p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl
                  flex flex-col sm:flex-row md:flex-col
                  items-center justify-center
                  text-center md:text-center
                  space-y-4 sm:space-y-0 sm:space-x-4 md:space-y-5
                "
              >
                <img
                  src={mv.icon}
                  alt={mv.title}
                  className="w-12 sm:w-14 md:w-20 lg:w-18 xl:w-20 2xl:w-24 h-auto mx-auto"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[#A9A9A9] text-sm sm:text-base md:text-lg font-semibold">
                    {mv.title}
                  </p>
                  <p className="text-[#FFFFFF] text-sm sm:text-base md:text-[15px] font-light mt-2 leading-relaxed">
                    {mv.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Courses Section */}
          <div className="Explore-courses mb-10 mt-10 md:mb-14 md:mt-16">
            <div>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 md:mb-12 flex justify-center md:justify-center">
                Explore Our Courses
              </h2>
            </div>

            <div className="flex flex-col items-center gap-10 md:gap-12">
              {courses.map((card) => (
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
      </section>


      <section className="contact-section">
        <Contact />
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </>
  );
};

export default About2;
