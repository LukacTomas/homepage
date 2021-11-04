import React, { useState, createContext } from "react";

const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {},
});

export default ThemeContext;

export const ThemeProvider = (props) => {
  const [dark, setDark] = useState(window.localStorage.getItem("darkTheme"));

  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");

    if (lastTheme === "true") {
      setDark(true);
      applyTheme(darkTheme);
    }

    if (!lastTheme || lastTheme === "false") {
      setDark(false);
      applyTheme(lightTheme);
    }
  }, [dark]);

  const applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const toggle = () => {
    setDark(!dark);
    window.localStorage.setItem("darkTheme", !dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
