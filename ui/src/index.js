import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

// Components
import App from "./App";

// Styles
import StylesReset from "./styles/StylesReset";
import StylesGlobal from "./styles/StylesGlobal";
import themes from "./styles/themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes["light"]}>
      <StylesReset />
      <StylesGlobal />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
