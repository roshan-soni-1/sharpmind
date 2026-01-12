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

  // Load settings on mount
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

  return (
    <Layout title="Settings">
      <div className="max-w-2xl mx-auto px-4 py-6">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
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
          <Card className="p-6">
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
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
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
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Change
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-blue-50 rounded-xl p-4 mb-4 border-2 border-blue-200">
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  New Name
                </label>
                <input
                  type="text"
                  value={tempName}
                  placeholder="Enter your name"
                  onChange={(e) => setTempName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium mb-3"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Name
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </Card>

          {/* Game Settings Card */}
          <Card className="p-6">
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
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-black text-2xl shadow-lg min-w-[70px] text-center">
                  {bonusTime}s
                </div>
              </div>

              {/* Slider */}
              <div className="relative pt-2">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={bonusTime}
                  onChange={(e) => setBonusTime(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
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
                className="w-full mt-6 py-3 text-base font-bold"
              >
                💾 Save Settings
              </Button>
            )}
          </Card>

          {/* Success Message */}
          {saved && (
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 animate-slide-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <p className="font-bold text-green-800">Settings Saved!</p>
                  <p className="text-sm text-green-600">Your preferences have been updated</p>
                </div>
              </div>
            </div>
          )}

          {/* Info Card */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100">
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