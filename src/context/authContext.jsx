import { createContext, useState, useEffect } from "react";

const INITIAL_STATE = {
  isLoggedIn: localStorage.getItem("refreshToken") ? true : false,
  name: localStorage.getItem("name") || "",
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE.isLoggedIn);
  const [name, setName] = useState(INITIAL_STATE.name);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
    localStorage.setItem("name", name);
  }, [isLoggedIn, name]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};