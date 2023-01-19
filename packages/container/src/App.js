import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

console.log(mount);
// Added comment

const App = () => (
  <BrowserRouter>
    <>
      <Header />
      <MarketingApp />
    </>
  </BrowserRouter>
);
export default App;
