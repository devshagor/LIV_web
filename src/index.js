import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./fonts/curvedsquare/CurvedSquare.ttf";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
