import React from "react";
import ReactDom from "react-dom/client";

const domRoot = document.getElementById("root");
const reactRoot = ReactDom.createRoot(domRoot);

const App = () => {
  console.log("Abhilash");
  return (
    <div>
      <h1>Hello from react App!!!</h1>
    </div>
  );
};

reactRoot.render(App());
