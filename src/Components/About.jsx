import React, { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react"; 
import aboutImage from "../assets/About/About-Image.jpg";
import aboutShape from "../assets/About/About-Img-2.png";
import aboutShape2 from "../assets/About/About-Img.png";

// About Us - CheckList Items
const ChecklistItem = ({ text }) => {
  return (

      <li className="flex items-start gap-3">

          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1 " />

          <p
            className="text-gray-200 text-sm leading-relaxed 2xl:text-xl"
            dangerouslySetInnerHTML={{ __html: text }}
          />

      </li>

  );
};

const AboutSection = () => {

    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    // Animation 
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
        {
          threshold: 0.5, 
          rootMargin: "0px 0px -100px 0px", 
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);

    return (

      // About Us Section Start
      <section className="section relative bg-gradient-to-b from-[#0e0f2d] via-[#14163d] to-[#0e0f2d] text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden ">


            {/* About Us - Image Shape 1 */}
            <img
              src={aboutShape2}
              alt="Decorative blur"
              className="pointer-events-none select-none absolute top-0 left-[-126px] w-40 md:w-56 lg:w-64 opacity-60 blur-[1px] z-0"
              aria-hidden="true"
            />

            {/* About Us - Image Shape 2 */}
            <img
              src={aboutShape}
              alt="Decorative blur"
              className="pointer-events-none select-none absolute bottom-0 right-[-10rem] w-40 md:w-56 lg:w-64 opacity-60 blur-[1px] z-0 transform scale-x-[-1]"
              aria-hidden="true"
            />

            {/* About Us Section Start */}
            <div className="max-w-6xl mx-auto">

                  {/* About Us - Header */}
                  <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-center mb-19 2xl:text-4xl">
                    About Us
                  </h2>

                  {/* About Us - Right Side Content Start with Animation */}
                  <div className="grid md:grid-cols-2 gap-12 2xl:gap-[20%] 2xl:grid-cols-2 items-stretch 2xl:items-center ">
                      
                      {/* About Us - About Left Side Image */}
                      <div className="w-full h-100 2xl:w-[180%] 2xl:h-[110%]">

                          <img
                            src={aboutImage}
                            alt="Team collaboration"
                            className="w-full h-full rounded-2xl shadow-lg object-cover 2xl:ml-[-17rem]"
                          />

                      </div>

                      
                      <div
                        ref={ref}
                        className={`
                          flex flex-col justify-center 2xl:ml-[-3rem]
                          transform transition-all duration-1500 ease-out
                          ${visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
                        `}
                      >

                        <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-4 2xl:w-[144%] 2xl:text-3xl font-poppins ">
                          {/* About Us - Content of About Us */}
                          <span className="text-yellow-400 font-poppins font-semibold">
                            We Don’t Just Teach Keyboard Buttons,
                          </span>{" "}

                          <span className="text-yellow-400 font-poppins font-semibold ">
                            We Teach Brains (and Deadlines).
                          </span>

                        </h3>
                        {/* Paragraph of About Us */}
                        <p className=" text-white text-sm md:text-base 2xl:text-xl 2xl:w-[140%] leading-relaxed mb-6 font-poppins font-semibold">
                          At Pixora, we train students to work like real designers handling
                          client briefs, revisions, deadlines, and teamwork.

                        <br />
                        {/* Paragraph of About Us */}
                        <p className="font-poppins 2xl:w-[96%]">
                          Most institutes train you in software, but fail to prepare you for
                          the real challenges of the design industry.
                        </p>

                        </p>

                        <h4 className="text-green-400 font-semibold mb-4 2xl:text-3xl font-poppins">
                          We bridge that gap.
                        </h4>
                        
                        {/* About Us - Description of List Items Start */}
                        <ul className="space-y-4 font-poppins 2xl:w-[110%] font-semibold">

                          <ChecklistItem text="Learn directly from a working professional with over <strong>10 years in IT, Graphic Design & Video Editing.</strong>" />
                          <ChecklistItem text="Get trained in <strong>industry workflows, project management, and client communication.</strong>" />
                          <ChecklistItem text="<strong>Build confidence</strong> to handle real deadlines and revisions, just like in agencies and studios." />

                        </ul>
                        {/* About Us - Description of List Items End */}
                      </div>
                      
                  </div>
                  {/* About Us - Right Side Content End */}

            </div>
            {/* About Us Section End */}

      </section>
      // About Us Section End

    );
};

export default AboutSection;
