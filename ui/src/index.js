import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Styles
import StylesReset from "./styles/StylesReset";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StylesReset />
    <App />
  </React.StrictMode>
);
