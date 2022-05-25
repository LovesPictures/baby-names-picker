import React, { createContext, useContext } from "react";

import { names } from "../components/data/index";

// Create a new context -
const NamesContext = createContext();

// Context provider
export function NamesProvider({ children }) {
  return (
    <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
  );
}

// Custom hook to consume the context
export function useNames() {
  const context = useContext(NamesContext);

  // Display error if no context is provided
  if (!context) {
    throw new Error("Forgot the <NamesProvider> context provider?");
  }
  return context;
}
