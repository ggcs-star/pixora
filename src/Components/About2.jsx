import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { aboutData } from "../DB/db";

const About2 = () => {
  const navigate = useNavigate();

  const handleInquiry = () => {
    navigate("/contact");
  };

  const handleLearnMore = (slug) => {
    navigate(`/course/${slug}`);
  };

  const { heroSection, infoCards, storySection, missionVision, coreValues, courses, rightIcon } = aboutData;

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[110vh] flex flex-col items-center justify-center
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
          <h1 className="text-3xl mt-20 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center pt-16">
            {heroSection.title1}
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mt-4">
            {heroSection.title2Prefix}{" "}
            <span className="bg-gradient-to-r from-[#F988AE] to-[#F7BB97] bg-clip-text text-transparent">
              {heroSection.title2Highlight}
            </span>
          </h1>

          <h1 className="text-[#C7C7C7] text-xl font-normal mt-10">
            {heroSection.description1} <br />{" "}
            <span className="text-white font-medium">
              {heroSection.description2}
            </span>
          </h1>

          <button className="text-white bg-[#F5614C] rounded-4xl px-4 py-2 font-medium mt-10">
            {heroSection.buttonText}
          </button>
        </div>

        {/* Info Cards */}
        <div className="relative z-30 w-full py-7 mt-[-3rem]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
              {infoCards.map((card) => (
                <div
                  key={card.id}
                  className="flex items-center bg-[#191919] border border-[#2E2E2E] rounded-2xl px-4 py-5 shadow-lg min-h-[94px] gap-4"
                >
                  <span className="w-20 h-10 flex items-center justify-center rounded-full">
                    <img
                      src={card.icon}
                      alt={card.text}
                      className="max-h-full"
                    />
                  </span>
                  <div className="text-left">
                    <p className="text-sm sm:text-base font-normal leading-tight text-white">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story + Mission/Vision Section */}
      <section className="bg-[#000000]  w-full min-h-[110vh] px-4 sm:px-6 md:px-10 text-center overflow-hidden border-b-2">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#161618] border border-[#2E2E2E] p-6 md:p-10 rounded-2xl mb-8 mt-20">
            <h2 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#F988AE] to-[#F7BB97] bg-clip-text text-transparent mb-3 text-left">
              {storySection.heading}
            </h2>

            {storySection.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-[#FFFFFF] font-regular text-left mt-3"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
          {missionVision.map((mv, i) => (
            <div
              key={i}
              className="bg-[#161618] border border-[#2E2E2E] w-full max-w-md sm:w-[22rem] md:w-[27rem] p-5 md:p-8 rounded-2xl flex items-center space-x-4 md:space-x-6 justify-center"
            >
              <img src={mv.icon} alt={mv.title} className="w-11 md:w-13" />
              <div>
                <p className="text-[#A9A9A9] text-sm text-left">{mv.title}</p>
                <p className="text-[#FFFFFF] text-left mt-2 text-base md:text-xl font-light leading-relaxed">
                  {mv.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="core-val flex flex-col items-center text-center mt-20 mb-20">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">
            Core Values
          </h2>

          <div className="flex flex-col items-center mt-12 sm:mt-20 mb-12 sm:mb-20 max-w-3xl px-4 sm:px-0">
            <div className="flex flex-col gap-6 sm:gap-7">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <img
                    src={rightIcon}
                    alt="Right-Icon"
                    className="w-6 sm:w-10"
                  />
                  <span className="text-white text-lg sm:text-xl font-semibold">
                    {value.title}
                  </span>
                  <span className="text-[#A9A9A9] text-base sm:text-xl font-medium ml-[-1%]">
                    {value.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="Explore-courses mb-10">
          <div>
            <h2 className="text-white text-3xl flex justify-center font-bold mb-10  md:text-left">
              Explore Our Courses
            </h2>
          </div>

          <div className="flex flex-col items-center gap-10">
            {courses.map((card) => (
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
