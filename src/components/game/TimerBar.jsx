import React from 'react';

const TimerBar = ({ timeLeft, totalTime = 30}) => {
  const percentage = (timeLeft / totalTime) * 100;

  let barColor = "bg-blue-600";
  let barAnimation = "";

  if (percentage < 50) {
    barColor = "bg-yellow-500";
    barAnimation = "animate-pulse";
  }

  if (percentage < 20) {
    barColor = "bg-red-600";
    barAnimation = "animate-bounce";
  }
  
  if (percentage <5) {
    barColor = "bg-red-700"
    barAnimation = "animate-shake";
  }

  return (
    <div className="bg-blue-400/30 rounded-lg p-2 mb-2">
      <div className="h-2 w-full bg-blue-200 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ease-linear ${barColor} ${barAnimation}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div
        className={`text-center font-bold text-white mt-1 text-sm transition-transform duration-300 ${
          percentage < 90 ? "scale-300 text-red-100" : "scale-100"
        }`}
      >
        {timeLeft}s
      </div>
    </div>
  );
};

export default TimerBar;