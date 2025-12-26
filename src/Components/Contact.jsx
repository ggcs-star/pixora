import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { contactData, dialData } from "../DB/db";
import { ChevronDown } from "lucide-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendContact } from "../DB/api";


function Contact({  }) {

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, reset,} = useForm({ mode: "onChange", });


  // const onSubmit = async (data) => {
  //   try {
  //     const payload = {
  //       name: data.name,
  //       mobile: data.mobile,
  //       email: data.email,
  //       course_of_interest: data.course,
  //       message: data.message,
  //     };

  //     const response = await axios.post("http://192.168.0.111:8000/api/contact", payload);
  //     console.log("Response:", response);

  //     if (response.data.success) {
  //       // Show backend message in toast
  //       toast.success(response.data.message, {
  //         position: "top-right",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         theme: "colored",
  //       });

  //       // Reset form fields after success
  //       reset();
  //     } else {
  //       toast.error(response.data.message || "Something went wrong. Please try again.", {
  //         position: "top-right",
  //         autoClose: 3000,
  //         theme: "colored",
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     if (error.response && error.response.data && error.response.data.message) {
  //       toast.error(error.response.data.message, {
  //         position: "top-right",
  //         autoClose: 3000,
  //         theme: "colored",
  //       });
  //     } else {
  //       toast.error("Server error! Please try again later.", {
  //         position: "top-right",
  //         autoClose: 3000,
  //         theme: "colored",
  //       });
  //     }
  //   }
  // };

  // const onSubmit = async (data) => {
  //     try {
  //       const payload = {
  //         name: data.name,
  //         mobile: data.mobile,
  //         email: data.email,
  //         course_of_interest: data.course,
  //         message: data.message,
  //       };
  
  //       const response = await sendContact(payload);
  //       console.log('Send Contact Form Response:', response);
  
  //       if (response?.data?.success) {
  //         toast.success(response.data.message, {
  //           position: "top-right",
  //           autoClose: 3000,
  //           theme: "colored",
  //         });
  //         reset();
  //       } else {
  //         toast.error(response?.data?.message || "Failed to send. Try again later.", {
  //           position: "top-right",
  //           autoClose: 3000,
  //           theme: "colored",
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //       const msg =
  //         error?.response?.data?.message ||
  //         (error?.code === "ECONNABORTED"
  //           ? "Request timed out. Please try again."
  //           : "Server error! Please try again later.");
  //       toast.error(msg, {
  //         position: "top-right",
  //         autoClose: 3000,
  //         theme: "colored",
  //       });
  //     }
  // };


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
      

        <section className="bg-[#161618] text-white py-12 px-4 md:px-22 section">
          
          <div className="grid grid-cols-1 md:grid-cols-3  rounded-lg overflow-hidden 2xl:max-w-[80rem] 2xl:mx-auto 2xl:py-24 3xl:max-w-[120rem] 3xl:px-20 4k:max-w-[150rem] 4k:px-24 justify-center">
          
                {/* Contact Form Start */}
                <form  onSubmit={handleSubmit(onSubmit)} noValidate  className="md:col-span-2 bg-transparent md:border-r md:border-gray-600  p-6 sm:p-8 space-y-6 w-full max-w-full md:max-w-4xl 2xl:max-w-[900px] 2xl:mx-auto 2xl:px-0 2xl:pr-[2rem]">
                  
                    <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-poppins font-semibold text-white">
                      {contactData.form.heading}
                    </h2>

                    {/* Name + Mobile */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                        {/* Name */}
                        <div className="flex flex-col space-y-1">
                            
                            <label className="text-gray-300 text-sm sm:text-sm 2xl:text-xl font-poppins font-semibold">
                              {contactData.form.fields[0].label}
                            </label>
                            
                            <input
                              type="text"
                              placeholder={contactData.form.fields[0].placeholder}
                              {...register("name", {
                                required: "Name is required",
                                pattern: {
                                  value: /^[A-Za-z\s]+$/,
                                  message: "Enter a valid name (letters only)",
                                },
                              })}
                              className={`w-full p-2 pl-3 rounded-md border ${
                                errors.name ? "border-red-500" : "border-gray-600"
                              } bg-transparent text-white placeholder-gray text-sm sm:text-sm 2xl:text-xl font-normal`}
                            />
                            {errors.name && (
                              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                            )}

                        </div>

                        {/* Mobile */}
                        <div className="flex flex-col space-y-1">
                          
                          <label className="text-gray-300 text-sm sm:text-sm 2xl:text-xl font-poppins font-semibold">
                            {contactData.form.fields[1].label}
                          </label>
                          
                          <input
                            type="text"
                            placeholder={contactData.form.fields[1].placeholder}
                            {...register("mobile", {
                              required: "Mobile number is required",
                              pattern: {
                                value: /^[6-9]\d{9}$/,
                                message: "Enter a valid 10-digit mobile number",
                              },
                            })}
                            className={`w-full p-2 pl-3 rounded-md border ${
                              errors.mobile ? "border-red-500" : "border-gray-600"
                            } bg-transparent text-white placeholder-gray text-sm sm:text-sm 2xl:text-xl font-semibold`}
                          />
                          {errors.mobile && (
                            <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
                          )}
                        </div>

                    </div>

                    {/* Email + Select */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        {/* Email */}
                        <div className="flex flex-col space-y-1">
                            <label className="text-gray-300 text-sm sm:text-sm 2xl:text-xl font-poppins font-semibold">
                              {contactData.form.fields[2].label}
                            </label>
                            <input
                              type="email"
                              placeholder={contactData.form.fields[2].placeholder}
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: "Enter a valid email address",
                                },
                              })}
                              className={`w-full p-2 pl-3 rounded-md border ${
                                errors.email ? "border-red-500" : "border-gray-600"
                              } bg-transparent text-white placeholder-gray text-sm sm:text-sm 2xl:text-xl font-semibold`}
                            />
                            {errors.email && (
                              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Course (optional) */}
                        <div className="relative">
                          <label className="text-gray-300  text-sm sm:text-sm 2xl:text-xl font-poppins font-semibold"> 
                            {contactData.form.fields[3].label} 
                          </label>
                          <select
                            className="w-full p-2 pl-3 mt-0 pr-10 rounded-md border border-gray-600 bg-transparent text-gray-300 text-sm sm:text-sm 2xl:text-xl 2xl:mt-1 font-semibold outline-none focus:border-white appearance-none"
                            {...register("course")}
                            onClick={() => setIsOpen(!isOpen)}
                            onBlur={() => setIsOpen(false)}
                          >
                            {contactData.form.fields[3].options.map((option) => (
                              <option
                                key={option}
                                className="bg-black text-[#D1D1D1]"
                                value={option === 'Select' ? '' : option}
                              >
                                {option}
                              </option>
                            ))}
                          </select>

                          {/* Chevron icon */}
                          <ChevronDown
                            size={20}
                            className={`absolute right-3 top-[55%]  translate-y-2/13 text-white transition-transform duration-300 pointer-events-none ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </div>

                    </div>

                    {/* Message (optional) */}
                    <div className="flex flex-col space-y-1">

                        <label className="text-gray-300 text-sm sm:text-base 2xl:text-xl font-poppins font-semibold">
                          {contactData.form.fields[4].label}
                        </label>
                        <textarea
                          placeholder={contactData.form.fields[4].placeholder}
                          {...register("message")}
                          className="w-full p-2 pl-3  rounded-md border border-gray-600 bg-transparent text-gray placeholder-gray text-sm sm:text-sm 2xl:text-xl font-semibold min-h-[120px] md:min-h-[150px]"
                        />

                    </div>

                  {/* Submit Button */}
                  {/* <button
                    type="submit"
                    className={`bg-[${contactData.form.submitButton.bgColor}] hover:bg-[${contactData.form.submitButton.hoverBgColor}] ${contactData.form.submitButton.textColor} px-6 py-3 sm:px-8 sm:py-3 rounded-3xl font-poppins font-semibold text-sm sm:text-base 2xl:text-lg w-full md:w-auto transition`}
                  >
                    {contactData.form.submitButton.text}
                  </button> */}

                  <button
                    type="submit"
                    disabled={loading}
                    className={`${
                      loading
                        ? "bg-gray-500 cursor-not-allowed"
                        : `bg-[${contactData.form.submitButton.bgColor}] hover:bg-[${contactData.form.submitButton.hoverBgColor}]`
                    } ${contactData.form.submitButton.textColor} px-6 py-3 sm:px-8 sm:py-3 rounded-3xl font-poppins font-semibold text-sm sm:text-base 2xl:text-lg w-full md:w-auto transition flex items-center justify-center cursor-pointer hover:bg-[#e44f30] `}
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
                      contactData.form.submitButton.text
                    )}
                  </button>
                  
                </form>
                {/* Contact Form End */}

                {/* Right Side Content Start */}
                <div className="bg-[#161618] p-8 space-y-4">
                  
                      <h2 className="text-2xl sm:text-2xl md:text-sm lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold font-poppins">
                        {contactData.contactInfo.heading}
                      </h2>

                      <p className="text-gray-300 text-sm sm:text-base md:text-sm  lg:text-sm 2xl:text-xl font-semibold font-poppins">
                        {contactData.contactInfo.paragraph}
                      </p>

                      <div>
                        <span className="font-semibold text-[#A9A9A9] text-sm sm:text-base md:text-sm lg:text-lg 2xl:text-xl">
                          Email:
                        </span>
                        <p className="text-white text-xl sm:text-2xl md:text-xs lg:text-2xl 2xl:text-3xl font-semibold font-poppins">
                          {contactData.contactInfo.email}
                        </p>
                      </div>

                      <div>
                        <span className="font-semibold text-[#A9A9A9] text-sm sm:text-base md:text-sm lg:text-lg 2xl:text-xl">
                          Chat on whatsapp:
                        </span> <br />
                        <a  href={`tel:${dialData.phone.replace(/\s+/g, '')}`}  className="text-white text-xl sm:text-2xl md:text-xs lg:text-2xl 2xl:text-3xl font-poppins font-semibold hover:text-[#F75C3C]">
                          {dialData.phone}
                        </a>
                      </div>

                      <p className="mb-[-1rem] text-xs sm:text-sm md:text-xs text-[#989898] font-semibold">
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
        
        </section>

        <ToastContainer />


    </>
  );
}

export default Contact;
