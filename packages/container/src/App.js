import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";

console.log(mount);

const App = () => (
  <>
    <h1>Hello Container</h1>
    <hr />
    <MarketingApp></MarketingApp>
  </>
);
export default App;
