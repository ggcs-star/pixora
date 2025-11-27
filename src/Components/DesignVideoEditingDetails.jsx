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

import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp, FaPhoneAlt, FaCommentDots, FaTimes } from "react-icons/fa";
import Footer from "./Footer";
import { superpowerData } from "../DB/db";
import Contact from "../Components/Contact";
import SeoMeta from "./SeoMeta";
import chatcall from "../assets/404_Not_Found/chat&call_icon.svg";


const course = {
  title: "Diploma in Design & Video Editing",
  video: VideoDesignEditing,
};

const modules = [
  {
    module: "Module 1",
    title: "Design Foundations & Branding (Weeks 1–4)",
    lessons: [
      "Visual Language, Typography, and Layout Design.",
      "Logo Design & Branding Principles.",
      "Brand Systems & Guidelines.",
      "Tool Focus: Illustrator + CorelDRAW.",
    ]
  },
  {
    module: "Module 2",
    title: "Print & Digital Design (Weeks 5–8)",
    lessons: [
      "Brochures, Packaging, and Publication Design.",
      "Digital Ads, Social Creatives & Visual Storytelling.",
      "Preparing Print & Digital Deliverables.",
      "Tool Focus: Photoshop + InDesign.",
    ]
  },
  {
    module: "Module 3",
    title: "Motion Graphics & Animation (Weeks 9–12)",
    lessons: [
      "Introduction to Motion Design.",
      "Keyframes, Transitions, Typography Animation.",
      "Logo Reveal & Explainer Video Creation.",
      "Tool Focus: After Effects.",
    ]
  },
  {
    module: "Module 4",
    title: "Video Editing & Audio Design (Weeks 13–16)",
    lessons: [
      "Video Editing Fundamentals.",
      "Storyboarding, Cuts, Color Correction, Transitions.",
      "Adding Sound, Voiceovers & Music.",
      "Tool Focus: Premiere Pro + Audition.",
    ]
  },
  {
    module: "Module 5",
    title: "AI Tools for Designers (Weeks 17–18)",
    lessons: [
      "Generative AI Tools for Ideation & Content.",
      "AI Voice, Image & Video Tools (Midjourney, Runway, Pika, etc.).",
      "Enhancing Workflow Efficiency with AI.",
    ]
  },
  {
    module: "Module 6",
    title: " Portfolio & Final Project (Weeks 19–24)",
    lessons: [
      "Real Client-Based Projects (Print + Digital + Video).",
      "Personal Showreel Creation.",
      "Interview Prep, Portfolio Presentation.",
    ]
  }
];

