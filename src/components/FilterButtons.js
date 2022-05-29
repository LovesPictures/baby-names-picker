import React from "react";

/* filtering by  gender 2 */
const FilterButton = ({ genderFilter, setGenderFilter }) => {
  //create an an array of objects to map over
  const genderButtons = [
    { gender: "all", iconClass: "fa-solid fa-baby-carriage"},
    { gender: "m", iconClass:  "fa-solid fa-baby"},
    { gender: "f", iconClass: "fa-solid fa-baby"},
  ];
  // console.log({faChildDress});
  return (
    <div className="filterButtons">
      {genderButtons.map((element) => (
        <button
          className={element.gender}
          onClick={() => setGenderFilter(element.gender)}
        >
          {/* <FaBaby /> */}
          <i className={element.iconClass}></i>
        </button>
      ))}
    </div>
  );
};

export default FilterButton;

/* 
original code 
using react fonts
icons from fa = font awesome  examples only uploads icons which are needed
import { FaBaby, FaBabyCarriage } from "react-icons/fa";

second 
  //create an object form the array 
  const genderButtons = [ {gender: "all", iconClass:"fa-solid fa-people"}, 
                          {gender:"m",iconClass:"fa-solid fa-child"}, 
                          {gender:"f",iconClass:"fa-solid fa-child-dress"}]
const FilterButton = ({ genderFilter, setGenderFilter }) => {
  
first 
  return (
    <div className="filterButtons">
      <button className="children" onClick={() => setGenderFilter("all")}>
        <i className="fa solid fa-child"></i>
      </button>
      <button className="m" onClick={() => setGenderFilter("m")}>
        <i className="fa solid fa-child"></i>
      </button>
      <button className="f" onClick={() => setGenderFilter("f")}>
        <i className="fa solid fa-child"></i>
      </button>
    </div>
  );
};

reference
https://www.youtube.com/watch?v=aor9hlcODUE&ab_channel=EricMurphy

*/
