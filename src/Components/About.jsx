// import React from "react";
// import Startup from '../assets/Courses_Digital_Media_Icons/start-up.svg';
// import Flexible from '../assets/Courses_Digital_Media_Icons/Flexible.svg';

// const AboutSection = () => {
//   return (
//     <section className="bg-black text-white px-4 md:px-12 py-12 md:py-20">
      
//       {/* <div className="max-w-2xl mx-auto">

//         <div className="bg-[#18181b] p-6 md:p-10 rounded-2xl mb-8">
//           <h2 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#F988AE] to-[#F7BB97] bg-clip-text text-transparent mb-3">
//             About
//           </h2>

//           <p className="text-gray-300 mb-4">
//             Pixora, we train students to work like real designers handling client briefs,
//             revisions, deadlines, and teamwork.
//           </p>
//           <p className="text-gray-400">
//             Most institutes train you in software, but fail to prepare you for the real
//             challenges of the design industry.
//           </p>
//         </div>

        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
//           <div className="bg-[#18181b] p-6 rounded-2xl flex flex-col justify-center">
//             <h3 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#F988AE] to-[#F7BB97] bg-clip-text text-transparent mb-1">
//               10+
//             </h3>
//             <p className="text-gray-300 text-sm md:text-base">
//               Years working designer
//             </p>
//           </div>

          
//           <div className="bg-[#18181b] p-6 rounded-2xl flex flex-col justify-center">
//             <h3 className="text-3xl md:text-4xl font-semibold text-sky-400 mb-1">
//               8–12
//             </h3>
//             <p className="text-gray-300 text-sm md:text-base">
//               Batch Size & Flexible weekday batches
//             </p>
//           </div>

          
//           <div className="bg-[#18181b] p-6 rounded-2xl flex flex-col justify-center">
//             <p className="text-gray-500 text-xs mb-1">Job Skills</p>
//             <h3 className="text-white text-lg md:text-xl font-medium leading-snug">
//               Communication, deadlines, teamwork
//             </h3>
//           </div>

          
//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
            
//             <div className="bg-[#18181b] flex-1 sm:flex-[1.2] p-6 rounded-2xl flex items-center space-x-4">
//               <img src={Startup} alt="Startup_Img" className="w-10"/>
//               <p className="text-gray-200 text-base md:text-lg w-[16rem]">
//                 Client-style projects & workflows
//               </p>
//             </div>

            
//             <div className="bg-[#18181b] flex-1 sm:flex-[1.1] p-6 rounded-2xl flex items-center space-x-4">
//               <img src={Flexible} alt="Flexible_Img" className="w-10"/>
//               <p className="text-gray-200 text-base md:text-lg w-[16rem]">
//                 Flexible weekday batches
//               </p>
//             </div>
//           </div>

//         </div>

//       </div> */}

//       <div className="w-full px-4 sm:px-16 md:px-10 lg:px-14 xl:px-5 2xl:px-0 max-w-4xl 2xl:max-w-6xl mx-auto ">
//         {/* About Section */}
//         <div className="bg-[#18181b] border border-[#2E2E2E] p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl mb-8 ">
//           <div>
//               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-[#F988AE] to-[#F7BB97] bg-clip-text text-transparent mb-3 ">
//                 About
//               </h2> 

//               <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4 2xl:text-2xl">
//                 Framisty, we train students to work like real designers handling client briefs,
//                 revisions, deadlines, and teamwork.
//               </p>
//               <p className="text-gray-400 text-sm sm:text-base lg:text-lg 2xl:text-2xl">
//                 Most institutes train you in software, but fail to prepare you for the real
//                 challenges of the design industry.
//               </p>
//           </div>
          
//         </div>

//         {/* Info Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 2xl:gap-10">
//           {/* Years Experience */}
//           <div className="bg-[#18181b] p-6 sm:p-8 rounded-2xl flex flex-col justify-center items-start border border-[#2E2E2E]">
//             <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#F988AE] to-[#F7BB97] bg-clip-text  text-transparent mb-1 ml-3">
//               10+
//             </h3>
//             <p className="text-gray-300 text-sm md:text-base lg:text-lg ml-3">
//               Years working designer
//             </p>
//           </div>

