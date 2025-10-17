import React, { useState } from "react";
import Navbar from "./Navbar";
import VideoDesignEditing from "../assets/Videos/Design & Video Editing.mp4";
import CertificateImage from "../assets/Courses_Digital_Media_Icons/Certificate_Img.png";

import AspiringIcon from "../assets/Courses_Digital_Media_Icons/Aspiring Icon-1.svg";
import Graduates from "../assets/Courses_Digital_Media_Icons/Graduates-icon-2.svg";
import Freelancer from "../assets/Courses_Digital_Media_Icons/Freelancer-icon-3.svg";
import Duration from '../assets/Courses_Digital_Media_Icons/Duration-icon-4.svg';
import Batches from '../assets/Courses_Digital_Media_Icons/Batches-icon-5.svg';
import Level from '../assets/Courses_Digital_Media_Icons/Level-icon-6.svg';
import ToolsUsed from '../assets/Courses_Digital_Media_Icons/Tools_used-icon-7.svg';
import Format from '../assets/Courses_Digital_Media_Icons/Format-icon-8.svg';

import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Footer from "./Footer";
import { superpowerData } from "../DB/db";

const course = {
  title: "Diploma in Design & Video Editing",
  video: VideoDesignEditing,
};

const modules = [
  {
    module: "Module 1",
    title: "Design Foundations (Weeks 1–2)",
    lessons: [
      "Visual language, color, typography basics, layout principles.",
      "Sketch-to-rough workflows, critique sessions."
    ]
  },
  {
    module: "Module 2",
    title: "Branding & Logo (Weeks 3–4)",
    lessons: [
      "Brand strategy, positioning, and logo development.",
      "Presentation and feedback rounds."
    ]
  },
  {
    module: "Module 3",
    title: "Print & Publication (Weeks 5–6)",
    lessons: [
      "Editorial design, layout grids, and production-ready files.",
      "Hands-on print project."
    ]
  },
  {
    module: "Module 4",
    title: "Digital & Social (Weeks 7–8)",
    lessons: [
      "Design for screens, responsive layouts.",
      "Social media campaigns, motion basics."
    ]
  },
  {
    module: "Module 5",
    title: "Portfolio Project & Review (Weeks 9–12)",
    lessons: [
      "Independent portfolio project.",
      "One-on-one reviews and refinement."
    ]
  }
];

