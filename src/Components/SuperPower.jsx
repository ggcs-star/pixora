// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// import DigitalMediaDesign from "../assets/Videos/Digital Media & Design.mp4";
// import DesignVideoEditing from "../assets/Videos/Design & Video Editing.mp4";
// import UiUx from "../assets/Videos/UIUX.mp4";
// import CertificateImage from "../assets/Courses_Digital_Media_Icons/Certificate_Img.png";

// const SuperpowerSection = () => {
//   const navigate = useNavigate();

//   // const handleInquiry = () => {
//   //   navigate("/contact");
//   // };

//   const handleLearnMore = (slug) => {
//     navigate(`/course/${slug}`);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const cardDetails = [
//     {
//       id: 1,
//       title: "Diploma in",
//       highlight: "Digital Media & Design",
//       description: "Intensive studio-style training for branding, print & digital creatives",
//       gradientFrom: "#FB2F5C",
//       gradientTo: "#F08540",
//       btnColor: "#F5614C",
//       video: DigitalMediaDesign,
//       slug: "diploma-in-digital-media-design",
//     },
//     {
//       id: 2,
//       title: "Diploma in",
//       highlight: "Design & Video Editing",
//       description: "Intensive studio-style training for branding, print & digital creatives",
//       gradientFrom: "#F9F97F",
//       gradientTo: "#81D246",
//       btnColor: "#94D84F",
//       video: DesignVideoEditing,
//       slug: "diploma-in-design-and-video-editing",
//     },
//     {
//       id: 3,
//       title: "Advance Program in",
//       highlight: "Digital Media Creation",
//       description: "Intensive studio-style training for branding, print & digital creatives",
//       gradientFrom: "#E04FFF",
//       gradientTo: "#FFA26B",
//       btnColor: "#E958DD",
//       video: UiUx,
//       slug: "advance-program-in-digital-media-creation",
//     },
//   ];

//   return (
//     <section className="relative py-16 sm:py-20 text-white bg-black">
//       {/* Gradient Bottom Border */}
//       <div
//         className="absolute bottom-0 left-0 w-full h-[2px]"
//         style={{
//           background: "linear-gradient(to right, #442485, #8A1367, #FB2F5C, #F08540)",
//         }}
//       ></div>

//       <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//         <Navbar />

//         {/* Heading */}
//         <div className="text-center mb-10 sm:mb-12 mt-6 sm:mt-8 px-2">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
//             Pick Your <span className="text-white">Superpower.</span>
//             <br />
//             <span>We'll Train You to Use It.</span>
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="flex flex-col gap-8 sm:gap-10">
//           {cardDetails.map((card) => (
//             <div
//               key={card.id}
//               className="bg-[#161618] rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-10 p-5 sm:p-6 md:p-10 w-full 2xl:max-w-[1800px] mx-auto transition-transform duration-300 hover:scale-[1.01]"
//             >
//               {/* Text Section */}
//               <div className="flex-1 w-full text-center md:text-left">
//                 <h3 className="text-2xl sm:text-3xl font-semibold mb-3 leading-snug">
//                   {card.title} <br className="hidden sm:block" />
//                   <span
//                     className="bg-clip-text text-transparent font-semibold"
//                     style={{
//                       backgroundImage: `linear-gradient(to right, ${card.gradientFrom}, ${card.gradientTo})`,
//                     }}
//                   >
//                     {card.highlight}
//                   </span>
//                 </h3>
//                 <p className="text-gray-300 mb-5 sm:mb-6 text-sm sm:text-base md:text-lg">
//                   {card.description}
//                 </p>
//                 <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
//                   <button
                  
//                     // onClick={handleInquiry}
//                     onClick={() => window.open("https://forms.gle/2e3p3YF5Fqqa4KiD7", "_blank")}
//                     style={{ backgroundColor: card.btnColor }}
//                     className="hover:opacity-90 text-black px-5 sm:px-6 py-2 rounded-full font-semibold transition duration-300 text-sm sm:text-base cursor-pointer"
//                   >
//                     Inquiry Now
//                   </button>
//                   <button
//                     onClick={() => handleLearnMore(card.slug)}
//                     className="border border-white text-white px-5 sm:px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base cursor-pointer"
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>

