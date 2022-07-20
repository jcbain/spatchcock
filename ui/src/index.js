import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

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
      <BrowserRouter>
        <StylesReset />
        <StylesGlobal />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
