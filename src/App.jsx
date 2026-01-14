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
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (theme === "dark") {
      html.classList.add("dark");
      // Change status bar to Dark
      metaThemeColor.setAttribute("content", "#0f172a");
    } else {
      html.classList.remove("dark");
      metaThemeColor.setAttribute("content", "#ffffff");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);


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