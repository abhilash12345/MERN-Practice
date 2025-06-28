// state management : manage date in compioenet
// state condition of data
//let/const (normal variables)
// creating stateful variable swith the help of react
// if you want to remove teh old value and show the new value then unmount the old componenet and mount the new componenet.

import { useState } from "react";

// re run the function ->> re -rendering

// react component re render when any of teh condition changes:

// ->>1. either state changes
// 2. props chnages
// for creating state inside the compoenet --> a function to craete state and manage the state
// function given by reacts is hookes

const App = () => {
  // let searchText = "Hello";
  const [monitor, remote] = useState();
  const handleSearch = (e) => {
    const val = e.target.value;
    remote(val);
    // console.log(searchText);
  };
  return (
    <div>
      <input type="text" onKeyUp={handleSearch} />
      <h2>{monitor}</h2>
    </div>
  );
};

export default App;
