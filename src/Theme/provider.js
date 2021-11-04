import React, { useState } from "react";
import { ThemeContext } from "./context";
import "./theme.css";

const LightTheme = React.lazy(() => import("./light/"));
const DarkTheme = React.lazy(() => import("./dark/"));

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const palette = React.useMemo(
    () => ({
      colors: { primary: "#234578" },
      text: { primary: "#987654" },
    }),
    [theme]
  );

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, palette }}>
      <React.Suspense fallback={<></>}>
        {theme === "light" && <LightTheme />}
        {theme === "dark" && <DarkTheme />}
      </React.Suspense>
      {children}
    </ThemeContext.Provider>
  );
};
