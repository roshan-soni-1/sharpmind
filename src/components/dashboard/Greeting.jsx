import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');
  const [storedName, setStoredName] = useState(null);

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setStoredName(savedName);
    }
  }, []);

  const handleSave = () => {
    if (!name.trim()) return;
    localStorage.setItem('userName', name.trim());
    setStoredName(name.trim());
  };

// if username already exist
  if (storedName) {
    return (
      <div className="text-primary-dark">
        <h1 className="text-3xl font-bold">
          Hi {storedName} 👋
        </h1>
        <p className="text-gray-400 font-medium">
          Welcome back to Mind Calculation
        </p>
      </div>
    );
  }

  // First time user
  return (
    <div className="bg-white/70 p-6 rounded-2xl shadow-md max-w-sm">
      <h2 className="text-xl font-bold text-primary-dark mb-2">
        Hey 👋 What’s your name?
      </h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />

      <button
        onClick={handleSave}
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Let’s Go 
      </button>
    </div>
  );
};

export default Greeting;