import React from "react";
import heroImg from "../assets/Hero_Img-1.jpg"; 

const HeroImage = () => {

    return (
      // Component of Hero Image Start
      <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 w-full ">
        
        {/* Hero Image */}
        <img
          src={heroImg}
          alt="Designer at work"
          className="
            rounded-2xl 
            w-full
            max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-5xl 
            h-auto
            shadow-xl"
        />
        
      </div>
      // Component of Hero Image End
      
    );


};

export default HeroImage;