//               {/* Video Section */}
//               <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl overflow-hidden">
//                 <video
//                   src={card.video}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="w-full h-48 sm:h-60 md:h-72 object-cover rounded-xl"
//                 />
//               </div>
              
//             </div>
//           ))}


//           {/* Certificate Card */}
//           <div className="bg-[#161618] rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-6 p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:scale-[1.01] w-full max-w-8xl mx-auto">
//             {/* Text */}
//             <div className="flex-1 flex justify-center md:justify-start text-center md:text-left">
//               <span className="text-white text-lg sm:text-xl md:text-2xl leading-snug 2xl:text-4xl 2xl:w-[19rem]">
//                 Earn the Pixohype certificate upon{" "}
//                 <br className="hidden md:block" />
//                 course completion.
//               </span>
//             </div>

//             {/* Image */}
//             <div className="flex-1 flex justify-center h-full">
//               <div className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] 2xl:max-w-[400px] aspect-[4/3] border border-[#d1d5db] rounded-xl overflow-hidden flex items-center justify-center bg-[#0f0f0f]">
//                 <img
//                   src={CertificateImage}
//                   alt="Pixohype Certificate"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuperpowerSection;


import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { superpowerData } from "../DB/db";

const SuperpowerSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = (slug) => {
    navigate(`/course/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative py-16 sm:py-20 text-white bg-black">
      {/* Gradient Bottom Border */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{
          background: "linear-gradient(to right, #442485, #8A1367, #FB2F5C, #F08540)",
        }}
      ></div>

      <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <Navbar />

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 mt-6 sm:mt-8 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            {superpowerData.heading}
            <br />
            <span>{superpowerData.subheading}</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {superpowerData.cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#161618] rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-10 p-5 sm:p-6 md:p-10 w-full 2xl:max-w-[1800px] mx-auto transition-transform duration-300 hover:scale-[1.01]"
            >
              {/* Text Section */}
              <div className="flex-1 w-full text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3 leading-snug">
                  {card.title} <br className="hidden sm:block" />
                  <span
                    className="bg-clip-text text-transparent font-semibold"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${card.gradientFrom}, ${card.gradientTo})`,
                    }}
                  >
                    {card.highlight}
                  </span>
                </h3>
                <p className="text-gray-300 mb-5 sm:mb-6 text-sm sm:text-base md:text-lg">
                  {card.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                  <button
                    onClick={() => window.open("https://forms.gle/2e3p3YF5Fqqa4KiD7", "_blank")}
                    style={{ backgroundColor: card.btnColor }}
                    className="hover:opacity-90 text-black px-5 sm:px-6 py-2 rounded-full font-semibold transition duration-300 text-sm sm:text-base cursor-pointer"
                  >
                    Inquiry Now
                  </button>
                  <button
                    onClick={() => handleLearnMore(card.slug)}
                    className="border border-white text-white px-5 sm:px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Video Section */}
              <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl overflow-hidden">
                <video
                  src={card.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-48 sm:h-60 md:h-72 object-cover rounded-xl"
                />
              </div>
            </div>
          ))}

          {/* Certificate Card */}
          <div className=" rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-16  p-4 sm:p-5 md:p-6 transition-transform duration-300  w-full max-w-[99rem]  mx-auto">
            {/* Text */}
            <div className="flex-1 flex justify-center md:justify-start text-center md:text-left">
              <div className="text-white">
                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-3xl  2xl:text-3xl font-semibold text-[#94D84F] mb-2 sm:mb-3 md:mb-4">
                  {superpowerData.certificate.title}
                </h3>

                {/* Text */}
                <p className="text-base sm:text-lg md:text-sm md:w-100 leading-snug 2xl:text-xl 2xl:font-normal 2xl:w-[29rem] text-gray-200">
                  {superpowerData.certificate.text}
                  <br className="hidden md:block" />
                </p>
              </div>
            </div>


            {/* Image */}
            <div className="flex-1 flex justify-center h-full">
              <div className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[560px] 2xl:max-w-[800px] aspect-[5/4] border border-[#d1d5db] rounded-xl overflow-hidden flex items-center justify-center bg-[#0f0f0f]">
                <img
                  src={superpowerData.certificate.img}
                  alt="Pixohype Certificate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuperpowerSection;
