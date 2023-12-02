import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
      <BrowserRouter /*basename="/starwars-api"*/>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
