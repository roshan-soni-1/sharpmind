import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary", 
  disabled = false, 
  fullWidth = false 
}) => {
  
  const baseStyle = `
    relative flex items-center justify-center gap-2
    font-bold rounded-xl md:rounded-2xl transition-all duration-200 select-none
    disabled:cursor-not-allowed disabled:transform-none
    ${fullWidth ? 'w-full' : ''}
  `;

  const variants = {
    // Primary: Standard size
    primary: `
      bg-blue-600 text-white 
      shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-700 
      py-3 px-6 text-sm md:text-base
      active:scale-95
    `,
    
    ghost: `
      bg-transparent text-slate-500 dark:text-slate-400
      hover:bg-slate-100 dark:hover:bg-slate-800
      p-2 md:p-3 active:scale-95 rounded-full
    `,

    option: `
      bg-white dark:bg-slate-800 
      text-slate-700 dark:text-slate-200 
      border-2 border-slate-200 dark:border-slate-700 border-b-[4px] md:border-b-[6px]
      hover:bg-slate-50 dark:hover:bg-slate-700 
      active:border-b-2 active:translate-y-[4px]
      shadow-sm py-3 md:py-5
    `,

    // Correct Answer
    correct: `
      bg-green-500 text-white 
      border-2 border-green-600 border-b-[4px] md:border-b-[6px]
      transform translate-y-[4px] border-b-2 
      shadow-none py-3 md:py-5
    `,

    // Wrong Answer
    wrong: `
      bg-red-500 text-white 
      border-2 border-red-600 border-b-[4px] md:border-b-[6px]
      opacity-90 py-3 md:py-5
    `,
  };
  
  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyle} ${selectedVariant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
