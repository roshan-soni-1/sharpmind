import React from "react";
import { Sun, Moon, AppWindow } from "lucide-react";

const ModeButton = ({ mode, Icon, theme, setTheme }) => {
  const active = theme === mode;

  return (
    <button
      type="button"
      onClick={() => setTheme(mode)}
      aria-pressed={active}
      className={`flex-1 rounded-4xl font-medium flex p-5 items-center justify-center gap-3 transition-all duration-200 border-2 ${
        active
          ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm dark:bg-blue-900/20 dark:border-blue-400 dark:text-blue-300"
          : "bg-slate-50 border-transparent text-slate-500 hover:bg-slate-100 hover:border-slate-200 dark:bg-slate-700/30 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:border-slate-600"
      }`}
    >
      <Icon size={28} />
      <span className=" capitalize">{mode}</span>
    </button>
  );
};

const ModeToggle = ({ theme, setTheme }) => {
  return (
    <section>
      <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 ml-1">
        Appearance
      </h2>

      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row justify-between">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
            <AppWindow size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-lg">
              Interface Theme
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Select your preferred mode
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <ModeButton mode="light" Icon={Sun} theme={theme} setTheme={setTheme} />
          <ModeButton mode="dark" Icon={Moon} theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </section>
  );
};

export default ModeToggle;