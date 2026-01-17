import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Greeting = () => {
  const [name, setName] = useState("");
  const [storedName, setStoredName] = useState(() => {
    return localStorage.getItem("userName");
  });

  const handleSave = () => {
    if (!name.trim()) return;
    localStorage.setItem("userName", name.trim());
    setStoredName(name.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
  };

  if (storedName) {
    return (
      <div className="text-slate-800 dark:text-white pt-2 md:pt-4">
        <h1 className="text-2xl md:text-3xl font-black flex items-center gap-2">
          Hi, {storedName} <span className="animate-wave origin-bottom-right inline-block hover:rotate-12 transition-transform">👋</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base mt-1">
          Ready to train your brain?
        </p>
      </div>
    );
  }

  // First Time User - Centered Overlay
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center w-full">
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700 max-w-sm w-full mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full text-blue-600 dark:text-blue-400 ring-4 ring-blue-50 dark:ring-slate-800">
            <Sparkles size={28} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-2">
          Welcome!
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center text-sm mb-8">
          Let's personalize your experience. <br/> What should we call you?
        </p>

        <div className="relative group">
          <input
            autoFocus
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full pl-5 pr-14 py-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-2 border-slate-100 dark:border-slate-700 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-lg"
          />
          
          <button
            onClick={handleSave}
            disabled={!name.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all disabled:opacity-0 disabled:scale-75 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
