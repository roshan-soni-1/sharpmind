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
      <div className="text-slate-800 dark:text-white mb-6 pt-10">
        <h1 className="text-3xl font-black flex items-center gap-2">
          Hi, {storedName} <span className="animate-wave">👋</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          Ready to train your brain?
        </p>
      </div>
    );
  }

  //First Time User
  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 dark:border-slate-700 max-w-sm w-full mx-auto">
      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
          <Sparkles size={24} />
        </div>
      </div>

      <h2 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-2">
        Welcome!
      </h2>
      <p className="text-slate-500 dark:text-slate-400 text-center text-sm mb-6">
        What should we call you?
      </p>

      <div className="relative group">
        <input
          autoFocus
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full pl-4 pr-12 py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-semibold"
        />
        
        <button
          onClick={handleSave}
          disabled={!name.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all disabled:opacity-0 disabled:scale-75"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Greeting;
