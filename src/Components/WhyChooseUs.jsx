import React, { useEffect, useRef } from "react";
import bgImg from '../assets/Why_Choose_Us/Why_Choose_Us.png'

const features = [
  {
    feature: "Trainer Experience",
    other: "Mostly academic",
    pixora: "10+ years industry experience",
  },
  {
    feature: "Batch Size",
    other: "20–30 students",
    pixora: "Max 8–12 students",
  },
  {
    feature: "Teaching Style",
    other: "Software tutorials",
    pixora: "Real project-based training",
  },
  {
    feature: "Industry Workflow",
    other: "Rarely covered",
    pixora: "Fully integrated",
  },
  {
    feature: "Feedback Process",
    other: "Generic",
    pixora: "Real-world revision cycles",
  },
  {
    feature: "Portfolio",
    other: "Random practice work",
    pixora: "Client-style case studies",
  },
  {
    feature: "Job Skills",
    other: "Basic",
    pixora: "Communication, deadlines, teamwork",
  },
  {
    feature: "Tools Taught",
    other: "Standard",
    pixora: "Standard + AI + 3D basics",
  },
];

const WhyChooseUs = () => {

  const rowsRef = useRef([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-row");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );

    rowsRef.current.forEach((row, index) => {
      if (row) {
        row.style.transitionDelay = `${index * 0.2}s`; 
        observer.observe(row);
      }
    });

    return () => observer.disconnect();
  }, []);



  return (

    // WhyChooseUs Section Start
    <section className="section relative bg-gradient-to-b from-[#010101] via-[#14163d] to-[#0e0f2d]  py-16 px-4 sm:px-6 md:px-12 lg:px-20 text-white border-b-[3px] border-[#e5287b]">
      
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${bgImg})` }} />
      
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl  2xl:text-4xl font-poppins font-bold">
          Why Choose Us
        </h2>
      
      </div>


      <div className="flex justify-center ">

        <div className="w-full max-w-[1280px] border border-white rounded-xl 2xl:max-w-[200rem]"> 


          
          <div className="overflow-x-auto md:overflow-visible">


            {/* Table of Why Choose Us Section Start */}
            <table
                  className="w-full border-collapse text-xs sm:text-sm md:text-base rounded-xl overflow-hidden shadow-lg font-poppins"
                  style={{
                    backgroundImage: `url(${bgImg}), linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))`,
                    backgroundSize: "contain", 
                    backgroundBlendMode: "color-burn",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
            >
              {/* Table Header */}
              <thead>

                <tr className="text-black text-left 2xl:text-xl font-semibold">

                  <th className="py-3 px-3 sm:px-4 border-r border-white bg-white 2xl:p-[20px] font-poppins">
                    Feature
                  </th>

                  <th className="py-3 px-3 sm:px-4 border-r border-white bg-white 2xl:p-[20px] font-poppins">
                    Other Institutes
                  </th>

                  <th className="py-3 px-3 sm:px-4 bg-[#00ff6f] 2xl:p-[20px] font-poppins">
                    PIXORA
                  </th>

                </tr>

              </thead>
              
              {/* Table body section */}
              <tbody>

                {features.map((item, index) => (

                  <tr
                    key={index}
                    ref={(el) => (rowsRef.current[index] = el)}
                    className="opacity-0 translate-y-3 transition-all duration-1200 ease-out  bg-transparent border-b border-white"
                  >

                    <td className="py-2.5 px-3 sm:px-4 text-white border-r border-white w-50 2xl:text-xl 2xl:p-[20px] font-poppins font-semibold">
                      {item.feature}
                    </td>

                    <td className="py-2.5 px-3 sm:px-4 text-white border-r border-white w-100 2xl:text-xl 2xl:p-[20px] font-poppins font-semibold">
                      {item.other}
                    </td>

                    <td className="py-2.5 px-3 sm:px-4 text-white w-100 2xl:text-xl 2xl:p-[20px] font-poppins font-semibold">
                      {item.pixora}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
            {/* Table of Why Choose Us Section End */}

          </div>

        </div>

      </div>
      
      {/* Animation Style */}
      <style>{`
        .animate-row {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

    
    </section>
    // WhyChooseUs Section End

  );
};

export default WhyChooseUs;







