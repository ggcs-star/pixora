import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";
import Button from './Button';

// Contact Section Function
function Contact() {
    return (
        // Contact Section Start
          <section className="bg-[#0f102f] text-white py-12 px-4 md:px-22  section ">

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

                            <label className="text-white text-sm 2xl:text-xl font-poppins font-semibold">Mobile</label>

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
                          className="bg-[#00FF84] hover:bg-[#00cc6b] text-black  
                          px-6 py-3  transition
                          w-[12rem]              
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
                    <div className="bg-[#0f102f] p-8 space-y-4">
                      
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
        // Contact Section End
    );
}

export default Contact;
