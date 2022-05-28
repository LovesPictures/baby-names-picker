import React from "react";
//icon examples
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// reference
// https://www.youtube.com/watch?v=w7ejDZ8SWv8&ab_channel=TraversyMedia

/* filtering by  gender 2 */
const FilterButton = ({ genderFilter, setGenderFilter }) => {

  console.log("genderFilter", genderFilter);
  const gender = [ "all", "m", "f"]
 
  return (
    <div className="filterButtons">
    {gender.map(element => <button className="children" onClick={() => setGenderFilter (element)}>
    <i className="fa solid fa-child"></i></button>)}
    </div>
 
  );
};

export default FilterButton;

// const FilterButton = ({ genderFilter, setGenderFilter }) => {
  
//   return (
//     <div className="filterButtons">
//       <button className="children" onClick={() => setGenderFilter("all")}>
//         <i className="fa solid fa-child"></i>
//       </button>
//       <button className="m" onClick={() => setGenderFilter("m")}>
//         <i className="fa solid fa-child"></i>
//       </button>
//       <button className="f" onClick={() => setGenderFilter("f")}>
//         <i className="fa solid fa-child"></i>
//       </button>
//     </div>
//   );
// };