import React from "react";
import Button from "../common/Button";

const OptionsGrid = ({ options, onSelect, getVariant, disabled }) => {
  return (
    // FIXED: gap-4 md:gap-5 (Tightened up the grid)
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full pb-6">
      {options.map((opt, i) => (
        <Button
          key={i}
          variant={getVariant(opt)}
          disabled={disabled}
          onClick={() => !disabled && onSelect(opt)}
          // FIXED: Reduced text size (text-2xl -> md:text-3xl)
          className={`
            text-2xl sm:text-3xl md:text-4xl font-mono font-bold 
            transition-all duration-200 w-full
            ${disabled ? 'cursor-default' : 'cursor-pointer active:scale-95'}
          `}
        >
          {opt}
        </Button>
      ))}
    </div>
  );
};

export default OptionsGrid;
