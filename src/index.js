import React from "react";
import { render } from "react-dom";

import App from "./Components/App";
import { ThemeProvider } from "./Theme";

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
