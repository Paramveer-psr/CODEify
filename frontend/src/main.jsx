import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CodeConverterProvider } from "./store/codeconvert-store.jsx";
//import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CodeConverterProvider>
      <App />
    </CodeConverterProvider>
  </React.StrictMode>
);
