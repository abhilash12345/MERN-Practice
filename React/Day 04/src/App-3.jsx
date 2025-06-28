import { useState } from "react";

// react will change the value of remote from undefined to a
// whenever state of the componenet changes ->> componenet is rerendered ->> re run

// initial rerender --->> re-render

const App = () => {
  const [monitor, remote] = useState();

  console.log(monitor);

  const handleSearch = (e) => {
    const val = e.target.value;
    remote(val);
  };

  return (
    <div>
      <input type="text" onKeyUp={handleSearch} />
      <h2>{monitor}</h2>
    </div>
  );
};

export default App;
