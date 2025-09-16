import React from "react";
import MissionCard from "./MissionCard";
import mission1 from "../assets/Mission/Mission-Img-1.png";
import mission2 from "../assets/Mission/Mission-Img-2.png";
import mission3 from "../assets/Mission/Mission-Img-3.png";
import mission4 from "../assets/Mission/Mission-Img-4.png";
import blurShape from "../assets/Mission/Mission-img-5.png";
// import PinkLine from "../assets/Hero/Pink-Line-Img.png";

const Mission = () => {

    // Cards Content of Mission Section
    const cards = [

      {
        badge: "Industry Mentor",
        badgeColor: "bg-green-500 text-white",
        title: "Not a YouTube tutorial guy, A real hustler.",
        description: "10+ years IT experience in Designing",
        image: mission1,
      },

      {
        badge: "Batch Size",
        badgeColor: "bg-green-400 text-white",
        title: "No hiding at the back, we see you.",
        description: "10-15 Students per batch for focus",
        image: mission2,
      },

      {
        badge: "Portfolio Power",
        badgeColor: "bg-emerald-500 text-white",
        title: "Your Behance gonna glow up.",
        description: "Job-ready portfolio with real client case studies",
        image: mission3,
      },

      {
        badge: "Placement Support",
        badgeColor: "bg-green-600 text-white",
        title: "We don’t ghost you after class.",
        description: "Internships, client work & career guidance",
        image: mission4,
      },

    ];


    return (

      // Mission Section Start
      <section className="mission-container">


        <section
          className="section relative  w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-purple-700 via-blue-600 to-blue-700 border-b-[3px] border-[#db2370]"
          id="mission"
        >
          {/* Mission Section - BlurShape Image */}
          <img
            src={blurShape}
            alt="Decorative Shape"
            className="pointer-events-none select-none absolute top-0 right-[-13rem] w-44 md:w-72 lg:w-[320px] blur-0 opacity-60 z-0"
            aria-hidden="true"
          />

          {/* Title of Mission Container Start */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 2xl:mb-18">

            <h2 className="text-2xl sm:text-3xl md:text-4xl  text-white 2xl:text-5xl font-poppins font-semibold">
              Our Mission is <span className="text-yellow-400">Simple</span>
            </h2>

            <p className="text-gray-200 mt-4 text-sm sm:text-base md:text-lg 2xl:text-xl font-poppins font-semibold">
              To make you a designer who’s ready for real-world jobs, not just
              classroom exercises.
            </p>

          </div>
          {/* Title of Mission Container End */}

          {/* Cards Section Start */}
          <div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 
              gap-6 w-full px-0 mx-0 sm:gap-4 sm:px-0 sm:py-0
              lg:gap-5 lg:px-1 lg:py-1 
              2xl:grid-cols-2 2xl:gap-4 2xl:px-7 2xl:py-0 2xl:mx-0 2xl:max-w-none"
          >

            {cards.map((card, idx) => (
              <MissionCard key={idx} {...card} />
            ))}

          </div>
          {/* Cards Section End */}

        </section>
        
        {/* Pink Curve Line */}
        {/* <img src={PinkLine} alt="Pink Line" className="absolute  bottom-[-38rem] left-0 w-[100%] max-w-none h-auto select-none z-0 2xl:-bottom-[10rem] 2xl:w-[90%] 2xl:h[10rem] pointer-events-none "/> */}

      </section>
      // Mission Section End

    );

};

export default Mission;