const DesignVideoEditingDetails = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
      const toggleModule = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

  return (
    <>

        {/* Hero Section */}
        <section className="relative w-full text-white overflow-hidden bg-black" style={{
            borderBottom: "2px solid",
            borderImage: "linear-gradient(to right, #442485, #8A1367, #FB2F5C, #F08540) 1",
        }}>
            <Navbar />
            {course.video && (
                <div className="relative w-full h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
                >
                    <source src={course.video} type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black to-transparent z-20"></div>
                <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                    background:
                        `linear-gradient(to top, rgba(0,0,0,0.44) 54%, rgba(0,0,0,0) 85%, transparent 100%),` +
                        `radial-gradient(ellipse 185% 44% at 14% 90%, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.62) 58%, transparent 82%),` +
                        `linear-gradient(to left, rgba(0,0,0,0.7), transparent 60%)`
                    }}
                />
                <div className="absolute left-0 right-0 top-[72%] z-20 flex flex-col items-center text-center -translate-y-1/2 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 drop-shadow-md">
                        Diploma in
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                        <span className="bg-gradient-to-r from-[#F9F97F] to-[#81D246] bg-clip-text text-transparent">
                            Design & Video Editing
                        </span>
                    </h2>
                    <p className="max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg opacity-90 mb-7">
                    Intensive studio-style training for branding, print & digital creatives.
                    </p>
                    <div className="flex gap-3 sm:gap-4 justify-center mt-2 mb-8 flex-wrap">
                    <button className="bg-[#F5614C] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#e64a36] font-semibold transition-all duration-300 text-xs sm:text-sm cursor-pointer" onClick={() => window.open("https://forms.gle/2e3p3YF5Fqqa4KiD7", "_blank")}>
                        Inquiry Now
                    </button>
                    <button className="border border-white hover:bg-white hover:text-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition text-xs sm:text-sm cursor-pointer">
                        Download Brochure
                    </button>
                    </div>
                </div>
                </div>
            )}

            {/* Info Card Section - 3 boxes */}
            <div className="relative z-30 w-full py-14 bg-black mt-[-3rem]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
                    {/* Card 1 */}
                    <div className="flex items-center bg-[#191919] rounded-2xl px-4 py-5 shadow-lg min-h-[94px] gap-4">
                    <span className="w-20 h-10 flex items-center justify-center rounded-full">
                        <img src={AspiringIcon} alt="Aspiring graphic designers" className="max-h-full" />
                    </span>
                    <div className="text-left">
                        <p className="text-sm sm:text-base font-normal leading-tight text-white">
                        Aspiring graphic designers who want a fast, job-ready portfolio.
                        </p>
                    </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex items-center bg-[#191919] rounded-2xl px-4 py-5 shadow-lg min-h-[94px] gap-4">
                    <span className="w-20 h-10 flex items-center justify-center rounded-full">
                        <img src={Graduates} alt="Graduates" className="max-h-full" />
                    </span>
                    <div className="text-left">
                        <p className="text-sm sm:text-base font-normal leading-tight text-white">
                        Graduates seeking practical skills that matter to employers.
                        </p>
                    </div>
                    </div>
                    {/* Card 3 */}
                    <div className="flex items-center bg-[#191919] rounded-2xl px-4 py-5 shadow-lg min-h-[94px] gap-4">
                    <span className="w-20 h-10 flex items-center justify-center rounded-full">
                        <img src={Freelancer} alt="Freelancers" className="max-h-full" />
                    </span>
                    <div className="text-left">
                        <p className="text-sm sm:text-base font-normal leading-tight text-white">
                        Freelancers who want professional workflows &amp; handovers.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>


        {/* Course Overview Section */}
        <section className="w-full py-20 px-4 bg-black flex justify-center">
            <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
            {/* Left: Overview Text */}
            <div className="md:w-1/2 text-white">
                <p className="mb-4 text-xs sm:text-sm md:text-base opacity-70">Course Overview</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">Diploma in Design & Video Editing</h2>
                <p className="opacity-80 text-sm sm:text-base md:text-lg leading-relaxed">
                The Diploma in Digital Media & Design is a comprehensive program that blends creativity with technology to prepare students for careers in the fast-evolving digital world. This course covers key areas such as graphic design, UI/UX, animation, video editing, digital marketing, and branding. Students will learn to create visually compelling content, design user-friendly interfaces, and develop digital strategies for real-world projects.
                </p>
            </div>
    
            {/* Right: Key Facts Card */}
            <div className="md:w-[390px] w-full flex md:justify-end">
                <div className="bg-[#181818] rounded-2xl px-6 py-7 shadow-xl w-full max-w-[390px] space-y-5">
                    {/* Duration */}
                    <div className="flex items-center mb-6">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f66a63] mr-4">
                        <img src={Duration} alt="Duration Icon" className="max-h-6" />
                    </span>
                    <div>
                        <div className="text-xs sm:text-sm font-light text-white mb-1">Duration</div>
                        <div className="font-medium text-sm sm:text-base text-white">3 Months</div>
                    </div>
                    </div>
                    {/* Batches */}
                    <div className="flex items-center mb-6">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#10c6ea] mr-4">
                        <img src={Batches} alt="Batches Icon" className="max-h-6" />
                    </span>
                    <div>
                        <div className="text-xs sm:text-sm font-light text-white mb-1">Batches</div>
                        <div className="font-medium text-sm sm:text-base text-white">Flexible Weekday (specify options)</div>
                    </div>
                    </div>
                    {/* Level */}
                    <div className="flex items-center mb-6">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8c3ffc] mr-4">
                        <img src={Level} alt="Level Icon" className="max-h-6" />
                    </span>
                    <div>
                        <div className="text-xs sm:text-sm font-light text-white mb-1">Level</div>
                        <div className="font-medium text-sm sm:text-base text-white">Beginner</div>
                    </div>
                    </div>
                    {/* Tools */}
                    <div className="flex items-center mb-6">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f84b7f] mr-4">
                        <img src={ToolsUsed} alt="Tools Icon" className="max-h-6" />
                    </span>
                    <div>
                        <div className="text-xs sm:text-sm font-light text-white mb-1">Tools used</div>
                        <div className="font-medium text-sm sm:text-base text-white">InDesign, Illustrator, Figma</div>
                    </div>
                    </div>
                    {/* Format */}
                    <div className="flex items-center">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4983e4] mr-4">
                        <img src={Format} alt="Format Icon" className="max-h-6" />
                    </span>
                    <div>
                        <div className="text-xs sm:text-sm font-light text-white mb-1">Format</div>
                        <div className="font-medium text-sm sm:text-base text-white">Personal Coaching</div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        {/* Summary of What You Will Study Section */}
        <section className="w-full py-20 bg-[#161615] flex justify-center" style={{
            borderBottom: "2px solid",
            borderImage: "linear-gradient(to right, #442485, #8A1367, #FB2F5C, #F08540) 1",
        }}>
            <div className="max-w-4xl w-full mx-auto flex flex-col items-center px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3">
                Summary of What You Will Study
                </h2>
                <p className="text-base sm:text-lg opacity-80 text-white text-center mb-10 max-w-xl">
                Intensive studio-style training for branding, print & digital creatives
                </p>

                <div className="w-full flex flex-col gap-4">
                {modules.map(({ module, title, lessons }, idx) => (
                    <div
                    key={idx}
                    className="bg-black rounded-lg border border-[#212121] overflow-hidden"
                    >
                    {/* --- Top Bar --- */}
                    <div className="flex items-center w-full px-4 py-3">
                        <span className="flex items-center justify-center bg-[#F5614C] text-white px-4 py-1 font-medium text-sm rounded-md ml-2 my-2 whitespace-nowrap">
                        {module}
                        </span>
                        <span className="ml-4 text-white text-sm sm:text-base flex-1">
                        {title}
                        </span>

                        <button onClick={() => toggleModule(idx)} className="mr-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#232323]">
                            {openIndex === idx ? (
                            // Minus icon
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                <path
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                d="M8 12h8"
                                />
                            </svg>
                            ) : (
                            // Plus icon
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                <path
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                d="M12 8v8M8 12h8"
                                />
                            </svg>
                            )}
                        </span>
                        </button>
                    </div>

                    {/* --- Expand Section --- */}
                    {openIndex === idx && (
                        <div className="px-6 pb-4 bg-[#0F0F0F]">
                        <p className="text-sm text-gray-400 mb-2 mt-1">
                            Lessons In this module
                        </p>
                        <ul className="space-y-2">
                            {lessons.map((lesson, i) => (
                            <li key={i} className="flex items-start gap-2 text-white text-sm">
                                <svg
                                className="mt-1 flex-shrink-0"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                >
                                <circle cx="12" cy="12" r="12" fill="#22C55E" />
                                <path
                                    d="M7 13l3 3 7-7"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </svg>
                                <span>{lesson}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </div>
        </section>

        {/* Assessment & Certification Section */}
        <section className="w-full py-20 bg-black flex flex-col items-center px-4 sm:px-6 lg:px-8" style={{
            borderBottom: "2px solid",
            borderImage: "linear-gradient(to right, #442485, #8A1367, #FB2F5C, #F08540) 1",
        }}>
                    {/* Heading */}
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6"
                        style={{
                        background: "linear-gradient(90deg, #fd426e 18%, #f48637 86%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        }}
                    >
                        Assessment & Certification
                    </h2>
        
                    {/* Top box row */}
                    <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl justify-center mb-8">
                        {/* Left Box */}
                        <div className="flex flex-1 bg-[#191919] rounded-xl px-6 py-6 shadow-lg min-h-[96px] items-center gap-4">
                        {/* Rocket icon */}
                        <span className="mr-4 sm:mr-5">
                            <svg width="40" height="40" fill="none" viewBox="0 0 26 26">
                            <path
                                d="M7.5 17.5l11-11"
                                stroke="#fd426e"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M16.3 7c.9-2 .8-3.4-.4-4.6-1.2-1.2-2.6-1.3-4.6-.4-.6.2-1.3.6-2 .9a20.1 20.1 0 0 0-6.4 6.2c-2 3.2-2.7 6.5.3 9.6 3 3 6.4 2.3 9.6.3a20.1 20.1 0 0 0 6.2-6.4c.3-.7.7-1.3.9-2-.2.7-.6 1.4-.9 2-1 2.1-2 4.3-3.6 5.7-1.6 1.4-3.7 2-6.3-.4-2-2.3-1.8-3.9-.4-6.3C7 10.9 10 7.7 13 6c2.6-1.6 3.7-.5 5.6 1.4 1.9 2 3 3.1 1.4 5.6-1.6 2.4-4.7 5.4-7.1 6.8-.6.3-1.1.5-1.7.7"
                                stroke="#fd426e"
                                strokeWidth="2"
                            />
                            </svg>
                        </span>
                        <span className="text-white text-lg sm:text-xl font-medium leading-snug">
                            Project-based<br />
                            assessment
                        </span>
                        </div>
                        {/* Right Box */}
                        <div className="flex flex-1 bg-[#191919] rounded-xl px-6 py-6 shadow-lg min-h-[96px] items-center gap-4">
                        {/* Placement icon */}
                        <span className="mr-4 sm:mr-5">
                            <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                            <rect
                                width="28"
                                height="18"
                                x="4"
                                y="10"
                                rx="3"
                                fill="none"
                                stroke="#1eaefe"
                                strokeWidth="2"
                            />
                            <path stroke="#1eaefe" strokeWidth="2" d="M10 18h16" />
                            <rect
                                width="9"
                                height="4"
                                x="13.5"
                                y="21"
                                rx="1"
                                fill="none"
                                stroke="#1eaefe"
                                strokeWidth="2"
                            />
                            <circle cx="30" cy="16" r="2" fill="#1eaefe" />
                            </svg>
                        </span>
                        <span className="text-white text-lg sm:text-xl font-medium leading-snug">
                            Placement<br />
                            assistance
                        </span>
                        </div>
                    </div>
        
                    {/* Lower box with certificate */}
                    <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl bg-[#191919] rounded-xl px-8 py-8 shadow-lg items-center">
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
                        <div className="flex-1 flex justify-center mt-6 md:mt-0">
                            <div className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[560px] 2xl:max-w-[800px] aspect-[5/4] border border-[#d1d5db] rounded-xl overflow-hidden flex items-center justify-center bg-[#0f0f0f]">
                                <img
                                    src={superpowerData.certificate.img}
                                    alt="Pixohype Certificate"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
        
                    {/* Title and Subtext */}
                    <div className="flex flex-col w-full max-w-3xl mx-auto mt-10 bg-[#191919] rounded-xl px-8 py-10 shadow-lg items-center">
                        <h2 className="text-3xl font-bold text-white text-center mb-2">Diploma in</h2>
                        <h3
                        className="text-3xl font-bold text-center mb-3 bg-gradient-to-r from-[#fd426e] to-[#f48637] bg-clip-text text-transparent select-none"
                        style={{
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        >
                            Design & Video Editing
                        </h3>
                        <p className="text-white opacity-90 text-base text-center mb-6 leading-normal max-w-md">
                        Intensive studio-style training for branding,
                        <br />
                        print & digital creatives
                        </p>
        
                        {/* Inquiry Button */}
                        <button className="bg-[#F5614C] text-white px-6 py-2 rounded-full font-medium text-base mt-0 mx-auto cursor-pointer" onClick={() => window.open("https://forms.gle/2e3p3YF5Fqqa4KiD7", "_blank")}>
                            Inquiry Now
                        </button>
                    </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#161618] text-white py-12 px-4 md:px-10 section">
            <div className="grid grid-cols-1 md:grid-cols-3 rounded-lg overflow-hidden max-w-[1200px] mx-auto gap-6">
            {/* Contact Form */}
            <form className="md:col-span-2 bg-transparent md:border-r md:border-gray-600 p-8 space-y-6 h-full">
                <h2 className="text-2xl font-semibold 2xl:text-4xl font-poppins">Send a Message</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="flex flex-col space-y-1">
                    <label className="text-white text-sm 2xl:text-xl font-poppins font-semibold">Name</label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-2 pl-3 rounded-md border border-white bg-transparent text-white placeholder-gray-500 2xl:text-xl font-semibold"
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="text-white text-sm 2xl:text-xl font-poppins font-semibold">Mobile Number</label>
                    <input
                    type="text"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    className="w-full p-2 pl-3 rounded-md border border-white bg-transparent text-white placeholder-gray-500 2xl:text-xl font-poppins font-semibold"
                    />
                </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 w-full">
                <div className="flex flex-col space-y-1 w-full md:w-1/2">
                    <label className="text-white text-sm 2xl:text-xl font-poppins font-semibold">Email</label>
                    <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full p-2 pl-3 rounded-md border border-white bg-transparent text-white placeholder-gray-500 2xl:text-xl font-poppins font-semibold"
                    />
                </div>

                <div className="flex flex-col space-y-1 w-full md:w-1/2">
                    <label className="text-white text-sm 2xl:text-xl font-poppins font-semibold">Course of Interest</label>
                    <select
                    name="course"
                    className="w-full p-2 pl-3 rounded-md border border-white bg-transparent text-white placeholder-bg-transparent 2xl:text-xl font-poppins font-semibold"
                    >
                    <option className="bg-transparent" value="">
                        Select
                    </option>
                    {/* options */}
                    </select>
                </div>
                </div>

                <div className="flex flex-col space-y-1">
                <label className="text-white text-sm 2xl:text-xl font-poppins font-semibold">Message</label>
                <textarea
                    name="message"
                    placeholder="Write here..."
                    className="w-full p-2 pl-3 rounded-md border border-white bg-transparent text-white placeholder-gray-500 min-h-[150px] 2xl:text-xl font-poppins font-semibold"
                />
                </div>

                <button
                type="submit"
                className="bg-[#F5614C] text-white px-3 py-3 transition w-[8rem] 3xl:w-[60rem] 4k:w-[42rem] 2xl:text-xl font-poppins font-semibold rounded-4xl cursor-pointer"
                >
                Submit
                </button>
            </form>

            {/* Right Side Content */}
            <div className="bg-[#161618] p-8 space-y-4">
                <h2 className="text-2xl font-semibold font-poppins 2xl:text-4xl">Get in touch with us</h2>
                <p className="text-gray-300 text-sm 2xl:text-xl font-semibold font-poppins">
                Your future in design is just one form away. <br /> Don’t ghost us.
                </p>

                <div>
                <span className="font-semibold text-[#989898] text-sm 2xl:text-xl">Email:</span>
                <p className="text-gray-200 2xl:text-xl font-semibold font-poppins">info@pixsora.com</p>
                </div>

                <div>
                <span className="font-semibold text-[#989898] text-sm 2xl:text-xl">Chat on whatsapp:</span>
                <p className="text-gray-200 2xl:text-xl font-poppins font-semibold">+91 88845 18448</p>
                </div>

                <h3 className="text-[#989898] text-xs mb-[-1rem]">we'ar social to</h3>
                <div className="flex space-x-3 mt-6 2xl:space-x-6 2xl:mt-8 4k:space-x-8 4k:mt-10">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition transform hover:scale-110 2xl:p-4 4k:p-5"
                >
                    <FaFacebookF className="text-white text-lg 2xl:text-3xl 4k:text-5xl" />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 transition transform hover:scale-110 2xl:p-4 4k:p-5"
                >
                    <FaInstagram className="text-white text-lg 2xl:text-3xl 4k:text-5xl" />
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition transform hover:scale-110 2xl:p-4 4k:p-5"
                >
                    <FaYoutube className="text-white text-lg 2xl:text-3xl 4k:text-5xl" />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition transform hover:scale-110 2xl:p-4 4k:p-5"
                >
                    <FaLinkedinIn className="text-white text-lg 2xl:text-3xl 4k:text-5xl" />
                </a>
                </div>
            </div>
            </div>
        </section>

        {/* Footer Section */}
        <Footer />

        {/* Link of Whatsapp Icon */}
        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className=" fixed bottom-5 right-3  bg-[#00FF6F] hover:bg-green-600  text-white rounded-full p-3 shadow-lg z-50 transition transform hover:scale-110 2xl:p-3 3xl:p-8 4k:p-10" aria-label="WhatsApp">
        <FaWhatsapp className="w-3 h-3 text-white sm:w-5 sm:h-5 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4k:w-14 4k:h-14"/>
        </a>
    </>
  );
};

export default DesignVideoEditingDetails;
