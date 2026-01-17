import React, { useState } from "react";
import Button from "../common/Button.jsx";
import { User } from "lucide-react";

const ProfileSetting = ({ currentName, onSaveName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(currentName);

  const handleSaveInternal = () => {
    const finalName = tempName.trim() || currentName;
    
    onSaveName(finalName);    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempName(currentName);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setTempName(currentName);
    setIsEditing(true);
  };

  return (
    <section>
      <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 ml-1">
        Profile
      </h2>
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row justify-between gap-6 h-full">
        
        
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
            <User size={28} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Display Name
            </p>
            {!isEditing ? (
              <h3 className="text-xl font-bold text-slate-800 dark:text-white truncate">
                {currentName}
              </h3>
            ) : (
              <input
                autoFocus
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSaveInternal()}
                className="mt-1 w-full rounded-lg px-2 py-1 text-lg font-bold bg-slate-50 dark:bg-slate-700 border border-blue-300 dark:border-blue-500 text-slate-800 dark:text-white focus:outline-none"
              />
            )}
          </div>
        </div>

        <div className="mt-auto">
          {!isEditing ? (
            <Button
              variant="secondary"
              className="w-full"
              onClick={handleEditClick}
            >
              Edit Name
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button
                className="flex-1"
                variant="secondary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button className="flex-1" onClick={handleSaveInternal}>
                Save
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileSetting;
