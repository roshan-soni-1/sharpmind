import React from 'react';

const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  const baseStyle = "transform active:scale-95 transition-transform duration-150 rounded-xl shadow-md font-bold flex flex-col items-center justify-center p-4 transition-colors";
  
  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800",
    secondary: "bg-blue-500 text-white",
    
    // Normal 
    option: "bg-blue-600 text-white text-xl h-24 hover:bg-blue-700 shadow-lg border-b-4 border-blue-800",
    
    // correct answer
    correct: "bg-green-500 text-white text-xl h-24 border-b-4 border-green-700 shadow-lg",
    
    // incorrect answer
    wrong: "bg-red-500 text-white text-xl h-24 border-b-4 border-red-700 shadow-lg",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
