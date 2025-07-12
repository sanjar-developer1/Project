import { createContext, useContext, useState } from "react";

import "./ThemeContext.css";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "app dark" : "app light"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  return useContext(ThemeContext);
}

export { useTheme };
