import React from 'react';
import { Clock } from 'lucide-react';

const TimerBar = ({ timeLeft, totalTime = 30 }) => {
  // Calculate percentage
  const percentage = Math.max(0, (timeLeft / totalTime) * 100);

  let barColor = "bg-emerald-500 shadow-emerald-500/50";
  let textColor = "text-slate-600 dark:text-slate-300";
  let containerAnimation = "";

  if (percentage < 50) {
    barColor = "bg-amber-500 shadow-amber-500/50";
  }

  if (percentage < 20) {
    barColor = "bg-rose-500 shadow-rose-500/50";
    textColor = "text-rose-600 font-bold animate-pulse";
  }

  if (percentage < 10) {
    containerAnimation = "animate-pulse"; 
  }

  return (
    <div className={`w-full mb-4 ${containerAnimation}`}>
      <div className="flex justify-between items-end mb-1 px-1">
        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">
          Time Remaining
        </span>
        <div className={`flex items-center gap-1.5 ${textColor} transition-colors duration-300`}>
          <Clock size={14} strokeWidth={2.5} />
          <span className="font-mono text-lg font-black leading-none">
            {timeLeft}s
          </span>
        </div>
      </div>

      <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner relative border border-black/5 dark:border-white/5">
        
        <div 
          className={`h-full transition-all duration-1000 ease-linear ${barColor} relative`}
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/40 to-transparent rounded-t-full" />
          

          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default TimerBar;