const DesignVideoEditingDetails = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
      const toggleModule = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

    const [open,setOpen] = useState(false);
      
    const handleToggle = () => {
        setOpen(!open);
    }
      

  return (
    <>

        <SeoMeta
        title="Design & Video Editing — Framisty Design Institute"
        description="Master Photoshop, Premiere Pro, After Effects, and more in Framisty’s professional Design & Video Editing course. Build your creative portfolio today!"
        url="https://framisty.com/design-video-editing"
      />

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
                            Advanced Diploma in
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                        <span className="bg-gradient-to-r from-[#F9F97F] to-[#81D246] bg-clip-text text-transparent">
                            Design & Video Editing
                        </span>
                    </h2>
                    <p className="max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg opacity-90 mb-7">
                        Advanced design meets dynamic motion — craft, edit & animate like a pro.
                    </p>
                    <div className="flex gap-3 sm:gap-4 justify-center mt-2 mb-8 flex-wrap">
                    <button className="bg-[#F5614C] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#e64a36] font-semibold transition-all duration-300 text-xs sm:text-sm cursor-pointer" onClick={() => window.open("https://forms.gle/odQmgVp3aCMPTfPH7", "_blank")}>
                        Enquire Now
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
                                For aspiring Graphic Designers, Motion Graphic Artists & Video Editors.
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
                    This advanced course blends graphic design, motion graphics, and video editing to prepare
                    students for the multimedia design industry. Learn how to design, animate, and edit compelling
                    visual stories using professional tools and AI workflows.
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
                        <div className="font-medium text-sm sm:text-base text-white">6 Months</div>
                    </div>
                    </div>
                    {/* Batches */}
                    <div className="flex items-center mb-6">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#10c6ea] mr-4">
                        <img src={Batches} alt="Batches Icon" className="max-h-6" />
                    </span>
                    <div>
                        <div className="text-xs sm:text-sm font-light text-white mb-1">Batches</div>
                        <div className="font-medium text-sm sm:text-base text-white">Flexible Weekday</div>
                    </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <span className="w-24 h-10 flex items-center justify-center rounded-full bg-[#f84b7f] mr-4">
                            <img src={ToolsUsed} alt="Tools Icon" className="max-h-6" />
                        </span>
                        <div>
                            <div className="text-xs sm:text-sm font-light text-white mb-1">Tools used</div>
                            <div className="font-medium text-sm sm:text-base text-white">
                                Adobe Illustrator, Photoshop, InDesign, CorelDRAW, After   Effects, PremierePro, Audition, AI Tools
                            </div>
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
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl 2xl:max-w-5xl justify-center mb-8">
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
                    Project + Showreel Evaluation<br />
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
                    Internship/Placement Assistance<br />
                </span>
                </div>
            </div>

            {/* Lower box with certificate */}
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl 2xl:max-w-5xl bg-[#191919] rounded-xl px-8 py-8 shadow-lg items-center">
                <div className="flex-1 flex justify-center md:justify-start text-center md:text-left">
                    <div className="text-white">
                        {/* Title */}
                        <h3 className="text-lg sm:text-xl md:text-3xl 2xl:text-3xl font-semibold text-[#94D84F] mb-4">
                            {superpowerData.certificate.title}
                        </h3>

                        {/* Points */}
                        <ul className="text-sm  sm:text-lg  leading-snug md:text-sm md:font-medium md:w-[34rem] 2xl:text-[16px] xl:font-medium 2xl:w-[39rem] text-gray-200 list-decimal list-inside space-y-2">
                            {superpowerData.certificate.points.map((point, index) => (
                            <li key={index}>{point}</li>
                            ))}
                        </ul>
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
            <div className="flex flex-col w-full max-w-4xl 2xl:max-w-5xl mx-auto mt-10 bg-[#191919] rounded-xl px-8 py-10 shadow-lg items-center">
                <h2 className="text-xl sm:text-3xl font-bold text-white text-center mb-2">Advanced Diploma in</h2>
                <h3
                className="text-xl sm:text-3xl font-bold text-center mb-3 bg-gradient-to-r from-[#fd426e] to-[#f48637] bg-clip-text text-transparent select-none"
                style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
                >
                    Design & Video Editing
                </h3>
                <p className="text-white text-sm sm:text-xl opacity-90  text-center mb-6 leading-normal max-w-md">
                    Advanced design meets dynamic motion — craft, edit & animate like a pro.

                <br />
                </p>

                {/* Inquiry Button */}
                <button className="bg-[#F5614C] text-white px-6 py-2 rounded-full font-medium text-base mt-0 mx-auto cursor-pointer" onClick={() => window.open("https://forms.gle/odQmgVp3aCMPTfPH7", "_blank")}>
                    Enquire Now
                </button>
            </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
            <Contact />
        </section>

        {/* Footer Section */}
        <Footer />

        
        {/* Whatsapp & Call Icon */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
            {/* Floating Options */}
            {open && (
            <div className="flex flex-col items-end space-y-3 transition-all duration-300">
                {/* Chat with us */}
                <div className="flex items-center space-x-3 text-black font-medium shadow-lg rounded-full px-4 py-1 transition">
                <span className="text-white bg-[#F5614C] p-1 rounded-2xl px-4">
                    Chat with us
                </span>
                <a
                    href="https://wa.me/919723235129"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F5614C] text-white rounded-full p-3 shadow-md flex items-center justify-center"
                >
                    <FaCommentDots size={26} />
                </a>
                </div>

                {/* Call Me Now */}
                <div className="flex items-center space-x-3 text-black font-medium shadow-lg rounded-full px-4 py-1 transition">
                <span className="text-white bg-[#F5614C] p-1 rounded-2xl px-4">
                    Call Me Now
                </span>
                <a
                    href="tel:+919723235129"
                    className="bg-[#F5614C] text-white rounded-full p-3 shadow-md flex items-center justify-center"
                >
                    <FaPhoneAlt size={26} />
                </a>
                </div>
            </div>

            )}

            {/* Main Floating Button with Both Icons (Stacked) */}
            <button
                onClick={handleToggle}
                aria-label="Toggle chat options"
                className={`relative flex items-center justify-center w-14 h-14 mr-3 2xl:mr-2 rounded-full shadow-lg transition-all duration-300 ${
                open ? "bg-gray-700 hover:bg-gray-800" : "bg-[#F5614C] hover:bg-[#E11D48]"
                }`}
            >
                {open ? (
                <FaTimes className="text-white text-2xl" />
                ) : (
                <>
                    <img src={chatcall} alt="Chat_Call_Icon" className="text-lg w-10 filter invert brightness-200"/>
                </>
                )}
            </button>
        </div>
    </>
  );
};

export default DesignVideoEditingDetails;
