// import React from "react";
// import {
//     FaFacebookF,
//     FaInstagram,
//     FaYoutube,
//     FaLinkedinIn,
// } from "react-icons/fa";
// import Button from './Button';

// // Contact Section Function
// function Contact() {
//     return (
//         // Contact Section Start
//           <section className="bg-[#161618] text-white py-12 px-4 md:px-22   section">

//               <div className="grid grid-cols-1 md:grid-cols-3 rounded-lg overflow-hidden 2xl:max-w-[80rem] 2xl:mx-auto 2xl:py-24  3xl:max-w-[120rem] 3xl:px-20 
//                     4k:max-w-[150rem] 4k:px-24 justify-center">

//                     {/* Contact Form Start - Left Side Content*/}
//                     <form
//                       className="
//                         md:col-span-2 bg-transparent md:border-r md:border-gray-600
//                         p-6 sm:p-8 space-y-6 w-full max-w-full md:max-w-4xl
//                         2xl:max-w-[900px] 2xl:mx-auto 2xl:px-0 2xl:pr-[2rem]
//                       "
//                     >
//                       {/* Header */}
//                       <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-poppins font-semibold text-white">
//                         Send a Message
//                       </h2>

//                       {/* Name & Mobile */}
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="flex flex-col space-y-1">
//                           <label className="text-white text-sm sm:text-base 2xl:text-xl font-poppins font-semibold">Name</label>
//                           <input
//                             type="text"
//                             name="name"
//                             placeholder="Enter your name"
//                             className="w-full p-2 pl-3 rounded-md border border-[#A9A9A9] bg-transparent text-white placeholder-[#D1D1D1] text-sm sm:text-base 2xl:text-xl font-semibold"
//                           />
//                         </div>
//                         <div className="flex flex-col space-y-1">
//                           <label className="text-white text-sm sm:text-base 2xl:text-xl font-poppins font-semibold">Mobile</label>
//                           <input
//                             type="text"
//                             name="mobile"
//                             placeholder="Enter your mobile number"
//                             className="w-full p-2 pl-3 rounded-md border border-[#A9A9A9] bg-transparent text-white placeholder-[#D1D1D1] text-sm sm:text-base 2xl:text-xl font-semibold"
//                           />
//                         </div>
//                       </div>

//                       {/* Email & Course */}
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                         <div className="flex flex-col space-y-1">
//                           <label className="text-white text-sm sm:text-base 2xl:text-xl font-poppins font-semibold">Email</label>
//                           <input
//                             type="email"
//                             name="email"
//                             placeholder="Enter your email address"
//                             className="w-full p-2 pl-3 rounded-md border border-[#A9A9A9] bg-transparent text-white placeholder-[#D1D1D1] text-sm sm:text-base 2xl:text-xl font-semibold"
//                           />
//                         </div>
//                         <div className="flex flex-col space-y-1">
//                           <label className="text-white text-sm sm:text-base 2xl:text-xl font-poppins font-semibold">Course of Interest</label>
//                           <select className="w-full p-2 pl-3 rounded-md border border-[#A9A9A9] bg-transparent text-white text-sm sm:text-base 2xl:text-xl font-semibold">
//                             <option className="bg-black text-[#D1D1D1]" value="">Select</option>
//                             <option className="bg-black" value="UI/UX">UI/UX</option>
//                             <option className="bg-black" value="Graphic Design">Graphic Design</option>
//                           </select>
//                         </div>
//                       </div>

//                       {/* Message */}
//                       <div className="flex flex-col space-y-1">
//                         <label className="text-white text-sm sm:text-base 2xl:text-xl font-poppins font-semibold">Message</label>
//                         <textarea
//                           name="message"
//                           placeholder="Write here..."
//                           className="w-full p-2 pl-3 rounded-md border border-[#A9A9A9] bg-transparent text-white placeholder-[#D1D1D1] text-sm sm:text-base 2xl:text-xl font-semibold min-h-[120px] md:min-h-[150px]"
//                         />
//                       </div>

//                       {/* Submit Button */}
//                       <button
//                         type="submit"
//                         className="bg-[#F5614C] hover:bg-[#00cc6b] text-white px-6 py-3 sm:px-8 sm:py-3 rounded-3xl font-poppins font-semibold text-sm sm:text-base 2xl:text-lg w-full md:w-auto transition"
//                       >
//                         Submit
//                       </button>
//                     </form>


//                     {/* Contact Form End */}

//                     {/* Right Side Content Start */}
//                     <div className="bg-[#161618] p-8 space-y-4 ">
                      
//                       {/* Header of Right Side Content */}
//                       <h2 className="text-2xl font-semibold font-poppins 2xl:text-4xl">
//                         Get in touch with us
//                       </h2>
                      
