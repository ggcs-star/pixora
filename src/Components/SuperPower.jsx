import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Superpower1 from "../assets/SuperPower/Superpower-1.jpg";
import Superpower2 from "../assets/SuperPower/Superpower-2.jpg";
import Superpower3 from "../assets/SuperPower/Superpower-3.jpg";
import BackgroundImage from "../assets/SuperPower/SuperPower-4.png";


const CourseCard = ({ image, title, position, delay }) => {

  const [ visible,setVisible ] = useState(false);
  const ref = useRef(null);

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
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);


  return (
    // <div
    //   ref={ref}
    //   className={`relative w-full h-98 xs:w-[240px] xs:h-[220px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[300px] 2xl:w-[360px] 2xl:h-[500px] 3xl:w-[400px] 3xl:h-[540px] mx-auto rounded-xl overflow-hidden shadow-lg group
    //     transform transition-all duration-700 ease-out 
    //     ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
    //   style={{
    //     transitionDelay: visible ? `${delay}ms` : "0ms", // staggered delay
    //   }}
    // >
    <div
      ref={ref}
      className={`relative 
                  w-[270px] h-[300px]   // base width
                  sm:w-[240px] sm:h-[320px] 
                  md:w-[290px] md:h-[340px] xl:w-[21rem] 
                  2xl:w-[380px] 2xl:h-[420px] 
                  mx-auto rounded-xl overflow-hidden shadow-lg group
                  transform transition-all duration-700 ease-out
                  ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
                style={{
                  transitionDelay: visible ? `${delay}ms` : "0ms",
                }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

      <div className="absolute bottom-12 left-4 right-4">

        <h3 className="text-white text-xl sm:text-base font-semibold leading-tight  text-center  2xl:text-2xl 2xl:mb-3">
          {title}
        </h3>

      </div>

      <button className="absolute bottom-0 left-0 w-full bg-green-500 text-black  font-medium px-4 py-2 xs:py-1 xs:text-xs flex items-center justify-center hover:bg-green-600 transition rounded-b-xl 2xl:text-2xl">
        View Course
        <ArrowRight className="ml-2 w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7" />

      </button>

    </div>
  );
};


const SuperpowerSection = () => {

  const courses = [
    {
      image: Superpower1,
      title: "Diploma in Digital Media & Design",
    },
    {
      image: Superpower3,
      title: "Diploma in Design & Video Editing",
    },
    {
      image: Superpower2,
      title: "Advance Program in Digital Media Creation",
    },
  ];

  return (
  
      // SuperPower Section Start
      <section
            className="section relative py-20 text-white border-b-[3px] border-[#e5287b] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${BackgroundImage})`,
            }}
      >     
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0f2d] via-[#14163d] to-[#0e0f2d] opacity-70 pointer-events-none z-[1]"></div>
      
      <div className="relative z-[2] max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="text-center mb-12">
          {/* Title of Superpower section */}
          <h2 className="text-3xl md:text-4xl  leading-snug font-poppins font-bold">
            Pick Your <span className="text-yellow-400 font-poppins font-bold">Superpower.</span>

            <br />

            <span className="font-poppins font-bold">We’ll Train You to Use It.</span>

          </h2>

        </div>
        

          <div className="grid 
                          gap-y-6 
                          gap-x-1   xl:gap-x-1
                          xs:grid-cols-1 
                          sm:grid-cols-1 
                          md:grid-cols-2 
                          lg:grid-cols-3 lg:gap-1
                          2xl:grid-cols-3 2xl:gap-1
                          justify-center font-poppins font-medium">

            {courses.map((course, idx) => (
              <CourseCard
                key={idx}
                image={course.image}
                title={course.title}
                delay={idx * 300} 
              />
            ))}
            
          </div>

      </div>

      </section>
      // SuperPower Section End
  );
};

export default SuperpowerSection;
