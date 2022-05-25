import React from "react";
import { NamePicker } from "./Name-picker";
import { ShortList } from "./Short-list";
import { ResetSearch } from "./Reset-search";

const NamesContainer = () => {
  return (
    <main>
      <ShortList />
      <NamePicker />
      <ResetSearch />
    </main>
  );
};

export default NamesContainer;
