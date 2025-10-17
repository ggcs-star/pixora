import React, { useEffect, useRef, useState } from "react";

const MissionCard = ({ title, description, badge, badgeColor, image }) => {


    const [ visible, setVisible ] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.unobserve(entry.target);   
            }
          });
        },
        { threshold: 0.7, rootMargin: "0px 0px -100px 0px" }    
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      }
    }, []);


    return (

      // MissionCard Section Start
      <section className="missioncard-container">

            <div 
                ref={cardRef}
                className={`
                        flex flex-col md:flex-row items-center 
                        bg-white/5 rounded-3xl border border-white shadow-xl 
                        hover:shadow-2xl  min-w-0  
                        2xl:w-full 2xl:h-full 2xl:gap-4 
                        3xl:gap-4 4k:gap-4 4k:w-full 4k:h-full
                        transform transition-transform duration-1000 ease-out
                        ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
              >

                <div
                  className="flex-shrink-0 overflow-hidden 
                              rounded-tr-2xl       
                              rounded-tl-3xl  
                              rounded-bl-none       
                              md:rounded-bl-2xl     
                              md:rounded-tr-none    
                              w-full h-50        
                              sm:h-52         
                              md:w-48 md:h-56    
                              lg:w-[12rem] lg:h-[12rem] 
                              2xl:w-[20rem] 2xl:h-full
                              3xl:w-[18rem] 
                              4k:w-[16rem] 4k:h-full"
                >
                  {/* Image Section of MissionCard */}
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-top"
                  />

                </div>


                
                <div className="flex-1 space-y-2 text-left  md:text-left px-4 2xl:px-6 py-4 lg:w-[3rem]">
                  {/* MissionCard section of Bage  */}
                  <span
                    className="inline-block text-sm md:text-base 2xl:text-2xl 
                                  px-3 py-1 rounded-sm mb-4 
                                  bg-[#00FF6F] font-poppins font-medium text-black"
                  >
                    {badge}
                  </span>

                  {/* MissionCard section of Title */}
                  <h3 className="text-lg md:text-xl 2xl:text-2xl font-poppins font-semibold text-white">
                    {title}
                  </h3>

                  {/* MissionCard section of Description */}
                  <p className="text-gray-200 text-sm md:text-sm 2xl:text-xl font-poppins font-medium mt-4 leading-relaxed">
                    {description}
                  </p>

                </div>

            </div>

      </section>
      // MissionCard Section End

    );

};

export default MissionCard;
