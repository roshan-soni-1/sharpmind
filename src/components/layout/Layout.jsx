import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light via-blue-400 to-white font-sans text-gray-800">
      <div className="max-w-md mx-auto min-h-screen shadow-2xl bg-gray-50 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

export default Layout;
