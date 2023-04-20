import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextUserData from "./Hooks/userContext";
import { Sidebar } from "./components/Header/Sidebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextUserData>
      <Sidebar/>
    <App />
    </ContextUserData>
        
    </BrowserRouter>
  </React.StrictMode>
)
