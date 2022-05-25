import React from "react";
import { useAppState } from "../providers/App-state";

export function NamesList({ namesList, onItemClick }) {
  const { genderFilter } = useAppState();
  // console.log(genderFilter);
  return (
    <ul>
      {/* all names */}
      {genderFilter !== "all"
        ? //if -------------------------------------------------
          namesList
            .filter((baby) => {
              return baby.sex === genderFilter;
            })
            .map(({ id, sex, name }) => {
              return (
                <li className={sex} key={id}>
                  <button onClick={() => onItemClick(id)}>{name}</button>
                </li>
              );
            })
        : //else ----------------------------------------------
          namesList.map(({ id, name, sex }) => {
            return (
              <li className={sex} key={id}>
                <button onClick={() => onItemClick(id)}>{name}</button>
              </li>
            );
          })}
    </ul>
  );
}
