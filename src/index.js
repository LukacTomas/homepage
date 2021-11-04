import React from "react";
import { render } from "react-dom";

import App from "./Components/App";
import Theme from "./Theme";

render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById("app")
);
