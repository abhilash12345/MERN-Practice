import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Address from "./Address.jsx";

const domRoot = document.getElementById("root");
const reactRoot = createRoot(domRoot);

// strict mode helps to check if everything is fine , help to identify potential issue and improve quality of code
// only runs on the development code
// some one watching you you dont make the mistake

reactRoot.render(
  <StrictMode>
    <Address />
  </StrictMode>
);
