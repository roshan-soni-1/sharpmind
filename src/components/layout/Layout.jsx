import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="
        min-h-screen 
        mx-auto 
        w-full 
        max-w-7xl  /* Changed to 7xl for full desktop width */
        px-4 sm:px-6 lg:px-8 /* Adds nice spacing on sides */
        bg-white dark:bg-slate-900 
        text-slate-900 dark:text-slate-100 
        shadow-2xl 
        overflow-x-hidden
      ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
