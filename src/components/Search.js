import React, { useEffect, useRef } from "react";
import { useAppState } from "../providers/App-state";
import FilterButton from "./FilterButtons";
/*useEffect, useRef, to update the input field
useState an array with two params = state value and an updater
useRef Hook persists values between renders.
use search value to filter the list of names
*/

export function Search() {
  const { searchValue, setSearchValue } = useAppState();
  /* filtering by  gender 1 */
  const { genderFilter, setGenderFilter } = useAppState();
  console.log(genderFilter);
  const inputRef = useRef();

  // To run once - should this array be empty?
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //set the search value to the change/ing input value
  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <header>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type a name..."
        value={searchValue}
        // a synthetic browser event - https://reactjs.org/docs/events.html ?
        onChange={handleChange}
      />

      {/* filtering by gender 3 */}
      <FilterButton
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
      />
    </header>
  );
}
