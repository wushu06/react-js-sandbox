import React from "react";
import Select from "./components/Select";
import Listing from "./components/Listing";
import Trait from "./components/Trait";
import Production from "./components/Production";
const App = () => {
  return (
    <div>
      <h2>location collective</h2>
      <Select />
      <Trait />
      <Production />
      <Listing />
    </div>
  );
};

export default App;
