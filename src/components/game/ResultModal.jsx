import React from "react";
import Button from "../common/Button";
import { Star, RotateCcw, Home } from "lucide-react";

const ResultModal = ({ score, onRestart, onHome }) => {
  
  // Skill level logic
  const levels = [
    { min: 0, stars: 1, label: "Beginner", color: "text-slate-600 dark:text-slate-400" },
    { min: 11, stars: 2, label: "Rookie", color: "text-blue-600 dark:text-blue-400" },
    { min: 26, stars: 3, label: "Intermediate", color: "text-green-600 dark:text-green-400" },
    { min: 51, stars: 4, label: "Advanced", color: "text-purple-600 dark:text-purple-400" },
    { min: 81, stars: 5, label: "Expert Master", color: "text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/30 px-4 py-1 rounded-full" },
  ];

  const current = [...levels].reverse().find(l => score >= l.min);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>

      {/* Modal Card */}
      <div className="relative bg-white dark:bg-slate-800 w-full max-w-sm rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
        
        {/* Header */}
        <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" 
                 style={{ 
                   backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                   backgroundSize: '20px 20px' 
                 }}>
            </div>
            <h2 className="text-white text-3xl font-black uppercase tracking-widest drop-shadow-md relative z-10">
                Game Over
            </h2>
        </div>

        {/* Content */}
        <div className="px-8 pt-8 pb-10 flex flex-col items-center text-center -mt-10 relative z-20">
          
          {/* Score Circle */}
          <div className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-xl mb-4">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/50 rounded-full flex flex-col items-center justify-center border-4 border-blue-500 dark:border-blue-400">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-300 uppercase leading-none">Score</span>
                <span className="text-5xl font-black text-slate-800 dark:text-white leading-tight">{score}</span>
              </div>
          </div>

          {/* Stars */}
          <div className="flex gap-2 mb-4">
            {[...Array(5)].map((_, i) => {
                const isFilled = i < current.stars;
                return (
                <Star
                    key={i}
                    size={32}
                    className={`transition-all duration-500 ${isFilled ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300 dark:text-slate-600'}`}
                />
                )
            })}
          </div>

          {/* Level Label */}
          <h3 className={`text-2xl font-black uppercase tracking-wider mb-2 ${current.color}`}>
            {current.label}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-8">
            Great effort! Keep training to reach the next level.
          </p>

          {/* Action Buttons */}
          <div className="w-full space-y-3">
            <Button onClick={onRestart} className="w-full py-3 text-lg gap-2">
              <RotateCcw size={20} /> Play Again
            </Button>
            
            {onHome && (
              <Button 
                variant="secondary" 
                onClick={onHome} 
                className="w-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 gap-2"
              >
                <Home size={18} /> Home
              </Button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResultModal;
