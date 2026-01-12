import React from "react";
import Button from "../common/Button";

const ResultModal = ({ score, onRestart }) => {
  const levels = [
    { min: 0, stars: 1, label: "Beginner" },
    { min: 11, stars: 2, label: "Rookie" },
    { min: 26, stars: 3, label: "Intermediate" },
    { min: 51, stars: 4, label: "Advanced" },
    { min: 81, stars: 5, label: "Expert" },
  ];

  const current = [...levels].reverse().find(l => score >= l.min);

  return (
    <div className="fixed inset-0 bg-blue-600 flex flex-col items-center justify-center text-white">
      
      {/* Stars */}
      <div className="flex gap-3 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className="w-12 h-12"
            fill={i < current.stars ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 2l3.1 6.3 7 1-5 4.9 1.2 7-6.2-3.3-6.2 3.3 1.2-7-5-4.9 7-1L12 2z" />
          </svg>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-8">Your Skill Level</h2>

      {/* Bottom Sheet */}
      <div className="bg-white text-blue-700 w-full max-w-md rounded-t-[3rem] px-8 py-10 flex flex-col items-center">
        
        <h1 className="text-4xl font-black uppercase tracking-wider mb-6">
          {current.label}
        </h1>

        <p className="font-bold text-lg mb-10 text-center">
          You scored <span className="text-blue-600">{score}</span> points.  
          <br />Keep improving 🚀
        </p>

        <div className="w-full space-y-4">
          <Button onClick={onRestart} className="w-full py-4 text-lg">
            Play Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;