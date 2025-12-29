import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaWhatsapp, FaPhoneAlt, FaCommentDots, FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { contactHeroData, locationData, hoursData, dialData, formFields, whatsappData, contactData } from "../DB/db";
import Footer from "./Footer";
import { ChevronDown } from "lucide-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import chatcall from "../assets/404_Not_Found/chat&call_icon.svg";
import { sendContact } from "../DB/api";
import SeoMeta from "./SeoMeta";


const Contact_Add = ({ label, options }) => {

  const [open,setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const handleToggle = () => {
    setOpen(!open);
  }

  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors }, } = useForm({ mode: "onChange", });


  
  const onSubmit = async (data) => {
    setLoading(true); 

    try {
      const payload = {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        course_of_interest: data.course,
        message: data.message,
      };

      // Timeout guard: if API delays too long, throw error
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 7000); 

      const response = await sendContact(payload, { signal: controller.signal });
      clearTimeout(timeout);

      console.log("Send Contact Form Response:", response);

      if (response?.data?.success) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 2500,
          theme: "colored",
        });
        reset();
      } else {
        toast.error(response?.data?.message || "Failed to send. Try again later.", {
          position: "top-right",
          autoClose: 2500,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      const msg =
        error?.response?.data?.message ||
        (error?.code === "ECONNABORTED"
          ? "Server not responding. Try again."
          : error.name === "CanceledError"
          ? "Request timeout. Please retry."
          : "Network or server error!");

      toast.error(msg, {
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
      });
    } finally {
      setLoading(false); 
    }
  };


  return (
    <>

      <SeoMeta
        title="Framisty Design Institute"
        description="Learn about Framisty Design Institute — top-rated design institute in Ahmedabad offering hands-on training."
        url="https://framisty.com/contact"
      />


      {/* Hero Section */}
      <section
        className={`relative w-full min-h-[30vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-center overflow-hidden bg-gradient-to-b ${contactHeroData.bgGradient} border-b-2 2xl:min-h-[9vh]`}
      >
        <Navbar />
        <div className="max-w-5xl mt-20 sm:mt-28 2xl:mb-[2rem]">
          <h1 className="text-white xl:text-6xl font-bold  text-5xl 2xl:text-6xl sm:text-6xl">
            {contactHeroData.title}
          </h1>
        </div>
      </section>

      <section
        className="bg-black text-white px-4 sm:px-6 lg:px-12 
                  py-12 sm:py-14 xl:py-12 2xl:py-25 3xl:py-8 4k:py-6"
        style={{
          borderBottom: "2px solid",
          borderImage:
            "linear-gradient(to right, #442485, #8A1367, #FB2F5C, #F08540) 1",
        }}
      >

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 2xl:max-w-6xl">

          {/* Left Column */}
          <div className="space-y-6">

            {/* Location Box */}
            <div className="bg-[#161618] p-6 rounded-2xl flex flex-col justify-between min-h-[420px] 2xl:min-h-[220px]">
              <h3 className="text-gray-300 text-sm mb-2">
                {locationData.heading}
              </h3>
              <p className="text-white text-sm sm:text-base md:text-[0.95rem] lg:text-[0.9rem] xl:text-[15px] 2xl:text-base leading-relaxed mb-4">
                {locationData.address}
              </p>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58719.024509998635!2d72.53175716953126!3d23.09932758860814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83e616903fdf%3A0xd24c0b467e98e093!2sFramisty%20Design%20Institute!5e0!3m2!1sen!2sin!4v1766746685574!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Grand Emporio Location"
                ></iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58719.024509998635!2d72.53175716953126!3d23.09932758860814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83e616903fdf%3A0xd24c0b467e98e093!2sFramisty%20Design%20Institute!5e0!3m2!1sen!2sin!4v1766746685574!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </div>
            </div>


            {/* Hours Box */}
            {/* <div className="bg-[#1A1A1A] p-6 rounded-2xl">
              <h3 className="text-gray-300 text-sm mb-2">
                {hoursData.heading}
              </h3>
              <p className="text-white text-sm sm:text-base leading-relaxed w-40">
                {hoursData.timings}
              </p>
            </div> */}
            <div className="bg-[#1A1A1A] p-6 rounded-2xl">
              {/* <h3 className="text-gray-300 text-sm mb-3">{hoursData.heading}</h3>

              <div className="flex flex-col gap-2 text-white text-sm sm:text-base">
                <div className="flex justify-between w-60">
                  <span className="font-medium text-gray-300">Open on :</span>
                  <span className="mr-3">{hoursData.days}</span>
                </div>
                <div className="flex justify-between w-60">
                  <span className="font-medium text-gray-300">Timings :</span>
                  <span>{hoursData.timings}</span>
                </div>
              </div> */}
              <p className="mb-[-1rem] text-xs sm:text-sm md:text-base text-[#989898] font-semibold">
                We're social too
              </p>

              <div className="flex space-x-3 mt-6 md:space-x-2 lg:space-x-3 2xl:space-x-6 2xl:mt-8 4k:space-x-8 4k:mt-10">
                  
                  {contactData.socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.url}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${social.bgColor} ${social.hoverBg} transition transform hover:scale-110  md:p-3 2xl:p-4 4k:p-5`}
                      >
                        
                        <Icon
                          className="
                            text-white 
                            text-lg            
                            sm:text-xl         
                            md:text-[11px]     
                            lg:text-2xl        
                            2xl:text-3xl       
                            4k:text-5xl       
                          "
                        />

                      </a>
                    );
                  })}

              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            <div className="bg-[#161618] rounded-2xl py-5 2xl:py-10 mb-1">

              {/*  SAME padding as Send a Message card */}
              <div className="px-6 sm:px-9 2xl:px-7">

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 sm:gap-x-11 2xl:gap-x-10">

                    {/* CONTACT NO */}
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-300 text-sm sm:text-xl 2xl:text-2xl">
                        Contact No :
                      </span>

                      <a
                        href={`tel:${dialData.phone.replace(/\s+/g, "")}`}
                        className="text-sm sm:text-xl 2xl:text-2xl font-medium text-white hover:text-[#F75C3C] transition break-all sm:break-normal"
                      >
                        {dialData.phone}
                      </a>
                    </div>

                  {/* DIVIDER */}
                  <span className="hidden sm:block text-gray-500 text-2xl font-light">
                    |
                  </span>

                  {/* EMAIL */}
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-300 text-sm sm:text-xl 2xl:text-2xl">
                      Email :
                    </span>

                    <p className="text-white text-sm sm:text-xl 2xl:text-2xl font-medium break-all sm:break-normal">
                      {contactData.contactInfo.email}
                    </p>
                  </div>

                </div>
              </div>
            </div>


            {/* Send a Message Section */}
            <div className="bg-[#1A1A1A] p-6 sm:p-9 2xl:p-7 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Send a Message
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-9 2xl:space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      {...register("name", {
                        required: "Name is required",
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "Enter a valid name (letters only)",
                        },
                      })}
                      className={`w-full bg-transparent border text-white rounded-md px-3 py-2 text-sm outline-none focus:border-white ${
                        errors.name ? "border-red-500" : "border-gray-600"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      Mobile
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your mobile number"
                      {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Enter a valid 10-digit mobile number",
                        },
                      })}
                      className={`w-full bg-transparent border text-white rounded-md px-3 py-2 text-sm outline-none focus:border-white ${
                        errors.mobile ? "border-red-500" : "border-gray-600"
                      }`}
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.mobile.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      className={`w-full bg-transparent border text-white rounded-md px-3 py-2 text-sm outline-none focus:border-white ${
                        errors.email ? "border-gray-600" : "border-gray-600"
                      }`}
                    />
                    {/* {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )} */}
                  </div>

                  {/* Course of Interest (optional) */}
                  {/* <div className="relative">
                    <label className="block text-sm text-gray-300 mb-1">
                      {formFields.select.label}
                    </label>

                    <div className="relative">
                      <select
                        onClick={() => setIsOpen(!isOpen)}
                        onBlur={() => setIsOpen(false)}
                        className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 pr-10 text-white text-sm outline-none focus:border-white appearance-none"
                      >
                        {formFields.select.options.map((opt, idx) => (
                          <option
                            key={idx}
                            value={opt.value}
                            className="bg-black text-white"
                          >
                            {opt.text}
                          </option>
                        ))}
                      </select>

                      
                      <ChevronDown
                        size={18}
                        className={`absolute right-3 top-1/2 -translate-y-1/2 text-white transition-transform duration-300 pointer-events-none ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </div> */}

                  {/* Course of Interest */}
                  <div className="relative">
                    <label className="block text-sm text-gray-300 mb-1">
                      {formFields.select.label}
                    </label>

                    <div className="relative">
                      <select
                        {...register("course", { required: "Please select a course" })}
                        onClick={() => setIsOpen(!isOpen)}
                        onBlur={() => setIsOpen(false)}
                        className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 pr-10 text-white text-sm outline-none focus:border-white appearance-none"
                      >
                        {/* <option value="">Select a course</option> */}
                        {formFields.select.options.map((opt, idx) => (
                          <option
                            key={idx}
                            value={opt.value}
                            className="bg-black text-white"
                          >
                            {opt.text}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={18}
                        className={`absolute right-3 top-1/2 -translate-y-1/2 text-white transition-transform duration-300 pointer-events-none ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                    {/* {errors.course && (
                      <p className="text-red-500 text-xs mt-1">{errors.course.message}</p>
                    )} */}
                  </div>

                </div>

                {/* Message (optional) */}
                {/* <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    {formFields.textarea.label}
                  </label>
                  <textarea
                    placeholder={formFields.textarea.placeholder}
                    rows="3"
                    className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:border-white resize-none"
                  ></textarea>
                </div> */}

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    {formFields.textarea.label}
                  </label>
                  <textarea
                    placeholder={formFields.textarea.placeholder}
                    rows="3"
                    {...register("message", { required: "Message is required" })}
                    className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:border-white resize-none"
                  ></textarea>
                  {/* {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )} */}
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`${
                    loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#F75C3C] hover:bg-[#e44f30]"
                  } text-white px-8 py-2 rounded-full text-sm font-medium transition flex items-center justify-center cursor-pointer`}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    formFields.submitBtn.text
                  )}
                </button>


                {/* <button
                  type="submit"
                  className="bg-[#F75C3C] text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-[#e44f30] transition"
                >
                  {formFields.submitBtn.text}
                </button> */}
              </form>
            </div>
          </div>
        </div>

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
                  {/* <FaCommentDots className="text-white text-lg absolute top-[17px] left-[20px]" />
                  <FaPhoneAlt className="text-white text-lg absolute bottom-[10px] left-[11px]" /> */}
                </>
              )}
            </button>
        </div>



      </section>

      <section>
        <Footer />
      </section>

      

      <ToastContainer />
    </>
  );
};

export default Contact_Add;