//                       {/* Paragraph of Right Side Content */}
//                       <p className="text-gray-300 text-sm 2xl:text-xl font-semibold font-poopins">
//                         Your future in design is just one form away. <br /> Don’t ghost us.
//                       </p>

//                       <div>
//                         {/* Right Side Content - Email */}
//                         <span className="font-semibold text-[#A9A9A9] text-sm 2xl:text-xl">
//                           Email:
//                         </span>

//                         <p className="text-white text-2xl 2xl:text-3xl font-semibold font-poppins">info@pixsora.com</p>

//                       </div>

//                       <div>
//                           {/* Chat on Whatsapp - Right Side Content */}
//                           <span className="font-semibold text-[#A9A9A9] text-sm 2xl:text-xl">
//                             Chat on whatsapp:
//                           </span>
//                           {/* Mobile Number of Right Side Content */}
//                           <p className="text-white 2xl:text-3xl text-2xl font-poppins font-semibold">+91 88845 18448</p>

//                       </div>

//                       {/* Social Icons Start*/}
//                       <p className="mb-[-1rem] text-sm text-[#989898] font-semibold">We're social too</p>
//                       <div
//                         className="flex space-x-3 mt-6 
//                             2xl:space-x-6 2xl:mt-8 
//                             4k:space-x-8 4k:mt-10"
//                       >
                        
//                         {/* Facebook Icon */}
//                         <a
//                           href="https://facebook.com"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 rounded-full bg-blue-600 
//                           hover:bg-blue-700 transition transform hover:scale-110
//                           2xl:p-4 4k:p-5"
//                         >
//                           <FaFacebookF
//                             className="text-white text-lg 
//                                       2xl:text-3xl 4k:text-5xl"
//                           />
//                         </a>
//                         {/*Instagram Icon */}
//                         <a
//                           href="https://instagram.com"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 
//                           hover:opacity-90 transition transform hover:scale-110
//                           2xl:p-4 4k:p-5"
//                         >
//                           <FaInstagram
//                             className="text-white text-lg 
//                                         2xl:text-3xl 4k:text-5xl"
//                           />
//                         </a>
//                         {/* Youtube Icon */}
//                         <a
//                           href="https://youtube.com"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 rounded-full bg-red-600 
//                           hover:bg-red-700 transition transform hover:scale-110
//                           2xl:p-4 4k:p-5"
//                         >
//                           <FaYoutube
//                             className="text-white text-lg 
//                                       2xl:text-3xl 4k:text-5xl"
//                           />
//                         </a>
                        
//                         {/* LinkedIn Icon */}
//                         <a
//                           href="https://linkedin.com"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 rounded-full bg-blue-700 
//                           hover:bg-blue-800 transition transform hover:scale-110
//                           2xl:p-4 4k:p-5"
//                         >
//                           <FaLinkedinIn
//                             className="text-white text-lg 
//                                         2xl:text-3xl 4k:text-5xl"
//                           />
//                         </a>

//                       </div>
//                       {/* Social Icons End */}
                      
//                     </div>
//                     {/* Right Side Content End */}

//               </div>

//         </section>
//         // Contact Section End
//     );
// }

// export default Contact;

import { contactData } from '../DB/db'; 

