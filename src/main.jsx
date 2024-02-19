import React from "react";
import reactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import "./index.css";
import { clientId } from "./utils/urls";
// import { StateContextProvider } from "./context";
const root = reactDom.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider activeChain="goerli" clientId={clientId}>
      <App />
  </ThirdwebProvider>
);
