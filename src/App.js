import React from "react";
import ContextApp from "./context/ContextApp";
import Count from "./reducer/Count";
import Count2 from "./reducer/Count2";
function App() {
  return (
    <div>
      <h2>useContext</h2>
      <ContextApp />
      <h2>useReducer</h2>
      <Count />
      <hr />
      <Count2 />
    </div>
  );
}

export default App;
