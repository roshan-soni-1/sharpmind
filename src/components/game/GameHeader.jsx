import React from "react";
import { Clock, Trophy } from "lucide-react";

const GameHeader = ({ timeLeft, score, showPoint, totalTime }) => {
  // Calculate percentage
  const percentage = Math.max(0, (timeLeft / totalTime) * 100);

  // color logic
  let statusColor = "bg-emerald-500 text-emerald-600"; // Safe
  if (percentage < 50) statusColor = "bg-amber-500 text-amber-600"; 
  if (percentage < 20) statusColor = "bg-rose-500 text-rose-600"; 

  const barColor = statusColor.split(" ")[0];
  const textColor = statusColor.split(" ")[1];

  return (
    <div className="w-full px-4 pt-6 pb-2">
      <div className="flex justify-between items-end mb-3">
        
        {/* Timer */}
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 ${percentage < 20 ? 'animate-pulse' : ''}`}>
            <Clock size={20} className={percentage < 20 ? "text-rose-500" : "text-slate-600 dark:text-slate-400"} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Time</span>
            <span className={`text-2xl font-mono font-black ${percentage < 20 ? 'text-rose-500' : 'text-slate-700 dark:text-white'}`}>
              {timeLeft}s
            </span>
          </div>
        </div>

        {/* Score Section */}
        <div className="relative flex items-center gap-3">
          {/* Floating Point Animation */}
          {showPoint && (
            <div className="absolute -top-8 right-0 animate-bounce-custom pointer-events-none z-10">
              <span className="text-2xl font-black text-emerald-500 drop-shadow-sm">+1</span>
            </div>
          )}

          <div className="flex flex-col items-end leading-none">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Score</span>
            <span className="text-3xl font-black text-slate-800 dark:text-white transition-all duration-200">
              {score}
            </span>
          </div>
          <div className="p-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 shadow-sm border border-yellow-200 dark:border-yellow-700">
            <Trophy size={20} fill="currentColor" className="opacity-90" />
          </div>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner relative">
        {/* The Moving Bar */}
        <div
          className={`h-full ${barColor} transition-all duration-1000 ease-linear rounded-full relative overflow-hidden`}
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute top-0 left-0 right-0 h-[40%] bg-white opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
