import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-3 section">
      <div className="w-full 2xl:max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-3 2xl:gap-4 px-4 md:px-8 lg:px-16 2xl:px-0">
        
        {/* List of Items Start */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4 2xl:gap-5 text-sm font-medium pl-12 2xl:pl-[16rem]">
          <li>
            <a href="/about" className="hover:text-gray-800 transition-colors duration-200 2xl:text-base font-poppins font-medium hover:no-underline">
              About
            </a>
          </li>
          <li>
            <a href="/courses" className="hover:text-gray-800 transition-colors duration-200 2xl:text-base font-poppins font-medium hover:no-underline">
              Courses
            </a>
          </li>
          <li>
            <a href="/why-choose-us" className="hover:text-gray-800 transition-colors duration-200 2xl:text-base font-poppins font-medium hover:no-underline">
              Why Choose Us
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-gray-800 transition-colors duration-200 2xl:text-base font-poppins font-medium hover:no-underline">
              Terms and Condition
            </a>
          </li>
          <li>
            <a href="#privacy" className="hover:text-gray-800 transition-colors duration-200 2xl:text-base font-poppins font-medium hover:no-underline">
              Privacy Policy
            </a>
          </li>
        </ul>
        {/* List of Items End */}

        {/* copy right section start */}
        <p className="text-sm font-medium text-center md:text-left 2xl:text-base font-poppins 2xl:pr-[15rem]">
          Copyright © {new Date().getFullYear()} Framisty. All Rights Reserved
        </p>
        {/* copy right section end */}
      </div>
    </footer>
  );
};

export default Footer;
