import React from "react";
import TimerBar from "./TimerBar";

const GameHeader = ({ timeLeft, score, showPoint,totalTime }) => {
  return (
    <div className="p-4">
      <TimerBar timeLeft={timeLeft} totalTime={totalTime} />

      <div className="flex justify-end mt-2 relative">
        <span className="text-primary-dark font-bold text-xl bg-white/60 px-4 py-1 rounded-xl shadow">
          Points: {score}
        </span>

        {showPoint && (
          <span className="absolute -top-8 right-4 text-green-600 font-black text-2xl animate-bounce">
            +1
          </span>
        )}
      </div>
    </div>
  );
};

export default GameHeader;