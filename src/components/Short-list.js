import React, { Fragment } from "react";
import { NamesList } from "./Name-list";
import { useNames } from "../providers/Names";
import { useAppState } from "../providers/App-state";

export function ShortList() {
  const names = useNames();
  const { shortList, setShortList } = useAppState();
  //   const { shortList, setShortList } = useAppState();

  //filter over the names, keep the names which match the entry.id
  const shortListedNames = shortList.map((id) => names[id]);
  //remove from shortlist function, as an onItemClick prop, an will update the shortlist
  function removeFromShortList(id) {
    // setShortList(shortList.filter((entryId) => id !== entryId));
    setShortList(shortList.filter((i) => i !== id));
  }

  //   //check if the shortlisted names is > 0 to avid outputting an element to the DOM if there are no elements selected
  const hasNames = shortList.length > 0;

  return (
    <div className="short-list">
      {/* if hasNames: true the heading will display `Your Shortlist` otherwise the heading will prompt user to click on a name to shortlist it  */}
      <h2>
        {hasNames
          ? "Favorites"
          : "Click some names below to add to your shortlist..."}
      </h2>
      {/* if hasNames:true render the names list */}
      {hasNames && (
        <Fragment>
          <NamesList
            namesList={shortListedNames}
            onItemClick={removeFromShortList}
          />
          <hr />
        </Fragment>
      )}
    </div>
  );
}
