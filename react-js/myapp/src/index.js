import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // ES6
// const App = require('./App');// ES5

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
