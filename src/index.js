import React from "react";
import ReactDOM from "react-dom/client"; // <-- note /client
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
