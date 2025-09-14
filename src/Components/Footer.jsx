import React from "react";

const Footer = () => {
  return (

    // Footer Section Start
    <footer className="bg-[#00FF84] text-black py-3 section 2xl:p-[1%] ">

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8 lg:px-16 2xl:gap-[10%] 2xl:p-[1px]">
        
        {/* List of Items Start */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium">

          <li>

            <a href="#about" className=" hover:text-gray-800 transition-colors duration-200 2xl:text-xl font-poppins font-medium hover:no-underline">
              About
            </a>

          </li>


          <li>

            <a href="#courses" className=" hover:text-gray-800 transition-colors duration-200 2xl:text-xl font-poppins font-medium hover:no-underline">
              Courses
            </a>

          </li>


          <li>

            <a href="#whyChoose" className=" hover:text-gray-800 transition-colors duration-200 2xl:text-xl font-poppins font-medium hover:no-underline">
              Why Choose Us
            </a>

          </li>


          <li>
            
            <a href="#terms" className=" hover:text-gray-800 transition-colors duration-200 2xl:text-xl font-poppins font-medium hover:no-underline">
              Terms and Condition
            </a>

          </li>


          <li>
            <a href="#privacy" className=" hover:text-gray-800 transition-colors duration-200 2xl:text-xl font-poppins font-medium hover:no-underline">
              Privacy Policy
            </a>
          </li>
          
        </ul>
        {/* List of Items End */}


        {/* copy right section start */}
        <p className="text-sm font-medium text-center md:text-left 2xl:text-xl font-poppins ">
          Copyright © {new Date().getFullYear()} Pixora. All Rights Reserved
        </p>
        {/* copy right section end */}

      </div>

    </footer>
    // Footer Section End
  );
};

export default Footer;
