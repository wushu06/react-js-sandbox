import React from "react";
import ContextApp from "./context/ContextApp";
import Count from "./reducer/Count";
import Count2 from "./reducer/Count2";
import Fetch from "./fetch";
import Fetch2 from "./fetch/fetch2";
import CustomCount from "./custom";

function App() {
  return (
    <div>
      <h2>useContext</h2>
      <ContextApp />
      <h2>useReducer</h2>
      <Count />
      <hr />
      <CustomCount />
      <hr />
      <Count2 />
      <hr />
      <Fetch2 />

      <hr />
      <Fetch />
    </div>
  );
}

export default App;
