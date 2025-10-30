import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { heroData } from "../DB/db";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = (btn) => {
    if (btn.type === "primary") {
      navigate(btn.onClickLink);
    } else if (btn.type === "secondary") {
      window.open(btn.onClickLink, "_blank");
    }
  };

  return (
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
      <a
        href={heroData.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-5 right-3 bg-[${heroData.whatsapp.bgColor}] hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-50 transition transform hover:scale-110 2xl:p-3 3xl:p-8 4k:p-10`}
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-3 h-3 text-white sm:w-5 sm:h-5 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4k:w-14 4k:h-14" />
      </a>
    </section>
  );
};

export default Hero;
