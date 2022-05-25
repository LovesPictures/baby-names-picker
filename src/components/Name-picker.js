import React from "react";
import { NamesList } from "./Name-list";

// //Note
import { useNames } from "../providers/Names";
import { useAppState } from "../providers/App-state";

/* filter a list of names from a JavaScript array. When users 
type a search string in the Search component, the NamePicker 
component re-renders with the updated list of names matching 
the search.
*/

export function NamePicker() {
  // filter through the names in the array and pick out the names that mach the selection
  const names = useNames();
  //UseAppState-----------------------------------------------------------
  const { searchValue, shortList, setShortList } = useAppState();

  // normalise the string to lowercase
  const filteredNames = names
    //filter for duplicated names in the entry.id
    .filter((entry) =>
      entry.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    //filter for duplicated names in the entry.id
    .filter((entry) => !shortList.includes(entry.id));
  function addToShortList(id) {
    // console.log({ id });
    // update the shortList using the spread syntax for the existing array and the new name ID
    setShortList([...shortList, id]);
  }

  // refactor the user interface for the shortlist area
  //nameList in Name-List
  //onItemClick to follow the onClick to handle when a user clicks on a name

  return <NamesList namesList={filteredNames} onItemClick={addToShortList} />;
}
