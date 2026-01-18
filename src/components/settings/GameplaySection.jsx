import React from "react";
import Button from "../common/Button.jsx";
import { Clock, Save } from "lucide-react";

const GameplaySection = ({ bonusTime, setBonusTime, onSaveSettings }) => {
  return (
    <section className="md:col-span-2 lg:col-span-1">
      <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 ml-1">
        Gameplay
      </h2>
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-6 h-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-white text-lg">
                Bonus Time
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Reward per answer
              </p>
            </div>
          </div>
          <span className="text-3xl font-black text-purple-600 dark:text-purple-400">
            {bonusTime}s
          </span>
        </div>

        <div className="mt-auto">
          <input
            type="range"
            min="1"
            max="10"
            value={bonusTime}
            onChange={(e) => setBonusTime(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600 mb-2"
          />
          <div className="flex justify-between text-xs font-bold text-slate-300 dark:text-slate-600 mb-4 px-1">
            <span>1s</span>
            <span>10s</span>
          </div>

          <Button onClick={onSaveSettings} className="w-full gap-2">
            <Save size={18} /> Save Settings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameplaySection;
