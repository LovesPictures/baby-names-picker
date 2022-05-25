/*
Credit: Simon Vrachliotis 
"https://egghead.io/lessons/react-reduce-prop-drilling-in-react-with-the-context-api"

*/

import React, { Fragment } from "react";
import { Search } from "./components/Search";

import { Footer } from "./components/Footer";
import NamesContainer from "./components/NamesContainer";

// // jsx a syntax which compiles to javascript
// //accepts the names props
// // output the data in the
// // return <pre>{JSON.stringify(names, null, 2)}</pre>;
// // output an unordered list of names from data file

/*#
User interface components
<App>
<Search />>
<Shortlist/>
<NamePicker/>
<Footer/>>
</App>
*/

/*render tree */
// function App({ names }) {
//   //app component responsible for the search field value
//   const [searchValue, setSearchValue] = useState("");
//   //shortlist an array of ID's
//   const [shortList, setShortList] = useState([]);

function App() {
  return (
    <Fragment>
      <Search />
      <NamesContainer />
      <Footer />
    </Fragment>
  );
}

export default App;

// return (
//   <Fragment>
//     {/*elevated from search component for use in multiple elements e.g search and namePicker*/}
//     <main>
//       <Search searchValue={searchValue} setSearchValue={setSearchValue} />
//       <ShortList
//         names={names}
//         shortList={shortList}
//         serShortList={setShortList}
//       />
//       {/* //name picker will need update the value, no need for setSearchValue */}
//       <NamePicker
//         names={names}
//         searchValue={searchValue}
//         shortList={shortList}
//         SetShortList={setShortList}
//       />
//       <ResetSearch>
//         <searchValue searchValue={searchValue} setSearchValue={searchValue} />
//       </ResetSearch>
//     </main>
//     <Footer />
//   </Fragment>
// );
// }

// export default App;

/*Reference

https://medium.com/officialrajdeepsingh/how-to-read-local-json-file-in-react-js-564125235fc7 */
