import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Button from "../components/common/Button";
import {
  ArrowLeft,
  User,
  Moon,
  Sun,
  Clock,
  Check,
  Save,
} from "lucide-react";

const Settings = ({ bonusTime, setBonusTime, theme, setTheme }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tempName, setTempName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  // Load user data
  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "Player";
    const storedBonus = localStorage.getItem("bonusTimeSeconds");

    setName(storedName);
    setTempName(storedName);
    if (storedBonus) setBonusTime(Number(storedBonus));
  }, [setBonusTime]);

  const handleSave = () => {
    const finalName = tempName.trim() || name;
    localStorage.setItem("userName", finalName);
    localStorage.setItem("bonusTimeSeconds", bonusTime);

    setName(finalName);
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const changeTheme = (mode) => {
    setTheme(mode);
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-white/50 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-20 px-4 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4 justify-between">
        <button className="flex text-black dark:text-white items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6 text-slate-700 dark:text-slate-200" />
        <h1 className="text-xl font-bold text-slate-800 dark:text-white">
          Settings
        </h1>
        </button>
        <Link to="/about" className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          about
        </Link>
      </div>

      <div className="p-6 space-y-6 pb-24">
        {/* Profile */}
        <section>
          <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 ml-1">
            Profile
          </h2>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                <User size={24} />
              </div>

              <div className="flex-1">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Display Name
                </p>

                {!isEditing ? (
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {name}
                  </h3>
                ) : (
                  <input
                    autoFocus
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="mt-1 w-full rounded-lg px-2 py-1 text-lg font-bold bg-slate-50 dark:bg-slate-700 border border-blue-300 dark:border-blue-500 text-slate-800 dark:text-white focus:outline-none"
                  />
                )}
              </div>
            </div>

            {!isEditing ? (
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => setIsEditing(true)}
              >
                Edit Name
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  className="flex-1"
                  variant="secondary"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button className="flex-1" onClick={handleSave}>
                  Save
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Appearance */}
        <section>
          <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 ml-1">
            Appearance
          </h2>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-sm border border-slate-100 dark:border-slate-700 flex">
            <button
              onClick={() => changeTheme("light")}
              className={`flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition
                ${
                  theme === "light"
                    ? "bg-blue-100 text-blue-700"
                    : "text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700"
                }`}
            >
              <Sun size={20} /> Light
            </button>

            <button
              onClick={() => changeTheme("dark")}
              className={`flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition
                ${
                  theme === "dark"
                    ? "bg-slate-700 text-white"
                    : "text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700"
                }`}
            >
              <Moon size={20} /> Dark
            </button>
          </div>
        </section>

        {/* Gameplay */}
        <section>
          <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 ml-1">
            Gameplay
          </h2>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white">
                    Bonus Time
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Extra seconds per correct answer
                  </p>
                </div>
              </div>

              <span className="text-2xl font-black text-purple-600 dark:text-purple-400">
                {bonusTime}s
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="10"
              value={bonusTime}
              onChange={(e) => setBonusTime(Number(e.target.value))}
              className="w-full accent-purple-600"
            />

            <Button onClick={handleSave} className="w-full mt-6 gap-2">
              <Save size={18} /> Save Settings
            </Button>
          </div>
        </section>

        {/* Toast */}
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 transition ${
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