import React, { createContext } from "react";

export const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {},
});
