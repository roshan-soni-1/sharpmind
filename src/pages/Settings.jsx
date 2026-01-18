import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { ArrowLeft, Moon, Sun, Check } from "lucide-react";

import ProfileSection from "../components/settings/ProfileSetting.jsx";
import GameplaySection from "../components/settings/GameplaySection.jsx";
import ModeToggle from "../components/settings/ModeToggle.jsx"

const Settings = ({ bonusTime, setBonusTime, theme, setTheme }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);

  // Load user data on mount
  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "Player";
    const storedBonus = localStorage.getItem("bonusTimeSeconds");

    setName(storedName);
    if (storedBonus) setBonusTime(Number(storedBonus));
  }, [setBonusTime]);

  const triggerSaveSuccess = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  //save the name
  const handleUpdateName = (newName) => {
    localStorage.setItem("userName", newName);
    setName(newName);
    triggerSaveSuccess();
  };

  // bonus time
  const handleSaveGameplay = () => {
    localStorage.setItem("bonusTimeSeconds", bonusTime);
    triggerSaveSuccess();
  };

  const changeTheme = (mode) => {
    setTheme(mode);
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 pt-4 pb-4 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 transition-all">
          <div className="flex items-center gap-4 justify-between">
            <button
              className="flex text-black dark:text-white items-center gap-2 px-2 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-6 h-6 text-slate-700 dark:text-slate-200" />
              <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                Settings
              </h1>
            </button>
            <Link
              to="/about"
              className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 uppercase tracking-widest transition-colors mr-2"
            >
              about
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-24">
          
          <ProfileSection 
            currentName={name} 
            onSaveName={handleUpdateName} 
          />
          
          <ModeToggle
            theme={theme}
            setTheme={setTheme}
          />

          <GameplaySection 
            bonusTime={bonusTime} 
            setBonusTime={setBonusTime} 
            onSaveSettings={handleSaveGameplay} 
          />

        </div>

        {/* Toast Notification */}
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-all duration-300 z-50 whitespace-nowrap ${
            saved
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          <Check size={20} /> <span className="font-bold">Settings Saved!</span>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
