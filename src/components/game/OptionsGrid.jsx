import React from "react";
import Button from "../common/Button";

const OptionsGrid = ({ options, onSelect, getVariant, disabled }) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md mx-auto pb-6">
      {options.map((opt, i) => (
        <Button
          key={i}
          variant={getVariant(opt)}
          disabled={disabled}
          onClick={() => !disabled && onSelect(opt)}
          className={`
            text-3xl sm:text-4xl font-mono font-bold 
            transition-all duration-200
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
