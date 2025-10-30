import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";


import {
  coreValuesData,
  featuresData,
  infoCardsData,
  smallCardsData,
  certificateData,
  videosData,
  icons,
  superpowerData,
} from "../DB/db";
import { useNavigate } from "react-router-dom";

const Why_Choose_Us_2 = () => {
  const rowsRef = useRef([]);

  const navigate = useNavigate();

  const handleCourse = () => {
      navigate('/courses');
  }

  useEffect(() => {
    // scroll to top whenever About2 mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-center overflow-hidden bg-gradient-to-b from-[#24143C] via-[#2B124C] to-[#000000]">
        <Navbar />

        <div className="max-w-5xl">
          <h1 className="text-3xl mt-20 sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-white text-center pt-16">
            We teach how to work
          </h1>

          <h1 className="text-white text-xs xl:text-[15px] font-medium mt-10 2xl:text-xl">
            Learn, create, and grow with Framisty Design Institute. Experience real-world design training, <br />{" "}
            <span className="text-white font-medium">
              build your portfolio, and get ready to launch your creative career with confidence.
            </span>
          </h1>

          <button className="text-white bg-[#F5614C] rounded-3xl px-5 py-3 font-medium mt-10 cursor-pointer" onClick={handleCourse}>
            Start Learning
          </button>
        </div>
      </section>

      {/* Main Section */}
      <section className="bg-[#000000] w-full min-h-[110vh] px-4 sm:px-6 md:px-10 text-center overflow-hidden border-b-2 border-blue-500">
        
        <div className="w-full flex justify-center px-3 sm:px-6 md:px-10 lg:px-20">
            <div className="w-full max-w-[1400px] mx-auto 2xl:w-[80rem]">

                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-8 mt-12 sm:mt-16 md:mt-20">
                    {infoCardsData.map((card, index) => (
                        <div
                        key={index}
                        className="bg-[#18181b] border border-[#2E2E2E] rounded-2xl flex flex-col justify-center text-left shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]
                                    p-5 sm:p-6 md:p-8 lg:p-10 h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[240px]"
                        >
                        {card.subtitle === "Job Skills" ? (
                            <>
                            <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-1">
                                {card.subtitle}
                            </p>
                            <h3
                                className={`font-medium leading-snug ${card.textColor} text-base sm:text-lg md:text-xl lg:text-xl`}
                            >
                                {card.title}
                            </h3>
                            </>
                        ) : (
                            <>
                            <h3
                                className={`font-semibold mb-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${
                                card.gradient
                                    ? `bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`
                                    : card.textColor
                                }`}
                            >
                                {card.title}
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
                                {card.subtitle}
                            </p>
                            </>
                        )}
                        </div>
                    ))}
                </div>

                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
                {smallCardsData.map((item, index) => (
                    <div
                    key={index}
                    className="bg-[#18181b] border border-[#2E2E2E] flex-1 rounded-2xl flex items-center justify-center sm:justify-start space-x-4 sm:space-x-5 lg:space-x-6
                                p-5 sm:p-6 md:p-8 lg:p-10 h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px]
                                shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
                    >
                    <img
                        src={item.img}
                        alt="icon"
                        className="w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 flex-shrink-0"
                    />
                    <p className="text-gray-200 font-medium leading-snug text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center sm:text-left">
                        {item.text}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </div>

        
        <div className="core-val flex flex-col items-center text-center mt-20 mb-20">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">
            What You’ll Learn Here
          </h2>

          <div className="flex flex-col items-center mt-12 sm:mt-20 xl:mt-[2rem] xl:mb-[1rem] mb-12 sm:mb-20 max-w-4xl px-4 sm:px-0">
            <div className="flex flex-col gap-6 sm:gap-7">
              {coreValuesData.map((value, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={icons.right}
                    alt="Right Icon"
                    className="w-6 md:w-8 sm:w-10"
                  />
                  <span className="text-white text-lg text-left sm:text-xl font-semibold">
                    {value.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="overflow-x-auto md:overflow-visible">

          <h2 className="text-2xl sm:text-2xl font-bold text-white 2xl:text-4xl mb-5">Why Choose Us?</h2>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl border border-[#2E2E2E] rounded-2xl">
                  <table className="w-full text-left rounded-xl overflow-hidden font-poppins text-white">
                    <thead>
                        <tr className="bg-[#3F3F46] text-sm sm:text-base text-center">
                            <th className="py-3 px-4 font-semibold border-r border-[#555] w-[30%]">
                                Feature
                            </th>
                            <th className="py-3 px-4 font-semibold border-r border-[#555] w-[35%]">
                                Other Institutes
                            </th>
                            <th className="py-3 px-4 font-semibold bg-[#F1F5F7] text-black w-[35%]">
                                  Framisty
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {featuresData.map((item, index) => (
                            <tr
                            key={index}
                            className={`${
                                index % 2 === 0 ? "bg-[#18181B]" : "bg-[#27272A]"
                            } text-xs sm:text-sm md:text-base text-center`}
                            >
                            <td className="py-3 px-4 border-r border-[#3F3F46] font-semibold">
                                {item.feature}
                            </td>
                            <td className="py-3 px-4 border-r border-[#3F3F46]">
                                {item.other}
                            </td>
                            <td className="py-3 px-4">{item.pixora}</td>
                            </tr>
                        ))}
                    </tbody>
                  </table>
            </div>
          </div>
        </div>

       
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

export default Why_Choose_Us_2;
