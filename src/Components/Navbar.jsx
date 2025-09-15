import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FaChevronDown } from "react-icons/fa";
import PixoraLogo from "../assets/Navbar-Logo/Pixora_Logo_SVG.svg"

const Navbar = ({ onNavClick }) => {


    const [isOpen, setIsOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);


    const handleNavClick = (section) => {
      if (onNavClick[section]) {
        onNavClick[section]();
        setIsOpen(false);
      }
    };
    

    // border-b-[3px] border-[#e5287b] <- nav tag border in px & border color


      return (
        
        // Navbar Section Start
        <section className="navbar-container">

              <nav
                className=" navbar fixed w-full h-[54px] flex justify-between items-center 
                            py-4 sm:py-5 md:py-6 lg:py-3 
                            px-4 sm:px-6 lg:px-16 2xl:h-[4rem]
                            text-white z-50 
                            bg-black/20 backdrop-blur-md  
                             2xl:px-20 2xl:py-2 "
                >   

                {/* Animation bottom border <- Navbar Animation Border Bottom CSS in Index.css File*/}
                <span className={`nav-bottom-line ${mounted ? "start" : ""}`} />
                

                  <div
                    className=" text-xl sm:text-2xl lg:text-xl font-bungee font-extrabold tracking-wide  cursor-pointer 2xl:text-3xl"
                    onClick={onNavClick.home}
                  >
                    {/* Pixora Logo */}
                    <img src={PixoraLogo} alt="Pixora_Logo" className="w-22 h-auto sm:w-36 md:w-40 lg:w-30 2xl:w-40"/>

                  </div>

                  {/* Navbar Section of Menu Items */}
                  <ul className="hidden  md:flex gap-6 lg:gap-8 md:text-xs lg:text-sm font-medium 2xl:text-xl 2xl:gap-12">


                    <li>
                      {/* Home Button */}
                      <button
                        onClick={onNavClick.home}
                        className="hover:text-green-400 cursor-pointer"
                      >
                        Home
                      </button>

                    </li>

                    <li>
                      {/* About Button */}
                      <button
                        onClick={onNavClick.about}
                        className="hover:text-green-400 cursor-pointer"
                      >
                        About
                      </button>

                    </li>

                    {/* Courses List Item of With Dropdown Options */}
                    <li className="relative group before:content-[''] before:absolute before:left-0 before:top-full before:w-full before:h-2">

                      {/* Courses Button */}
                      <button className="flex items-center gap-1 hover:text-green-400 cursor-pointer">
                        Courses
                        <FaChevronDown className="transition-transform duration-200 group-hover:rotate-[-180deg] text-sm mt-1 2xl:mt-2 2xl:text-xl" />

                      </button>

                      <ul
                        className=" absolute left-0 top-full z-70 min-w-52 rounded-md shadow-lg
                                  bg-black/70 text-white
                                    opacity-0 invisible translate-y-1
                                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                    transition ease-out duration-150"
                      >
                          {/* Dropdown Options Start*/}
                          <li className="px-4 py-2 hover:text-green-400 cursor-pointer text-sm border-b border-white">
                            Diploma in Digital Media & Design
                          </li>

                          <li className="px-4 py-2 hover:text-green-400 cursor-pointer text-sm border-b border-white">
                            Diploma in Design & Video Editing
                          </li>

                          <li className="px-4 py-2 hover:text-green-400 cursor-pointer text-sm">
                            Advance Program in Digital Media Creation
                          </li>
                          {/* Dropdown Options End*/}

                      </ul>

                    </li>

                    <li>
                      {/* Why Choose Us Button */}
                      <button
                        onClick={onNavClick.whyChoose}
                        className="hover:text-green-400 cursor-pointer"
                      >
                        Why Choose Us
                      </button>

                    </li>

                    <li>
                      {/* Contact Button */}
                      <button
                        onClick={onNavClick.Contact}
                        className="hover:text-green-400 cursor-pointer"
                      >
                        Contact
                      </button>

                    </li>

                  </ul>

                  {/* Button (Desktop Only) */}
                  <div className="hidden md:block 2xl:text-xl ">
                    {/* Enquire Button */}
                    <Button className="cursor-pointer text-black">Enquire Now</Button>

                  </div>

                  {/* Mobile Menu Button */}
                  <button
                      className="md:hidden flex items-center focus:outline-none"
                      onClick={() => setIsOpen(!isOpen)}
                      aria-label="Toggle menu"
                  >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                      {isOpen ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </svg>

                  </button>

                  {/* Mobile Dropdown */}
                  {/* <div
                    className={`fixed top-13 left-0 w-full bg-gradient-to-r  from-blue-700 via-purple-700 to-pink-600 
                  text-white font-medium z-40 py-6 px-6 flex flex-col items-center gap-4 md:hidden 
                  transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                  >
                    <button
                      onClick={() => handleNavClick("home")}
                      className="hover:text-green-400"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => handleNavClick("about")}
                      className="hover:text-green-400"
                    >
                      About
                    </button>
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                        className="hover:text-green-400 flex items-center gap-1"
                      >
                        Courses
                        <FaChevronDown
                          className={`transition-transform duration-200 ${
                            isCoursesOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      {isCoursesOpen && (
                        <div className="flex flex-col gap-2 mt-2 w-full text-center">
                          <button className="px-4 py-2 hover:text-green-400 text-sm ">
                            Diploma in Digital Media & Design
                          </button>
                          <button className="px-4 py-2 hover:text-green-400 text-sm ">
                            Diploma in Design & Video Editing
                          </button>
                          <button className="px-4 py-2 hover:text-green-400 text-sm">
                            Advance Program in Digital Media Creation
                          </button>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handleNavClick("whyChoose")}
                      className="hover:text-green-400"
                    >
                      Why Choose Us
                    </button>
                    <button
                      onClick={() => handleNavClick("Contact")}
                      className="hover:text-green-400"
                    >
                      Contact
                    </button>
                    <Button className="cursor-pointer mt-4 text-black">Enquire Now</Button>
                  </div> */}

                  {/* bg-gradient-to-r  from-blue-700 via-purple-700 to-pink-600 */}
                  <div
                    className={`fixed top-13 left-0 w-full 
                              bg-gradient-to-r  from-blue-700 via-purple-700 to-pink-600 backdrop-blur-md text-white font-medium z-40 
                                flex flex-col gap-4 md:hidden 
                                overflow-hidden transition-transform duration-500 ease-in-out 
                                ${
                                  isOpen ? "translate-x-0 opacity-100 py-6 px-6" : "-translate-x-full opacity-0"
                                }`}
                  >

                    <button
                      onClick={() => handleNavClick("home")}
                      className="hover:text-green-400 transition-colors duration-200 text-left w-full"
                    >
                      Home
                    </button>

                    <button
                      onClick={() => handleNavClick("about")}
                      className="hover:text-green-400 transition-colors duration-200 text-left w-full"
                    >
                      About
                    </button>

                    {/* Courses Dropdown Start */}
                    <div className="flex flex-col items-start w-full">

                      {/* Courses Button */}
                      <button
                        onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                        className="hover:text-green-400 flex items-center gap-1 transition-colors duration-200 w-full justify-between"
                      >

                        <span>Courses</span>

                        {/* Mobile View Arrow Down Icon */}
                        <FaChevronDown
                          className={`transition-transform duration-300 ${
                            isCoursesOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />

                      </button>

                      <div
                        className={`flex flex-col gap-2 mt-2 w-full transition-all duration-500 ease-in-out overflow-hidden ${
                          isCoursesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <button className="px-4 py-2 hover:text-green-400 text-sm transition-colors duration-200 text-left w-full">
                          Diploma in Digital Media & Design
                        </button>

                        <button className="px-4 py-2 hover:text-green-400 text-sm transition-colors duration-200 text-left w-full">
                          Diploma in Design & Video Editing
                        </button>

                        <button className="px-4 py-2 hover:text-green-400 text-sm transition-colors duration-200 text-left w-full">
                          Advance Program in Digital Media Creation
                        </button>

                      </div>

                    </div>
                    {/* Courses Dropdown End */}
                    
                    {/* Why Choose Us Button */}
                    <button
                      onClick={() => handleNavClick("whyChoose")}
                      className="hover:text-green-400 transition-colors duration-200 text-left w-full"
                    >
                      Why Choose Us
                    </button>
                    
                    {/* Contact Button */}
                    <button
                      onClick={() => handleNavClick("Contact")}
                      className="hover:text-green-400 transition-colors duration-200 text-left w-full"
                    >
                      Contact
                    </button>
                    
                    

                  </div>

                  
                  
              </nav>


        </section>
        // Navbar Section End
        
      );


};

export default Navbar;
