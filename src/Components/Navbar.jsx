import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navbarData } from "../DB/db"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { logo, menuLinks, ctaButton } = navbarData;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1100] bg-transparent backdrop-blur-md text-white px-4  sm:px-6 py-4 sm:py-5 md:px-10 md:py-4 lg:px-23 lg:py-3 2xl:px-77 2xl:py-3  flex items-center justify-between">
      {/* Logo */}
      <div
        className="text-2xl font-extrabold tracking-widest relative z-[1110] cursor-pointer md:w-auto"
        onClick={() => navigate("/")}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className="w-28 md:w-32 filter brightness-0 invert"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 md:space-x-8 text-sm md:text-sm 2xl:text-[20px] font-medium relative z-[1000]">
        {menuLinks.map((link, i) => (
          <Link key={i} to={link.path} className="hover:text-gray-300 transition">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:block relative z-[1110]">
        <Link
          to={ctaButton.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white px-4 py-2 md:px-5 md:py-2 rounded-full text-sm md:text-base font-semibold transition"
          style={{ backgroundColor: ctaButton.bgColor }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = ctaButton.hoverColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = ctaButton.bgColor)}
        >
          {ctaButton.text}
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        className="md:hidden focus:outline-none relative z-[1110]"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="
            absolute top-full left-1/2 transform -translate-x-1/2 mt-3
            w-[85%] max-w-sm bg-black/60 backdrop-blur-lg
            rounded-2xl flex flex-col items-center space-y-4
            py-6 px-4 text-center text-base font-semibold
            md:hidden shadow-lg z-[1200]
          "
        >
          {menuLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-gray-300 transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            onClick={() => window.open(ctaButton.link, "_blank")}
            className="text-white px-6 py-2 rounded-full text-sm font-semibold transition"
            style={{ backgroundColor: ctaButton.bgColor }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = ctaButton.hoverColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = ctaButton.bgColor)}
          >
            {ctaButton.text}
          </Link>
        </div>
      )}
    </nav>


  );
};

export default Navbar;

