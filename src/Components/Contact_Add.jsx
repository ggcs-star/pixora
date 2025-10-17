import React from "react";
import Navbar from "./Navbar";
import { FaWhatsapp } from "react-icons/fa";
import { contactHeroData, locationData, hoursData, dialData, formFields, whatsappData } from "../DB/db";
import Footer from "./Footer";

const Contact_Add = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className={`relative w-full min-h-[30vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-center overflow-hidden bg-gradient-to-b ${contactHeroData.bgGradient} border-b-2 2xl:min-h-[9vh]`} 
      >
        <Navbar />
        <div className="max-w-5xl mt-20 sm:mt-28 2xl:mb-[2rem]">
          <h1 className="text-white font-bold text-5xl sm:text-6xl">{contactHeroData.title}</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12" style={{
          borderBottom: "2px solid",
          borderImage: "linear-gradient(to right, #442485, #8A1367, #FB2F5C, #F08540) 1",
      }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 2xl:max-w-7xl">
          {/* Left Column */}
          <div className="space-y-6">
              {/* Location Box */}
              <div className="bg-[#161618] p-6 rounded-2xl">
                <h3 className="text-gray-300 text-sm mb-2">{locationData.heading}</h3>
                <p className="text-white text-sm sm:text-base leading-relaxed mb-4">{locationData.address}</p>
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.6381147657535!2d72.60268687588328!3d23.11033971304619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83ceb52317b7%3A0xdcf681b779eb48b6!2sGlobal%20Garner%20Sales%20Services%20Limited!5e0!3m2!1sen!2sin!4v1760683501962!5m2!1sen!2sin"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>

            {/* Hours Box */}
            <div className="bg-[#1A1A1A] p-6 rounded-2xl">
              <h3 className="text-gray-300 text-sm mb-2">{hoursData.heading}</h3>
              <p className="text-white text-sm sm:text-base leading-relaxed w-40">{hoursData.timings}</p>
            </div>
          </div>

        {/* Right Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Dial Section */}
          <div className="w-full bg-[#161618] rounded-2xl flex justify-center items-center py-5 px-4">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <img className={`w-17 ${dialData.rotate}`} src={dialData.img} alt="Dial" />
              <span className="text-2xl sm:text-3xl font-bold">{dialData.phone}</span>
            </div>
          </div>
          

          {/* Send a Message Section */}
          <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-white">Send a Message</h3>

            <form className="space-y-9 2xl:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {formFields.inputs.map((input, idx) => (
                    <div key={idx}>
                      <label className="block text-sm text-gray-300 mb-1">{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        className="w-full bg-transparent border text-white border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:border-white"
                      />
                    </div>
                  ))}

                  {/* Course of Interest next to Email */}
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">{formFields.select.label}</label>
                    <select className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 text-white text-sm outline-none focus:border-white appearance-none">
                      {formFields.select.options.map((opt, idx) => (
                        <option key={idx} value={opt.value} className="bg-black text-white">
                          {opt.text}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">{formFields.textarea.label}</label>
                  <textarea
                    placeholder={formFields.textarea.placeholder}
                    rows="3"
                    className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:border-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#F75C3C] text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-[#e44f30] transition"
                >
                  {formFields.submitBtn.text}
                </button>
            </form>


          </div>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <a
        href={whatsappData.link}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-3 bg-[#00FF6F] hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-50 transition transform hover:scale-110 2xl:p-3 3xl:p-8 4k:p-10"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-3 h-3 text-white sm:w-5 sm:h-5 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4k:w-14 4k:h-14" />
      </a>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Contact_Add;
