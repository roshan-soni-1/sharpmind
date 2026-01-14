import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const Settings = () => {
  const [name, setName] = useState("");
  const [bonusTime, setBonusTime] = useState(5);
  const [saved, setSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "user";
    const storedBonus = localStorage.getItem("bonusTimeSeconds");

    if (storedName) {
      setName(storedName);
      setTempName(storedName);
    }
    if (storedBonus) setBonusTime(Number(storedBonus));
  }, []);

  const handleSave = () => {
    const finalName = tempName.trim() || name || "Player";
    localStorage.setItem("userName", finalName);
    localStorage.setItem("playerName", finalName);
    localStorage.setItem("bonusTimeSeconds", bonusTime);
    
    setName(finalName);
    setIsEditing(false);
    setSaved(true);

    setTimeout(() => setSaved(false), 2000);
  };

  const handleCancel = () => {
    setTempName(name);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && tempName.trim()) {
      handleSave();
    }
  };

  return (
    <Layout title="Settings">
      <style>{`
        @keyframes slide-in {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-once {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-bounce-once {
          animation: bounce-once 0.5s ease-out;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }

        /* Custom Slider Styling */
        .custom-slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
          transition: all 0.2s ease;
        }

        .custom-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.7);
        }

        .custom-slider::-webkit-slider-thumb:active {
          transform: scale(1.1);
        }

        .custom-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
          transition: all 0.2s ease;
        }

        .custom-slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.7);
        }

        .custom-slider::-moz-range-thumb:active {
          transform: scale(1.1);
        }

        .custom-slider::-webkit-slider-runnable-track {
          height: 12px;
          border-radius: 6px;
        }

        .custom-slider::-moz-range-track {
          height: 12px;
          border-radius: 6px;
          background: #e5e7eb;
        }

        .custom-slider::-moz-range-progress {
          height: 12px;
          border-radius: 6px;
          background: #3b82f6;
        }
      `}</style>

      <div className="max-w-2xl mx-auto px-4 py-6">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse-subtle">
              <span className="text-3xl">⚙️</span>
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-800">Settings</h1>
              <p className="text-gray-600 font-medium">
                Hi {name || "there"}! 👋
              </p>
            </div>
          </div>
        </div>

        {/* Settings Cards */}
        <div className="space-y-4">
          
          {/* Profile Settings Card */}
          <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">Profile</h2>
                  <p className="text-sm text-gray-500">Manage your identity</p>
                </div>
              </div>
            </div>

            {/* Username Display/Edit */}
            {!isEditing ? (
              <div className="bg-gray-50 rounded-xl p-4 mb-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Your Name
                    </p>
                    <p className="text-xl font-bold text-gray-800">
                      {name || "Player"}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
                  >
                    Change
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-blue-50 rounded-xl p-4 mb-4 border-2 border-blue-200 animate-fade-in">
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  New Name
                </label>
                <input
                  type="text"
                  value={tempName}
                  placeholder="Enter your name"
                  onChange={(e) => setTempName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium mb-3 transition-all"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    disabled={!tempName.trim()}
                    className={`flex-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                      tempName.trim()
                        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Save Name
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-300 transition-all hover:scale-105 active:scale-95"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </Card>

          {/* Game Settings Card */}
          <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🎮</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Game Settings</h2>
                <p className="text-sm text-gray-500">Customize your experience</p>
              </div>
            </div>

            {/* Bonus Time Slider */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-bold text-gray-800">
                    Bonus Time per Correct Answer
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Extra seconds added when you answer correctly
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-black text-2xl shadow-lg min-w-[70px] text-center animate-pulse-subtle">
                  {bonusTime}s
                </div>
              </div>

              {/* Slider */}
              <div className="relative pt-2 pb-2">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={bonusTime}
                  onChange={(e) => setBonusTime(Number(e.target.value))}
                  className="custom-slider w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((bonusTime - 1) / 9) * 100}%, #e5e7eb ${((bonusTime - 1) / 9) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
                  <span>1s</span>
                  <span>5s</span>
                  <span>10s</span>
                </div>
              </div>
            </div>

            {/* Save Button */}
            {!isEditing && (
              <Button 
                onClick={handleSave} 
                className="w-full mt-6 py-3 text-base font-bold hover:scale-105 active:scale-95 transition-transform"
              >
                💾 Save Settings
              </Button>
            )}
          </Card>

          {/* Success Message */}
          {saved && (
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 animate-slide-in shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce-once">
                  <span className="text-xl text-white">✓</span>
                </div>
                <div>
                  <p className="font-bold text-green-800">Settings Saved!</p>
                  <p className="text-sm text-green-600">Your preferences have been updated</p>
                </div>
              </div>
            </div>
          )}

          {/* Info Card */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-bold text-gray-800 mb-1">Pro Tip</p>
                <p className="text-sm text-gray-600">
                  Higher bonus time gives you more breathing room, but remember - 
                  the real challenge is mastering speed and accuracy together!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;