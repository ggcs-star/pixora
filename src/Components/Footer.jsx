import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-3 section">
      <div
        className="
          w-full 2xl:max-w-[1800px] mx-auto
          flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row
          justify-between items-center
          gap-2 md:gap-6 lg:gap-3 2xl:gap-4
          px-4 md:px-10 lg:px-16 2xl:px-0
        "
      >
        {/* Left Column */}
        <ul
          className="
            flex flex-wrap justify-center md:justify-start
            gap-3 md:gap-5 lg:gap-4 2xl:gap-5
            text-sm md:text-[15px] font-medium
            pl-12 md:pl-0 lg:pl-12 2xl:pl-[16rem]
          "
        >
          <li>
            <a
              href="/about"
              className="hover:text-gray-300 transition-colors duration-200 2xl:text-base font-poppins font-medium hover:no-underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/courses"
              className="hover:text-gray-300 transition-colors duration-200 2xl:text-base font-poppins font-medium hover:no-underline"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="/why-choose-us"
              className="hover:text-gray-300 transition-colors duration-200 2xl:text-base font-poppins font-medium hover:no-underline"
            >
              Why Choose Us
            </a>
          </li>
          <li>
            <a
              href="#terms"
              className="hover:text-gray-300 transition-colors duration-200 2xl:text-base font-poppins font-medium hover:no-underline"
            >
              Terms & Condition
            </a>
          </li>
          <li>
            <a
              href="#privacy"
              className="hover:text-gray-300 transition-colors duration-200 2xl:text-base font-poppins font-medium hover:no-underline"
            >
              Privacy Policy
            </a>
          </li>
        </ul>

        {/* Right Column */}
        <p
          className="
            text-sm md:text-[15px] lg:text-sm 2xl:text-base
            font-medium text-center md:text-right lg:text-left
            font-poppins
            md:pr-4 lg:pr-0 2xl:pr-[15rem]
          "
        >
          Copyright © {new Date().getFullYear()} Framisty. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
