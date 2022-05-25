// React
import React from "react";
import ReactDOM from "react-dom";
// CSS
import "./index.css";
// Components
import App from "./App";
import { NamesProvider } from "./providers/Names";
import { AppStateProvider } from "./providers/App-state";

// Data
// import { names } from "./components/data";

//the array of names in the file
// import { names } from "components/data/Names.json";

ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
