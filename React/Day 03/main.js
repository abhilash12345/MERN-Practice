import React from "react";
import ReactDom from "react-dom/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Button, Main } from "./components/Main";

const domRoot = document.getElementById("root");
const reactRoot = ReactDom.createRoot(domRoot);

const App = () => {
  console.log("Abhilash");
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <Button />
    </div>
  );
};

reactRoot.render(App());
