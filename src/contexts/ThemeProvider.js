import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState(
    localStorage.getItem("color") ? localStorage.getItem("color") : "#1A97F5"
  );
  const [currentMode, setCurrentMode] = useState(
    localStorage.getItem("themeMode") ? localStorage.getItem("themeMode") : "light"
  );
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("color", color);
    setThemeSettings(false);
  };
  return (
    <ThemeContext.Provider
      value={{
        setMode,
        setColor,
        currentMode,
        currentColor,
        setThemeSettings,
        themeSettings,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
