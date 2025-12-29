import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaCommentDots, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { heroData, whatsappData2 } from "../DB/db";
import chatcall from "../assets/404_Not_Found/chat&call_icon.svg";
import SeoMeta from "./SeoMeta";

const Hero = () => {

  const [open,setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  const navigate = useNavigate();

  const handleClick = (btn) => {
    if (btn.type === "primary") {
      navigate(btn.onClickLink);
    } else if (btn.type === "secondary") {
      window.open(btn.onClickLink, "_blank");
    }
  };

  

  useEffect(() => {
  const timer = setTimeout(() => {
    setShowPopup(true);
  }, 1000); 

  return () => clearTimeout(timer);
}, []);




  // const handleWhatsAppClick = () => {
  //   window.open(whatsappData2.link, "_blank");
  // }

  return (
    <>
      <SeoMeta
        title="Framisty Design Institute — Best Design Courses in Gujarat"
        description="Join Framisty Design Institute for real project-based design and video editing courses in Ahmedabad."
        url="https://framisty.com/"
      />
      <section className="relative w-full min-h-[80vh] sm:min-h-[80vh] md:min-h-[100vh] 2xl:min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-white text-center overflow-hidden">
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
        >
          <source src={heroData.video} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-262 bg-gradient-to-t from-black to-transparent z-20"></div>

        {/*  Hero PopUp  */}
        {showPopup && (
          <div className="absolute inset-0 z-30 flex items-center justify-end pointer-events-none">

            <div
              className="
                pointer-events-auto
                relative
                mr-24 sm:mr-8 sm:mb-0 mb-20
                w-[220px] sm:w-[300px] md:w-[220px]
                bg-gradient-to-t from-[#ed365d] via-[#ed365d] to-[#ef8341]
                text-white
                rounded-xl
                px-4 py-3
                shadow-2xl
                animate-slideInRightUltraSmooth
            "
          >
              {/* CLOSE BUTTON (OUTER) */}
              <button
                onClick={() => setShowPopup(false)}
                className="
                  absolute
                  -top-3 -right-3
                  w-6 h-6
                  rounded-full
                  bg-white
                  flex items-center justify-center
                  shadow-md
                  hover:scale-110
                  transition
                "
                aria-label="Close popup"
              >
                <FaTimes className="text-[#F5614C] text-sm" />
              </button>

                {/* TEXT */}
                <p className="text-[13px] sm:text-sm font-semibold leading-snug">
                  Ahmedabad’s only design institute with internships and real industry learning.
                </p>
            </div>

          </div>
          
        )}


        <h1
          className="
            z-20 
            mt-62 sm:mt-20 md:mt-24 lg:mt-60 xl:mt-64 2xl:mt-[30rem]
            text-[clamp(1.2rem,6vw,1.8rem)] sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl
            font-bold leading-tight
            max-w-[96%] sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:w-[70rem]
            font-poppins
          "
        >
            {heroData.heading.map((part, idx) => {
              if (typeof part === "string" && part.includes("Build a Career")) {
                return (
                  <React.Fragment key={idx}>
                    <br /> 
                    {part}
                  </React.Fragment>
                );
              }

              return typeof part === "string" ? (
                part
              ) : (
                <span
                  key={idx}
                  className={`bg-gradient-to-r ${part.gradient} bg-clip-text text-transparent`}
                >
                  {part.text}
                </span>
              );
            })}
        </h1>

        {/* Sub Text */}
        <p className="z-20 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          {heroData.subText}
        </p>

        {/* Buttons */}
        <div className="z-20 mt-6 sm:mt-8 flex flex-row items-center justify-center gap-4">
          {heroData.buttons.map((btn, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(btn)}
              className={`${
                btn.type === "primary"
                  ? `bg-[${btn.bgColor}] hover:bg-[${btn.hoverColor}]`
                  : `border ${btn.border} hover:bg-${btn.hoverBg} hover:text-${btn.hoverText}`
              } text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 cursor-pointer`}
            >
              {btn.text}
            </button>
          ))}
        </div>

        {/* Whatsapp Icon */}
        {/* <a
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed bottom-5 right-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg z-50 transition transform hover:scale-110 2xl:p-3 3xl:p-8 4k:p-10`}
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-5 h-3 text-white sm:w-5 sm:h-5 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4k:w-14 4k:h-14" onClick={handleWhatsAppClick}/>
        </a> */}

        {/* Whatsapp & Call Icon */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
          {/* Floating Options */}
          {open && (
            <div className="flex flex-col items-end space-y-3 transition-all duration-300">
              {/* Chat with us */}
              <div className="flex items-center space-x-3 text-black font-medium shadow-lg rounded-full px-4 py-1 transition">
                <span className="text-white bg-[#F5614C] p-1 rounded-2xl px-4">
                  Chat with us
                </span>
                <a
                  href="https://wa.me/919723235129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F5614C] text-white rounded-full p-3 shadow-md flex items-center justify-center"
                >
                  <FaCommentDots size={26} />
                </a>
              </div>

              {/* Call Me Now */}
              <div className="flex items-center space-x-3 text-black font-medium shadow-lg rounded-full px-4 py-1 transition">
                <span className="text-white bg-[#F5614C] p-1 rounded-2xl px-4">
                  Call Me Now
                </span>
                <a
                  href="tel:+919723235129"
                  className="bg-[#F5614C] text-white rounded-full p-3 shadow-md flex items-center justify-center"
                >
                  <FaPhoneAlt size={26} />
                </a>
              </div>
            </div>

          )}

          {/* Main Floating Button with Both Icons (Stacked) */}
          <button
              onClick={handleToggle}
              aria-label="Toggle chat options"
              className={`relative flex items-center justify-center w-14 h-14 mr-3 2xl:mr-2 rounded-full shadow-lg transition-all duration-300 ${
                open ? "bg-gray-700 hover:bg-gray-800" : "bg-[#F5614C] hover:bg-[#E11D48] cursor-pointer"
              }`}
            >
              {open ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <>
                  <img src={chatcall} alt="Chat_Call_Icon" className="text-lg w-10 filter invert brightness-200"/>
                </>
              )}
            </button>
        </div>

      </section>
    </>
  );
};

export default Hero;
