import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="
    min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300
    ">
      <div className="
        max-w-md mx-auto min-h-screen bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xl overflow-hidden
      ">
        {children}
      </div>
    </div>
  );
};

export default Layout;