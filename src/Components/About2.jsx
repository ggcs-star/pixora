import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { aboutData, mentorData, videosData } from "../DB/db";

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

    const floatStyle = {
      animation: "floatY 3.2s infinite",
    };

    const floatStyleSlow = {
      animation: "floatY 4.5s infinite",
    };

    const floatStyleReverse = {
      animation: "floatYReverse 3.8s infinite",
    };


    const animationMap = {
      normal: floatStyle,
      slow: floatStyleSlow,
      reverse: floatStyleReverse,
    };

  






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

          <section className="w-full bg-black text-white overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
                    {/* ================= LEFT IMAGE ================= */}
                    <div className="relative flex justify-center lg:justify-start">
                    
                      {/* Mentor Image */}
                      <img
                        src={mentorData.image}
                        alt="Mentor"
                        className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[100%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)] z-0"
                      />
                    
                      {/* Floating Icons */}
                      {mentorData.floatingIcons.map((icon) => (
                        <img
                          key={icon.id}
                          src={icon.img}
                          alt={icon.alt}
                          style={animationMap[icon.animation]}
                          className={`
                            absolute ${icon.position}
                            ${icon.size}
                            pointer-events-none
                            drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]
                            drop-shadow-[0_3px_10px_rgba(245,97,76,0.35)]
                          `}
                        />
                      ))}
                    
                    </div>
          
                    {/* ================= RIGHT CONTENT ================= */}
                    <div className="space-y-8 max-w-[560px] text-left">
          
                      {/* TITLE */}
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight font-[poppins] bg-gradient-to-r from-[#F7BB97] via-[#F988AE] to-[#F988AE]
                         bg-clip-text text-transparent ">
                        {mentorData.title}
                      </h2>
          
                      {/* DESCRIPTION */}
                      <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                        {mentorData.description.map((text, index) => (
                          <p key={index}>
                            {index === 0 ? (
                              <>
                                <span className="font-bold text-white">Kavan Suthar</span>
                                {text.replace("Kavan Suthar", "")}
                              </>
                            ) : (
                              text
                            )}
                          </p>
                        ))}
                      </div>

          
                      {/* STATS */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="bg-[#231a20] px-6 py-4 rounded-xl text-center min-w-[160px]">
                          <p className="text-xl font-bold">10+ years</p>
                          <p className="text-xs text-gray-400 mt-1">
                            industry experience
                          </p>
                        </div>
          
                        <div className="bg-[#141d23] px-6 py-4 rounded-xl text-center min-w-[160px]">
                          <p className="text-xl font-bold">3+ years</p>
                          <p className="text-xs text-gray-400 mt-1">
                            Educational Trainer
                          </p>
                        </div>
          
                        <div className="bg-[#1c1523] px-6 py-4 rounded-xl text-center min-w-[160px]">
                          <p className="text-sm font-semibold">
                            Projects that go
                            <br />
                            beyond counting
                          </p>
                        </div>
                      </div>
          
                      {/* PROMISE BOX */}
                      <div className="bg-[#1b1918] border border-white/10 rounded-xl p-6 text-sm text-gray-300 leading-relaxed">
                        <p className="font-semibold text-white mb-2">
                          His promise as a mentor is simple:
                        </p>
                        <p>{mentorData.promise}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

          {/* Courses Section */}
          {/* <div className="Explore-courses mb-10 mt-10 md:mb-14 md:mt-16">
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
                  
                  <div className="flex-1 text-center md:text-center lg:text-left">
                    <h3 className="text-2xl md:text-2xl font-semibold mb-3 text-white">
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
          </div> */}

          <div className="w-full flex justify-center px-3 sm:px-5 md:px-10 py-10 sm:py-14 md:py-16 mt-10 sm:mt-16 md:mt-20">
                      <div className="w-full max-w-[67rem]  bg-[#1A1A1A] rounded-3xl px-4 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 text-center 2xl:max-w-[80rem]">
                          
                          
                          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl  font-bold text-white mb-3 sm:mb-5 leading-snug sm:leading-tight">
                              
                              Ready to Upgrade your  Design Career?
                          </h2>
          
                          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                              Work on real-world projects, build a standout portfolio, and step confidently into the creative industry.
                          </p>
          
                          
                          <div className="mb-8 sm:mb-10">
                          <button className="bg-[#F75C3C] cursor-pointer text-white font-medium text-sm sm:text-base md:text-lg py-2 sm:py-3 px-6 sm:px-8 md:px-6 md:py-2 rounded-full hover:bg-[#e44f30] transition-all duration-300" onClick={handleCourse}>
                              Explore Courses
                          </button>
                          </div>
          
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                          {videosData.map((video, index) => (
                              <div key={index} className="overflow-hidden rounded-2xl w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[340px]">
                              <video
                                  src={video}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className="w-full h-full object-cover"
                              />
                              </div>
                          ))}
                          </div>
          
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
