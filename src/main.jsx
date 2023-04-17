import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextUserData from "./Hooks/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextUserData>
    <App />
    </ContextUserData>
        
    </BrowserRouter>
  </React.StrictMode>
)
