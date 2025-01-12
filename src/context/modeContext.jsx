// src/context/modeContext.js
import { createContext, useState, useEffect } from "react";

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem("mode");
    return storedMode ? JSON.parse(storedMode) : { name: "light" };
  });

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};