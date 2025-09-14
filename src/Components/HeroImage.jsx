import React from "react";
import heroImg from "../assets/Hero_Img-1.jpg"; 

const HeroImage = () => {

    return (
      // Component of Hero Image Start
      <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 2xl:w-[-3000px]">
        
        {/* Hero Image */}
        <img
          src={heroImg}
          alt="Designer at work"
          className="
            rounded-2xl 
            max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
            w-full
            shadow-xl
            2xl:max-w-6xl 2xl:h-auto   
          "
        />
        
      </div>
      // Component of Hero Image End
      
    );


};

export default HeroImage;

