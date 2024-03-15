import React from "react";
import reactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
// import { StateContextProvider } from "./context";
const root = reactDom.createRoot(document.getElementById("root"));
root.render(<App />);
