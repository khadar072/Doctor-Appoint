import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ConnectUserContext from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConnectUserContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectUserContext>
  </BrowserRouter>
);
