import React from "react";
import ContextApp from "./context/ContextApp";
import Count from "./reducer/Count";
function App() {
  return (
    <div>
      <h2>useContext</h2>
      <ContextApp />
      <h2>useReducer</h2>
      <Count />
    </div>
  );
}

export default App;
