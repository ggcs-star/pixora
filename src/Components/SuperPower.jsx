import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { superpowerData } from "../DB/db";
import SeoMeta from "./SeoMeta";

const SuperpowerSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = (slug) => {
    navigate(`/course/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SeoMeta
        title="Framisty Design Institute"
        description="Learn about Framisty Design Institute — top-rated design institute in Ahmedabad offering hands-on training."
        url="https://framisty.com/superpower"
      />


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
          <div className="flex flex-col gap-8 sm:gap-10 mb-10">
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
                      onClick={() => window.open("https://forms.gle/odQmgVp3aCMPTfPH7", "_blank")}
                      style={{ backgroundColor: card.btnColor }}
                      className="hover:opacity-90 text-black px-5 sm:px-6 py-2 rounded-full font-semibold transition duration-300 text-sm sm:text-base cursor-pointer"
                    >
                      Enquire Now
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

          </div>


          <div className=" rounded-2xl shadow-lg flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 xl:gap-20 2xl:gap-29  p-4 sm:p-5 md:p-6 transition-transform duration-300  w-full max-w-[99rem]  mx-auto">
              
              {/* Image */}
              <div className="flex-1 flex justify-center h-full">
                <div className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[489px] 2xl:max-w-[520px] aspect-[7/4] border border-[#d1d5db] rounded-xl overflow-hidden flex items-center justify-center bg-[#0f0f0f]">
                  <img
                    src={superpowerData.certificate1.img}
                    alt="Pixohype Certificate"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>



              <div className="flex-1 flex justify-center lg:justify-start text-center lg:text-left">
                <div className="text-white">
                  {/* Title */}
                  {/* <h3 className="text-lg sm:text-xl md:text-3xl 2xl:text-3xl font-semibold text-[#94D84F] mb-4">
                    {superpowerData.certificate1.title}
                  </h3> */}

                  {/* Points */}
                  <ul className="text-sm  sm:text-lg  leading-snug md:text-lg  md:font-medium md:w-[34rem] 2xl:text-[20px] xl:font-medium 2xl:w-[39rem] text-gray-200  list-inside space-y-2">
                    {superpowerData.certificate1.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              

          </div>

          
          <div className=" rounded-2xl shadow-lg flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 xl:gap-20 2xl:gap-29  p-4 sm:p-5 md:p-6 transition-transform duration-300  w-full max-w-[99rem]  mx-auto">
            
            

            <div className="flex-1 flex justify-center lg:justify-start text-center lg:text-left">
                <div className="text-white">
                  {/* Title */}
                  {/* <h3 className="text-lg sm:text-xl md:text-3xl 2xl:text-3xl font-semibold text-[#94D84F] mb-4">
                    {superpowerData.certificate.title}
                  </h3> */}

                  {/* Points */}
                  <ul className="text-sm  sm:text-lg  leading-snug md:text-lg md:font-medium md:w-[34rem] 2xl:text-[20px] xl:font-medium 2xl:w-[39rem] text-gray-200  list-inside space-y-2">
                    {superpowerData.certificate.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center h-full">
              <div className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[489px] 2xl:max-w-[520px] aspect-[7/4] border border-[#d1d5db] rounded-xl overflow-hidden flex items-center justify-center bg-[#0f0f0f]">
                <img
                  src={superpowerData.certificate.img}
                  alt="Pixohype Certificate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>



        </div>
      </section>
    </>
  );
};

export default SuperpowerSection;
