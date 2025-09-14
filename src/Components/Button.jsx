import React from "react";

const Button = ({ children, variant = "primary", className = "", ...props }) => {

  const baseStyle = "px-6 py-2 rounded-full  font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {

    primary: "bg-green-500  hover:bg-green-600 focus:ring-green-400",
    secondary:
      "border border-gray-400  hover:bg-green-500 hover:text-white focus:ring-gray-500",

  };

    return (

      <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    
    );
};

export default Button;
