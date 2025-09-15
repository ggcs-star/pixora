import React, { useEffect, useState } from "react";
import Button from "./Button";
import HeroImage from "./HeroImage";
import BlueLine from "../assets/Hero/Blue-Line-Img.png";
// import PinkLine from "../assets/Hero/Pink-Line-Img.png";
import { FaWhatsapp } from "react-icons/fa";
import HeadingText from "../assets/Hero-Section-Text/Headline Text.png";

const Hero = () => {
  // Animation - Loaded State
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    // Hero Container Start
    <section className="hero-container">

      {/* Section of Hero Start */}
      <section id="home" className="section  relative w-full bg-gradient-to-b from-blue-700 via-purple-700 to-purple-700 text-white overflow-hidden">

        {/* Hero Image - Blue Line Curve */}
        <div className="absolute top-[-39%]  left-[-6%]  h-full  overflow-hidden pointer-events-none select-none z-10  2xl:left-[-6%] ">

          <img src={BlueLine} alt="Blue Line" className="w-[3890px] h-[80%]  object-cover mix-blend-screen opacity-90 rounded-full 2xl:w-[160rem] "/>


        </div>

        {/* Hero section - Left Side + Right Side Content Start */}
        <div className=" max-w-[94%] 2xl:max-w-[95%] mx-auto space-x-3.5  mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-10 2xl:mt-36 4k:mt-40 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20 xl:gap-24 2xl:gap-82 4k:gap-40 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 2xl:py-28 4k:py-36 overflow-hidden">

         
          <div className={`lg:w-1/2 max-w-2xl 2xl:max-w-4xl sm:space-y-1 text-center lg:text-left z-20 relative mt-13 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 2xl:mt-20 transform transition-transform duration-1000 ease-out ${loaded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
            
            {/* Image of Left Side Content */}
            <img src={HeadingText} alt="Heading-Text" className="mt-[40px]" />

            {/* Paragraph of Left Side Content */}
            <p className="text-gray-200 font-poppins font-medium mt-10 2xl:mt-14 2xl:mb-10 text-sm sm:text-sm md:text-xl lg:text-xs xl:text-sm 2xl:text-xl max-w-[40rem] mx-auto lg:mx-0">
              Learn to design the way it’s done in the real world. Not just
              tools, but the entire process – from client brief to final
              delivery.
            </p>


            {/* Buttons of Hero Section Start */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start lg:gap-3 gap-4 sm:gap-6 mt-6">

              <div className="flex justify-center space-x-2 md:block 2xl:text-xl">
                
                {/* Call Us Button */}
                <Button className="cursor-pointer text-xs md:text-base text-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(0,0,0,1)]">
                  Call Us
                </Button>

                {/* Explore Buttons */}
                <Button className={"cursor-pointer text-xs md:text-base text-white bg-transparent border border-white " + "transition-all duration-300 ease-in-out " + "hover:-translate-y-1 " + "hover:border-t-transparent hover:border-l-transparent hover:border-r-transparent " + "hover:border-b-2 hover:border-b-white hover:bg-transparent"}>
                  Explore Courses
                </Button>

              </div>

            </div>
            {/* Buttons of Hero Section End */}

          </div>

          {/* Right Side Hero Image Component*/}
          <div className="w-full lg:w-1/3 flex justify-center relative ">

            <HeroImage />

          </div>


        </div>
        {/* Hero section - Left Side + Right Side Content End */}


        {/* <img src={PinkLine} alt="Pink Line" className="absolute bottom-[-40rem] left-[-1rem] w-[190%] max-w-none h-auto select-none z-0 2xl:-bottom-[10rem] 2xl:w-[90%] 2xl:h[10rem] pointer-events-none "/> */}
      
      </section>
      {/* Section of Hero End */}


      {/* Link of Whatsapp Icon */}
      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className=" fixed bottom-5 right-3  bg-[#00FF6F] hover:bg-green-600  text-white rounded-full p-3 shadow-lg z-50 transition transform hover:scale-110 2xl:p-3 3xl:p-8 4k:p-10" aria-label="WhatsApp">
        <FaWhatsapp className="w-6 h-6 text-white 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4k:w-14 4k:h-14"/>
      </a>


    </section>
    // Hero Container End

  );
};

export default Hero;
