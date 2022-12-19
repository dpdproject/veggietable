import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./css/index.css";

import { ResizeContextProvider } from "./context/ResizeContext";
import { FavContextProvider } from "./context/FavContext";
import { FormContextProvider } from "./context/FormContext";
import { AnimatePresence } from "framer-motion";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResizeContextProvider>
      <FavContextProvider>
        <FormContextProvider>
          <AnimatePresence>
            <App />
          </AnimatePresence>
        </FormContextProvider>
      </FavContextProvider>
    </ResizeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
