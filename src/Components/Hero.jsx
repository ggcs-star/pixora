// import React from "react";
// import LeftEmoji from "../assets/Courses_Digital_Media_Icons/Hero_Bulb-Img.svg";
// import RightEmoji from "../assets/Courses_Digital_Media_Icons/Hero_Plan-Img.svg";
// import { FaWhatsapp } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// // Import your video
// import HeroVideo from "../assets/Videos/Hero sectio-Video.mp4";

// const Hero = () => {
//   const navigate = useNavigate();

//   const handleLearning = () => {
//     navigate("/courses");
//   };

//   return (
//     <section className="relative w-full min-h-[80vh] sm:min-h-[80vh] md:min-h-[100vh] 2xl:min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-white text-center overflow-hidden">
      
//       {/* Video Background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
//       >
//         <source src={HeroVideo} type="video/mp4" />
//       </video>

//       {/* Gradient Overlay */}
//       <div className="absolute bottom-0 left-0 w-full h-262 bg-gradient-to-t from-black to-transparent z-20"></div>


//       {/* Bottom Gradient Line */}
//       {/* <div
//         className="absolute bottom-0 left-0 w-full h-[2px] z-20"
//         style={{
//           background:
//             "linear-gradient(to right, #442485, #8A1367, #FB2F5C, #F08540)",
//         }}
//       ></div> */}


//       {/* Heading */}
//       <h1 className="z-20 mt-62  sm:mt-20 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl 2xl:text-7xl 2xl:w-[60rem] lg:mt-60 2xl:mt-[30rem]">
//         Learn from a{" "}
//         <span className="bg-gradient-to-r from-[#F988AE] to-[#F7BB97] bg-clip-text text-transparent">
//           Designer
//         </span>{" "}
//         <br className="hidden sm:block" />
//         Not Just a{" "}
//         <span className="bg-gradient-to-r from-[#F988AE] to-[#F7BB97] bg-clip-text text-transparent">
//           Trainer
//         </span>
//       </h1>


//       {/* Sub Text */}
//       <p className="z-20 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
//         Learn to design the way it’s done in the real world. Not just tools, but
//         the entire process - from client brief to final delivery.
//       </p>

//       {/* Buttons */}
//       <div className="z-20 mt-6 sm:mt-8 flex flex-row items-center justify-center gap-4">
//         <button
//           className="bg-[#F5614C] hover:bg-[#e54b34] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300"
//           onClick={handleLearning}
//         >
//           Start Learning
//         </button>

//         <button
//           onClick={() =>
//             window.open("https://forms.gle/2e3p3YF5Fqqa4KiD7", "_blank")
//           }
//           className="border border-white text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
//         >
//           Inquiry Now
//         </button>
//       </div>




//       {/* Whatsapp Icon */}
//       <a
//         href="https://wa.me/919999999999"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-5 right-3 bg-[#00FF6F] hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-50 transition transform hover:scale-110 2xl:p-3 3xl:p-8 4k:p-10"
//         aria-label="WhatsApp"
//       >
//         <FaWhatsapp className="w-3 h-3 text-white sm:w-5 sm:h-5 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4k:w-14 4k:h-14" />
//       </a>
//     </section>
//   );
// };

// export default Hero;




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

      {/* Heading */}
      <h1 className="z-20 mt-62 sm:mt-20 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl 2xl:text-6xl 2xl:w-[60rem] lg:mt-60 2xl:mt-[30rem]">
        {heroData.heading.map((part, idx) =>
          typeof part === "string" ? (
            part
          ) : (
            <span
              key={idx}
              className={`bg-gradient-to-r ${part.gradient} bg-clip-text text-transparent`}
            >
              {part.text}
            </span>
          )
        )}
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
