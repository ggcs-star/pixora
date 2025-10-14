import React from "react";
import Navbar from "./Navbar";
import { useParams, useNavigate } from "react-router-dom";
import VideoDigitalMedia from "../assets/Videos/Digital Media & Design.mp4";
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

import {FaFacebookF,FaInstagram,FaYoutube,FaLinkedinIn} from "react-icons/fa";
import Button from './Button';

const courseData = {
  "diploma-in-digital-media-design": {
    title: "Diploma in Digital Media & Design",
    video: VideoDigitalMedia,
  },
  "diploma-in-design-and-video-editing": {
    title: "Diploma in Design & Video Editing",
    video: VideoDesignEditing,
  },
  "advance-program-in-digital-media-creation": {
    title: "Advance Program in Digital Media Creation",
    video: null,
  },
};

const CourseDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courseData[slug];

  if (!course) {
    return (
      <div className="text-center text-white py-40">
        <h2>Course not found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full mt-6"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
        <section className="relative w-full text-white overflow-hidden bg-black border-b-[3px] border-[#e5287b]">

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
                {/* Black shadow bottom left - radial and linear overlay */}
                <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                    background:
                        `linear-gradient(to top, rgba(0,0,0,0.44) 64%, rgba(0,0,0,0) 85%, transparent 100%),` +
                        `radial-gradient(ellipse 65% 54% at 14% 90%, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.62) 58%, transparent 82%)`
                    }}
                />

                    {/* Title placement as in image, flush middle */}
                    <div className="absolute left-0 right-0 top-[72%] z-20 flex flex-col items-center text-center -translate-y-1/2 px-4">
                        <h1 className="text-5xl md:text-6xl font-bold mb-2 drop-shadow-md">
                        Diploma in
                        </h1>
                        <h2 className="text-5xl md:text-6xl font-bold mb-3">
                        <span className="bg-gradient-to-r from-[#ff4366] to-[#fa9954] bg-clip-text text-transparent">
                            Digital Media & Design
                        </span>
                        </h2>
                        <p className="max-w-2xl text-base md:text-lg opacity-90 mb-7">
                        Intensive studio-style training for branding, print & digital creatives.
                        </p>
                        <div className="flex gap-4 justify-center mt-2 mb-8">
                            <button className="bg-[#F5614C] text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-[#e64a36] font-semibold transition-all duration-300 text-base md:text-lg cursor-pointer">
                                Inquiry Now
                            </button>
                            <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold transition text-base md:text-lg cursor-pointer">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Info Card Section - placed over pure black bg */}
            <div className="relative z-30 w-full py-14 bg-black">
                <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
                    {/* Card 1 */}
                    <div className="flex items-center bg-[#191919] rounded-2xl px-6 py-4 shadow-lg min-h-[94px] gap-4">
                    <span className="w-28 h-11 flex items-center justify-center rounded-full">
                        <img src={AspiringIcon} alt="" />
                    </span>
                    <div className="text-left">
                        <p className="text-base font-normal leading-tight text-white">
                        Aspiring graphic designers who want a fast, job-ready portfolio.
                        </p>
                    </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex items-center bg-[#191919] rounded-2xl px-6 py-4 shadow-lg min-h-[94px] gap-4">
                    <span className="w-28 h-11 flex items-center justify-center rounded-full ">
                        <img src={Graduates} alt="" />
                    </span>
                    <div className="text-left">
                        <p className="text-base font-normal leading-tight text-white">
                        Graduates seeking practical skills that matter to employers.
                        </p>
                    </div>
                    </div>
                    {/* Card 3 */}
                    <div className="flex items-center bg-[#191919] rounded-2xl px-6 py-4 shadow-lg min-h-[94px] gap-4">
                    <span className="w-28 h-11 flex items-center justify-center rounded-full ">
                        <img src={Freelancer} alt="" />
                    </span>
                    <div className="text-left">
                        <p className="text-base font-normal leading-tight text-white">
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
            <div className="max-w-5xl w-full mx-auto flex flex-col  md:flex-row justify-between items-center">
                
                {/* Left: Overview Text */}
                <div className="md:w-1/2 mb-12 md:mb-0 text-white">
                    <p className="mb-4 text-sm opacity-70">Course Overview</p>
                    <h2 className="text-2xl md:text-2xl font-semibold mb-3">Diploma in Digital Media & Design</h2>
                    <p className="opacity-80 text-base leading-relaxed">
                        The Diploma in Digital Media & Design is a comprehensive program that blends creativity with technology to prepare students for careers in the fast-evolving digital world. This course covers key areas such as graphic design, UI/UX, animation, video editing, digital marketing, and branding. Students will learn to create visually compelling content, design user-friendly interfaces, and develop digital strategies for real-world projects.
                    </p>
                </div>
                
                {/* Right: Key Facts Card */}
                <div className="md:w-[390px] w-full flex md:justify-end">
                    <div className="bg-[#181818] rounded-2xl px-7 py-8 shadow-xl w-full max-w-[390px]">
                        {/* Duration */}
                        <div className="flex items-center mb-6">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f66a63] mr-4">
                            {/* Hourglass icon */}
                            <img src={Duration} alt="" />
                        </span>
                        <div>
                            <div className="text-base font-light text-white mb-1">Duration</div>
                            <div className="font-medium text-base text-white">3 Months</div>
                        </div>
                        </div>
                        {/* Batches */}
                        <div className="flex items-center mb-6">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#10c6ea] mr-4">
                            {/* Calendar icon */}
                            <img src={Batches} alt="" />
                        </span>
                        <div>
                            <div className="text-base font-light text-white mb-1">Batches</div>
                            <div className="font-medium text-base text-white">Flexible Weekday (specify options)</div>
                        </div>
                        </div>
                        {/* Level */}
                        <div className="flex items-center mb-6">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8c3ffc] mr-4">
                            {/* Level icon */}
                            <img src={Level} alt="" />
                        </span>
                        <div>
                            <div className="text-base font-light text-white mb-1">Level</div>
                            <div className="font-medium text-base text-white">Beginner</div>
                        </div>
                        </div>
                        {/* Tools */}
                        <div className="flex items-center mb-6">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f84b7f] mr-4">
                            {/* Tools icon */}
                            <img src={ToolsUsed} alt="" />
                        </span>
                        <div>
                            <div className="text-base font-light text-white mb-1">Tools used</div>
                            <div className="font-medium text-base text-white">InDesign, Illustrator, Figma</div>
                        </div>
                        </div>
                        {/* Format */}
                        <div className="flex items-center">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4983e4] mr-4">
                            {/* Person icon */}
                            <img src={Format} alt="" />
                        </span>
                        <div>
                            <div className="text-base font-light text-white mb-1">Format</div>
                            <div className="font-medium text-base text-white">Personal Coaching</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        {/* Summary of What You Will Study Section */}
        <section className="w-full py-20 bg-[#161615] flex justify-center border-b-[3px] border-[#e5287b]">
            <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
                Summary of What You Will Study
                </h2>
                <p className="text-base md:text-lg opacity-80 text-white text-center mb-10">
                Intensive studio-style training for branding, print & digital creatives
                </p>
                <div className="w-full flex flex-col gap-5">
                {/* Module 1 */}
                <div className="flex w-full bg-black rounded-lg items-center overflow-hidden border border-[#212121]">
                    <span className="flex items-center justify-center bg-[#F5614C] text-white px-5 py-2 font-medium text-base rounded-md ml-2 my-2">
                    Module 1
                    </span>
                    <span className="ml-4 text-white text-base flex-1">
                    Design Foundations (Weeks 1–2)
                    </span>
                    <button className="mr-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#232323]">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none"/>
                        <path stroke="#fff" strokeWidth="2" strokeLinecap="round" d="M12 8v8M8 12h8"/>
                        </svg>
                    </span>
                    </button>
                </div>
                {/* Module 2 */}
                <div className="flex w-full bg-black rounded-lg items-center overflow-hidden border border-[#212121]">
                    <span className="flex items-center justify-center bg-[#F5614C] text-white px-5 py-2 font-medium text-base rounded-md ml-2 my-2">
                    Module 2
                    </span>
                    <span className="ml-4 text-white text-base flex-1">
                    Branding & Logo (Weeks 3–4)
                    </span>
                    <button className="mr-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#232323]">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none"/>
                        <path stroke="#fff" strokeWidth="2" strokeLinecap="round" d="M12 8v8M8 12h8"/>
                        </svg>
                    </span>
                    </button>
                </div>
                {/* Module 3 */}
                <div className="flex w-full bg-black rounded-lg items-center overflow-hidden border border-[#212121]">
                    <span className="flex items-center justify-center bg-[#F5614C] text-white px-5 py-2 font-medium text-base rounded-md ml-2 my-2">
                    Module 3
                    </span>
                    <span className="ml-4 text-white text-base flex-1">
                    Print & Publication (Weeks 5–6)
                    </span>
                    <button className="mr-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#232323]">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none"/>
                        <path stroke="#fff" strokeWidth="2" strokeLinecap="round" d="M12 8v8M8 12h8"/>
                        </svg>
                    </span>
                    </button>
                </div>
                {/* Module 4 */}
                <div className="flex w-full bg-black rounded-lg items-center overflow-hidden border border-[#212121]">
                    <span className="flex items-center justify-center bg-[#F5614C] text-white px-5 py-2 font-medium text-base rounded-md ml-2 my-2">
                    Module 4
                    </span>
                    <span className="ml-4 text-white text-base flex-1">
                    Digital & Social (Weeks 7–8)
                    </span>
                    <button className="mr-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#232323]">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none"/>
                        <path stroke="#fff" strokeWidth="2" strokeLinecap="round" d="M12 8v8M8 12h8"/>
                        </svg>
                    </span>
                    </button>
                </div>
                {/* Module 5 */}
                <div className="flex w-full bg-black rounded-lg items-center overflow-hidden border border-[#212121]">
                    <span className="flex items-center justify-center bg-[#F5614C] text-white px-5 py-2 font-medium text-base rounded-md ml-2 my-2">
                    Module 5
                    </span>
                    <span className="ml-4 text-white text-base flex-1">
                    Portfolio Project & Review (Weeks 9–12)
                    </span>
                    <button className="mr-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#232323]">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none"/>
                        <path stroke="#fff" strokeWidth="2" strokeLinecap="round" d="M12 8v8M8 12h8"/>
                        </svg>
                    </span>
                    </button>
                </div>
                </div>
            </div>
        </section>


        {/* Assessment & Certification Section */}
        <section className="w-full py-20 bg-black flex flex-col items-center border-b-[3px] border-[#e5287b]">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{
                background: 'linear-gradient(90deg, #fd426e 18%, #f48637 86%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                Assessment & Certification
            </h2>

            {/* Top box row */}
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl justify-center mb-8">
                {/* Left Box */}
                <div className="flex flex-1 bg-[#191919] rounded-xl px-7 py-7 items-center shadow-lg min-h-[96px]">
                {/* Rocket icon */}
                <span className="mr-5">
                    <svg width="40" height="40" fill="none" viewBox="0 0 26 26">
                    <path d="M7.5 17.5l11-11" stroke="#fd426e" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16.3 7c.9-2 .8-3.4-.4-4.6-1.2-1.2-2.6-1.3-4.6-.4-.6.2-1.3.6-2 .9a20.1 20.1 0 0 0-6.4 6.2c-2 3.2-2.7 6.5.3 9.6 3 3 6.4 2.3 9.6.3a20.1 20.1 0 0 0 6.2-6.4c.3-.7.7-1.3.9-2-.2.7-.6 1.4-.9 2-1 2.1-2 4.3-3.6 5.7-1.6 1.4-3.7 2-6.3-.4-2-2.3-1.8-3.9-.4-6.3C7 10.9 10 7.7 13 6c2.6-1.6 3.7-.5 5.6 1.4 1.9 2 3 3.1 1.4 5.6-1.6 2.4-4.7 5.4-7.1 6.8-.6.3-1.1.5-1.7.7" stroke="#fd426e" strokeWidth="2"/>
                    </svg>
                </span>
                <span className="text-white text-lg font-medium">Project-based<br />assessment</span>
                </div>
                {/* Right Box */}
                <div className="flex flex-1 bg-[#191919] rounded-xl px-7 py-7 items-center shadow-lg min-h-[96px]">
                {/* Placement icon */}
                <span className="mr-5">
                    <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                    <rect width="28" height="18" x="4" y="10" rx="3" fill="none" stroke="#1eaefe" strokeWidth="2"/>
                    <path stroke="#1eaefe" strokeWidth="2" d="M10 18h16"/>
                    <rect width="9" height="4" x="13.5" y="21" rx="1" fill="none" stroke="#1eaefe" strokeWidth="2"/>
                    <circle cx="30" cy="16" r="2" fill="#1eaefe"/>
                    </svg>
                </span>
                <span className="text-white text-lg font-medium">Placement<br />assistance</span>
                </div>
            </div>

            {/* Lower box with certificate */}
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl bg-[#191919] rounded-xl px-8 py-8 shadow-lg items-center">
                <div className="flex-1 flex items-center">
                <span className="text-white text-3xl font-normal leading-relaxed">
                    Earn the Pixohype certificate upon <br className="hidden md:block"/>course completion.
                </span>
                </div>
                <div className="flex-1 flex justify-center mt-6 md:mt-0">
                <img src={CertificateImage} alt="Pixohype Certificate" className="h-44 md:h-52 max-w-full rounded-md border border-[#d1d5db]" />
                </div>
            </div>

            <div className="flex flex-col w-full max-w-3xl mx-auto mt-10 bg-[#191919] rounded-xl px-8 py-10 shadow-lg items-center">
                {/* Title and gradient subtitle */}
                <h2 className="text-3xl font-bold text-white text-center mb-2">
                    Diploma in
                </h2>
                <h3
                    className="text-3xl font-bold text-center mb-3"
                    style={{
                    background: 'linear-gradient(90deg, #fd426e 5%, #f48637 95%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                    }}
                >
                    Digital Media &amp; Design
                </h3>
                {/* Subtext */}
                <p className="text-white opacity-90 text-base text-center mb-6 leading-normal">
                    Intensive studio-style training for branding,<br />print & digital creatives
                </p>

                {/* Inquiry Button */}
                <button className="bg-[#F5614C] text-white px-6 py-2 rounded-full font-medium text-base mt-0 mx-auto">
                    Inquiry Now
                </button>
            </div>

        </section>
 
        {/* Contact Section */}
         <section className="bg-[#161618] text-white py-12 px-4 md:px-22  section ">
        
            <div className="grid grid-cols-1 md:grid-cols-3   rounded-lg overflow-hidden 2xl:max-w-[200rem]  2xl:px-[-22rem] 2xl:py-24  3xl:max-w-[120rem] 3xl:px-20 
                4k:max-w-[150rem] 4k:px-24">

                {/* Contact Form Start - Left Side Content*/}
                <form className="md:col-span-2 bg-transparent md:border-r md:border-gray-600 p-8 space-y-6 h-full ">

                    {/* Header of Form - Left Side Content */}
                    <h2 className="text-2xl font-semibold text-white-800 2xl:text-4xl font-poppins">
                        Send a Message
                    </h2>

                    {/* Contact Form Start */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                        <div className="flex flex-col space-y-1 ">
                            <label className="text-white text-sm 2xl:text-xl font-poppins font-semibold">Name</label>

                            <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full p-2 pl-3 rounded-md border-1 bg-tranparent border-white  text-white placeholder-gray-500 2xl:text-xl font-semibold"
                            />
                        </div>

                        <div className="flex flex-col space-y-1">

                        <label className="text-white text-sm 2xl:text-xl font-poppins font-semibold">Mobile Number</label>

                        <input
                            type="text"
                            name="mobile"
                            placeholder="Enter your mobile number"
                            className="w-full p-2 pl-3 rounded-md border-1 bg-tranparent border-white text-white placeholder-gray-500 2xl:text-xl font-poppins font-semibold"
                        />
                        </div>

                    </div>

                    
                    <div className="flex flex-col space-y-1">

                        <label className="text-white text-sm 2xl:text-xl font-poppins font-semibold">Email</label>

                        <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="w-full p-2 pl-3 rounded-md border-1 bg-transparent border-white text-white placeholder-gray-500 2xl:text-xl font-poppins font-semibold"
                        />


                    </div>

                    
                    <div className="flex flex-col space-y-1">

                        <label className="text-white text-sm 2xl:text-xl font-poppins font-semibold">Message</label>
                        <textarea
                        name="message"
                        placeholder="Write here..."
                        className="w-full p-2 pl-3 rounded-md border-1 bg-transparent border-white text-white placeholder-gray-500 min-h-[150px] 2xl:text-xl font-poppins font-semibold"
                        />

                    </div>

                    {/* Submit Button of Contact Form*/}
                    <button
                        type="submit"
                        className="bg-[#F5614C]  text-white  
                        px-3 py-3  transition
                        w-[8rem]              
                        3xl:w-[60rem]         
                        4k:w-[42rem]          
                        2xl:text-xl font-poppins font-semibold rounded-4xl cursor-pointer" 
                    >
                        Submit
                    </button>
                    {/* Contact Form End */}

                    {/* <div className="hidden md:block 2xl:text-xl ">
                            <Button className="cursor-pointer text-black">Submit</Button>
                        </div> */}

                </form>
                {/* Contact Form End */}

                {/* Right Side Content Start */}
                <div className="bg-[#161618] p-8 space-y-4">
                    
                    {/* Header of Right Side Content */}
                    <h2 className="text-2xl font-semibold font-poppins 2xl:text-4xl">
                    Get in touch with us
                    </h2>
                    
                    {/* Paragraph of Right Side Content */}
                    <p className="text-gray-300 text-sm 2xl:text-xl font-semibold font-poopins">
                    Your future in design is just one form away. <br /> Don’t ghost us.
                    </p>

                    <div>
                    {/* Right Side Content - Email */}
                    <span className="font-semibold text-[#00FF84] text-sm 2xl:text-xl">
                        Email:
                    </span>

                    <p className="text-gray-200 2xl:text-xl font-semibold font-poppins">info@pixsora.com</p>

                    </div>

                    <div>
                        {/* Chat on Whatsapp - Right Side Content */}
                        <span className="font-semibold text-[#00FF84] text-sm 2xl:text-xl">
                        Chat on whatsapp:
                        </span>
                        {/* Mobile Number of Right Side Content */}
                        <p className="text-gray-200 2xl:text-xl font-poppins font-semibold">+91 88845 18448</p>

                    </div>

                    {/* Social Icons Start*/}
                    <div
                    className="flex space-x-3 mt-6 
                        2xl:space-x-6 2xl:mt-8 
                        4k:space-x-8 4k:mt-10"
                    >
                    {/* Facebook Icon */}
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-blue-600 
                        hover:bg-blue-700 transition transform hover:scale-110
                        2xl:p-4 4k:p-5"
                    >
                        <FaFacebookF
                        className="text-white text-lg 
                                    2xl:text-3xl 4k:text-5xl"
                        />
                    </a>
                    {/*Instagram Icon */}
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 
                        hover:opacity-90 transition transform hover:scale-110
                        2xl:p-4 4k:p-5"
                    >
                        <FaInstagram
                        className="text-white text-lg 
                                    2xl:text-3xl 4k:text-5xl"
                        />
                    </a>
                    {/* Youtube Icon */}
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-red-600 
                        hover:bg-red-700 transition transform hover:scale-110
                        2xl:p-4 4k:p-5"
                    >
                        <FaYoutube
                        className="text-white text-lg 
                                    2xl:text-3xl 4k:text-5xl"
                        />
                    </a>
                    
                    {/* LinkedIn Icon */}
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-blue-700 
                        hover:bg-blue-800 transition transform hover:scale-110
                        2xl:p-4 4k:p-5"
                    >
                        <FaLinkedinIn
                        className="text-white text-lg 
                                    2xl:text-3xl 4k:text-5xl"
                        />
                    </a>

                    </div>
                    {/* Social Icons End */}
                    
                </div>
                {/* Right Side Content End */}

            </div>
        
        </section>

    </>
  );
};

export default CourseDetails;
