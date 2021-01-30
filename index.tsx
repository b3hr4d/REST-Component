// root index.js file
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./_store/store";

const app = (
  <store.Provider>
    <App />
  </store.Provider>
);

ReactDOM.render(app, document.getElementById("root"));
