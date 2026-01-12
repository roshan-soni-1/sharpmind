import React from "react";
import Button from "../common/Button";

const OptionsGrid = ({ options, onSelect, getVariant }) => {
  return (
    
    <div className="grid grid-cols-2 gap-4 pb-6">
      {options.map((opt, i) => (
        <Button
          key={i}
          variant={getVariant(opt)}
          onClick={() => onSelect(opt)}
        >
          {opt}
        </Button>
      ))}
    </div>
  );
};

export default OptionsGrid;