import React from "react";
import { missionData } from "../DB/db";

const Mission = () => {
  return (
    <section className="bg-[#121212] text-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
          {missionData.heading}
        </h2>
        <p className="text-gray-300 mb-10 sm:mb-12 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          {missionData.subheading}
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {missionData.cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col overflow-hidden rounded-2xl shadow-sm border border-gray-700 bg-[#18181b] hover:shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            >
              {/* Image Section */}
              <div
                className="w-full h-40 sm:h-48 md:h-52 lg:h-56"
                style={{ background: card.bgColor }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-full flex-1 flex flex-col justify-between bg-black border-t border-gray-700 p-5 sm:p-6 text-left">
                <h5 className="mb-2 text-lg sm:text-xl font-semibold tracking-tight text-white">
                  {card.title}
                </h5>
                <p className="mb-0 text-gray-300 text-sm sm:text-base font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
