import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../assets/404_Not_Found/404_Error page.svg";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <section className="w-full min-h-screen bg-[#000000] flex flex-col items-center justify-center text-center px-4">
      <img
        src={NotFoundImg}
        alt="Page Not Found"
        className="w-[300px] sm:w-[400px] md:w-[500px] mb-6"
      />
      <h1 className="text-white text-3xl sm:text-4xl font-bold mb-3">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-400 text-base sm:text-lg mb-6 max-w-md">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <button
        onClick={handleGoHome}
        className="bg-[#F5614C] hover:bg-[#E11D48] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer"
      >
        Go Back Home
      </button>
    </section>
  );
};

export default NotFound;