//           {/* Batch Size */}
//           <div className="bg-[#18181b] border border-[#2E2E2E] p-6 sm:p-8 rounded-2xl flex flex-col justify-center items-start">
//             <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-sky-400 mb-1">
//               8–12
//             </h3>
//             <p className="text-gray-300 text-sm md:text-base lg:text-lg">
//               Batch Size & Flexible weekday batches
//             </p>
//           </div>

//           {/* Job Skills */}
//           <div className="bg-[#18181b] border border-[#2E2E2E] p-6 sm:p-8 rounded-2xl flex flex-col justify-center">
//             <p className="text-gray-500 text-xs sm:text-sm mb-1">Job Skills</p>
//             <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-snug">
//               Communication, deadlines, teamwork
//             </h3>
//           </div>
//         </div>

//         {/* Client Projects + Flexible Batches Row */}
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 lg:mt-8">
//           {/* Client Projects */}
//           <div className="bg-[#18181b] border border-[#2E2E2E] flex-1 sm:flex-[1.2] p-6 sm:p-8 rounded-2xl flex items-center space-x-4">
//             <img src={Startup} alt="Startup_Img" className="w-10 sm:w-12 lg:w-14" />
//             <p className="text-gray-200 text-sm sm:text-base lg:text-lg xl:text-xl w-auto">
//               Client-style projects & workflows
//             </p>
//           </div>

//           {/* Flexible Batches */}
//           <div className="bg-[#18181b] border border-[#2E2E2E] flex-1 sm:flex-[1.1] p-6 sm:p-8 rounded-2xl flex items-center space-x-4">
//             <img src={Flexible} alt="Flexible_Img" className="w-10 sm:w-12 lg:w-14" />
//             <p className="text-gray-200 text-sm sm:text-base lg:text-lg xl:text-xl w-auto">
//               Flexible weekday batches
//             </p>
//           </div>
//         </div>
//       </div>


//     </section>
//   );
// };

// export default AboutSection;


import React from "react";
import { aboutData2 } from "../DB/db";

const AboutSection = () => {
  return (
    <section className="bg-black text-white px-4 md:px-12 py-12 md:py-20">
      <div className="w-full px-4 sm:px-16 md:px-10 lg:px-14 xl:px-5 2xl:px-0 max-w-4xl 2xl:max-w-6xl mx-auto">
        
        {/* About Section */}
        <div className="bg-[#18181b] border border-[#2E2E2E] p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-[#F988AE] to-[#F7BB97] bg-clip-text text-transparent mb-3">
            {aboutData2.aboutText.heading}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4 2xl:text-2xl">
            {aboutData2.aboutText.paragraph1}
          </p>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg 2xl:text-2xl">
            {aboutData2.aboutText.paragraph2}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 2xl:gap-10">
          {aboutData2.infoCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#18181b] p-6 sm:p-8 rounded-2xl flex flex-col justify-center items-start border border-[#2E2E2E]"
            >
              {card.subtitle === "Job Skills" ? (
                <>
                  {/* Swap: subtitle on top, title below */}
                  <p className="text-gray-500 text-xs sm:text-sm mb-1 ml-3">{card.subtitle}</p>
                  <h3
                    className={`text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-snug ml-3`}
                  >
                    {card.title}
                  </h3>
                </>
              ) : card.gradient ? (
                <h3
                  className={`text-3xl sm:text-4xl lg:text-5xl font-semibold ${card.textColor} bg-gradient-to-r ${card.gradient} mb-1 ml-3`}
                >
                  {card.title}
                </h3>
              ) : (
                <h3
                  className={`text-3xl sm:text-4xl lg:text-2xl font-semibold ${card.textColor} mb-1 ml-3`}
                >
                  {card.title}
                </h3>
              )}
          
              {/* Subtitle for other cards */}
              {card.subtitle !== "Job Skills" && (
                <p className="text-gray-300 text-sm md:text-base lg:text-lg ml-3">
                  {card.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>


        {/* Client Projects + Flexible Batches Row */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 lg:mt-8">
          {aboutData2.smallCards.map((item, idx) => (
            <div
              key={idx}
              className={`bg-[#18181b] border border-[#2E2E2E] flex-1 sm:flex-[${item.flex}] p-6 sm:p-8 rounded-2xl flex items-center space-x-4`}
            >
              <img src={item.img} alt={`Img_${idx}`} className="w-10 sm:w-12 lg:w-14" />
              <p className="text-gray-200 text-sm sm:text-base lg:text-lg xl:text-xl w-auto">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

