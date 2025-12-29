// import React from "react";
// import { mentorData } from "../DB/db";
// import { FiCircle } from "react-icons/fi";

// const Meet_My_Mentor = () => {
//   return (

//     <section className="w-full bg-[#18181b] py-20">

//         <div className="max-w-[1200px] mx-auto px-6 sm:px-10">

//             {/*  TOP SECTION  */}
//             <div className="text-center max-w-[1050px] 2xl:max-w-[1290px] mx-auto">

//                     {/* Title */}
//                     <h2 className="
//                         text-3xl sm:text-4xl font-bold mb-10
//                         bg-gradient-to-r from-[#F7BB97] via-[#F988AE] to-[#F988AE]
//                         bg-clip-text text-transparent
//                     ">
//                         {mentorData.title}
//                     </h2>

//                     {/* Top Paragraphs */}
//                     <div className="space-y-6 text-white text-sm sm:text-base leading-[1.8] text-justify font-medium">
//                         {mentorData.description.slice(0, 3).map((text, index) => (
//                             <p key={index}>{text}</p>
//                         ))}
//                     </div>

//                     <div className="space-y-6 text-white text-sm sm:text-base leading-[1.8] text-justify font-medium mt-3 -mb-6 ">
//                         {mentorData.title1.map((text, index) => (
//                             <p key={index}>{text}</p>
//                         ))}
//                     </div>

//                     {/* Bullet Questions */}
//                     <ul className="mt-8 space-y-4 text-left max-w-[1700px] mx-auto">
//                         {mentorData.highlights.map((point, index) => (
//                         <li
//                             key={index}
//                             className="flex items-start gap-3 text-white text-sm sm:text-base leading-[1.6] font-medium"
//                         >
//                             <span className="mt-2 text-pink-400 shrink-0">
//                             <FiCircle size={10} />
//                             </span>
//                             <span>{point}</span>
//                         </li>
//                         ))}
//                     </ul>

//             </div>

//             {/*  BOTTOM SECTION  */}
//             <div className="mt-20 px-10 sm:px-6  grid grid-cols-1 md:justify-start md:grid-cols-2 gap-10 items-center">

//                     {/* LEFT IMAGE */}
//                     <div className="flex justify-center ">
//                             <img
//                                 src={mentorData.image}
//                                 alt="Mentor"
//                                 className="
//                                     w-[220px] sm:w-[260px] md:w-[300px]
//                                     rounded-xl object-cover shadow-lg
//                                 "
//                             />
//                     </div>

//                     {/* RIGHT CONTENT */}
//                     <div className="space-y-4  text-white text-sm sm:text-base leading-[1.8] text-justify font-medium">

//                         {mentorData.description.slice(3).map((text, index) => (
//                             <p key={index}>{text}</p>
//                         ))}

//                         {mentorData.description1.map((text, index) => (
//                             <p key={index}>{text}</p>
//                         ))}

//                     </div>

//             </div>

//         </div>

//     </section>
//   );
// };

// export default Meet_My_Mentor;

import React from "react";
import { mentorData } from "../DB/db";

const MeetMyMentor = () => {

    const floatStyle = {
      animation: "floatY 3.2s infinite",
    };

    const floatStyleSlow = {
      animation: "floatY 4.5s infinite",
    };

    const floatStyleReverse = {
      animation: "floatYReverse 3.8s infinite",
    };


    const animationMap = {
      normal: floatStyle,
      slow: floatStyleSlow,
      reverse: floatStyleReverse,
    };


  return (
    <section className="w-full bg-black text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

         <div className="relative flex justify-center lg:justify-start">

                {/* Mentor Image */}
                <img
                  src={mentorData.image}
                  alt="Mentor"
                  className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[100%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)] z-0"
                />

                {/* Floating Icons */}
                {mentorData.floatingIcons.map((icon) => (
                    <img
                      key={icon.id}
                      src={icon.img}
                      alt={icon.alt}
                      style={animationMap[icon.animation]}
                      className={`
                        absolute ${icon.position}
                        ${icon.size}
                        pointer-events-none
                        drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]
                        drop-shadow-[0_3px_10px_rgba(245,97,76,0.35)]
                      `}
                    />
                ))}

          </div>





          {/*  RIGHT CONTENT  */}
          <div className="space-y-8 max-w-[560px]">

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight font-[poppins] bg-gradient-to-r from-[#F7BB97] via-[#F988AE] to-[#F988AE]
                         bg-clip-text text-transparent ">
              {mentorData.title}
            </h2>

            {/* DESCRIPTION */}
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              {mentorData.description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-[#231a20] px-6 py-4 rounded-xl text-center min-w-[160px]">
                <p className="text-xl font-bold">10+ years</p>
                <p className="text-xs text-gray-400 mt-1">
                  industry experience
                </p>
              </div>

              <div className="bg-[#141d23] px-6 py-4 rounded-xl text-center min-w-[160px]">
                <p className="text-xl font-bold">3+ years</p>
                <p className="text-xs text-gray-400 mt-1">
                  Educational Trainer
                </p>
              </div>

              <div className="bg-[#1c1523] px-6 py-4 rounded-xl text-center min-w-[200px]">
                <p className="text-sm font-semibold">
                  Projects that go
                  <br />
                  beyond counting
                </p>
              </div>
            </div>

            {/* PROMISE BOX */}
            <div className="bg-[#1b1918] border border-white/10 rounded-xl p-6 text-sm text-gray-300 leading-relaxed">
              <p className="font-semibold text-white mb-2">
                His promise as a mentor is simple:
              </p>
              <p>{mentorData.promise}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMyMentor;