function Contact() {
      return (
        // Contact Section Start
        <section className="bg-[#161618] text-white py-12 px-4 md:px-22 section">
            <div className="grid grid-cols-1 md:grid-cols-3 rounded-lg overflow-hidden 2xl:max-w-[80rem] 2xl:mx-auto 2xl:py-24 3xl:max-w-[120rem] 3xl:px-20 4k:max-w-[150rem] 4k:px-24 justify-center">
              {/* Contact Form Start - Left Side Content */}
              <form
                  className="
                      md:col-span-2 bg-transparent md:border-r md:border-gray-600
                      p-6 sm:p-8 space-y-6 w-full max-w-full md:max-w-4xl
                      2xl:max-w-[900px] 2xl:mx-auto 2xl:px-0 2xl:pr-[2rem]
                  "
              >
                  {/* Header */}
                  <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-poppins font-semibold text-white">
                      {contactData.form.heading}
                  </h2>

                  {/* Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {contactData.form.fields.slice(0, 2).map((field, i) => (
                          <div key={field.name} className="flex flex-col space-y-1">
                              <label className="text-white text-sm sm:text-base 2xl:text-xl font-poppins font-semibold">{field.label}</label>
                              <input
                                  type={field.type}
                                  name={field.name}
                                  placeholder={field.placeholder}
                                  className="w-full p-2 pl-3 rounded-md border border-[#A9A9A9] bg-transparent text-white placeholder-[#D1D1D1] text-sm sm:text-base 2xl:text-xl font-semibold"
                              />
                          </div>
                      ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email Input */}
                      <div className="flex flex-col space-y-1">
                          <label className="text-white text-sm sm:text-base 2xl:text-xl font-poppins font-semibold">{contactData.form.fields[2].label}</label>
                          <input
                              type={contactData.form.fields[2].type}
                              name={contactData.form.fields[2].name}
                              placeholder={contactData.form.fields[2].placeholder}
                              className="w-full p-2 pl-3 rounded-md border border-[#A9A9A9] bg-transparent text-white placeholder-[#D1D1D1] text-sm sm:text-base 2xl:text-xl font-semibold"
                          />
                      </div>
                      {/* Select Input */}
                      <div className="flex flex-col space-y-1">
                          <label className="text-white text-sm sm:text-base 2xl:text-xl font-poppins font-semibold">{contactData.form.fields[3].label}</label>
                          <select className="w-full p-2 pl-3 rounded-md border border-[#A9A9A9] bg-transparent text-white text-sm sm:text-base 2xl:text-xl font-semibold">
                              {contactData.form.fields[3].options.map((option, i) => (
                                  <option key={option} className="bg-black text-[#D1D1D1]" value={option === "Select" ? "" : option}>
                                      {option}
                                  </option>
                              ))}
                          </select>
                      </div>
                  </div>
                  {/* Message */}
                  <div className="flex flex-col space-y-1">
                      <label className="text-white text-sm sm:text-base 2xl:text-xl font-poppins font-semibold">{contactData.form.fields[4].label}</label>
                      <textarea
                          name={contactData.form.fields[4].name}
                          placeholder={contactData.form.fields[4].placeholder}
                          className="w-full p-2 pl-3 rounded-md border border-[#A9A9A9] bg-transparent text-white placeholder-[#D1D1D1] text-sm sm:text-base 2xl:text-xl font-semibold min-h-[120px] md:min-h-[150px]"
                      />
                  </div>
                  {/* Submit Button */}
                  <button
                      type="submit"
                      className={`bg-[${contactData.form.submitButton.bgColor}] hover:bg-[${contactData.form.submitButton.hoverBgColor}] ${contactData.form.submitButton.textColor} px-6 py-3 sm:px-8 sm:py-3 rounded-3xl font-poppins font-semibold text-sm sm:text-base 2xl:text-lg w-full md:w-auto transition`}
                  >
                      {contactData.form.submitButton.text}
                  </button>
              </form>
              {/* Contact Form End */}

                {/* Right Side Content Start */}
                <div className="bg-[#161618] p-8 space-y-4 ">

                  {/* Header of Right Side Content */}
                  <h2 className="text-2xl font-semibold font-poppins 2xl:text-4xl">
                      {contactData.contactInfo.heading}
                  </h2>

                  {/* Paragraph of Right Side Content */}
                  <p className="text-gray-300 text-sm 2xl:text-xl font-semibold font-poopins">
                      {contactData.contactInfo.paragraph}
                  </p>

                  <div>
                      {/* Right Side Content - Email */}
                      <span className="font-semibold text-[#A9A9A9] text-sm 2xl:text-xl">
                          Email:
                      </span>
                      <p className="text-white text-2xl 2xl:text-3xl font-semibold font-poppins">{contactData.contactInfo.email}</p>
                  </div>

                  <div>
                      {/* Chat on Whatsapp - Right Side Content */}
                      <span className="font-semibold text-[#A9A9A9] text-sm 2xl:text-xl">
                          Chat on whatsapp:
                      </span>
                      <p className="text-white 2xl:text-3xl text-2xl font-poppins font-semibold">{contactData.contactInfo.whatsapp}</p>
                  </div>

                  {/* Social Icons Start*/}
                  <p className="mb-[-1rem] text-sm text-[#989898] font-semibold">We're social too</p>
                  
                  <div className="flex space-x-3 mt-6 2xl:space-x-6 2xl:mt-8 4k:space-x-8 4k:mt-10">
                      {contactData.socialLinks.map((social, idx) => {
                          const Icon = social.icon;
                          return (
                              <a
                                  key={social.url}
                                  href={social.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`p-2 rounded-full ${social.bgColor} ${social.hoverBg} transition transform hover:scale-110 2xl:p-4 4k:p-5`}
                              >
                                  <Icon className="text-white text-lg 2xl:text-3xl 4k:text-5xl" />
                              </a>
                          );
                      })}
                  </div>
                  {/* Social Icons End */}
                </div>
              {/* Right Side Content End */}
            </div>
        </section>
        // Contact Section End
      );
}

export default Contact;
