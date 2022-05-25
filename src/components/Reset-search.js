import React from "react";
// note
import { useAppState } from "../providers/App-state";

export function ResetSearch() {
  const { searchValue, setSearchValue } = useAppState();

  if (!searchValue) {
    return null;
  }
  return (
    <button onClick={() => setSearchValue("")} className="reset-search">
      reset search
    </button>
  );
}
