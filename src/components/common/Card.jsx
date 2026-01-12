import React from 'react';

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;
