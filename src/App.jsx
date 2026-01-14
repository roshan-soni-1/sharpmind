import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Settings from "./pages/Settings";

function App() {
  const [bonusTime, setBonusTime] = useState(1);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]); // 🔥 MUST depend on theme

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game bonusTime={bonusTime} />} />
        <Route
          path="/settings"
          element={
            <Settings
              bonusTime={bonusTime}
              setBonusTime={setBonusTime}
              theme={theme}
              setTheme={setTheme}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;