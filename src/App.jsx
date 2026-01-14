import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Settings from './pages/Settings'

function App() {
  const [bonusTime, setBonusTime] = useState(1);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game 
        bonusTime={bonusTime}
        />} />
        <Route path="settings" element={
        <Settings
        bonusTime={bonusTime}
        setBonusTime={setBonusTime}
        />
          
        }/>
      </Routes>
    </Router>
  );
}

export default App;
