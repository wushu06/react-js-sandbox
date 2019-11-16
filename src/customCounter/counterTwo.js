import React from "react";
import useCounter from "./counter";
import { store, useStore } from "./store";

const counterTwo = () => {
  const [count, increase, decrease, reset, state] = useCounter();
  const [timesClicked, updateTimesClicked] = useStore();

  return (
    <div>
      <button onClick={() => decrease()}> decrease {state.data}</button>
      <button type="button" onClick={() => updateTimesClicked("decrease")}>
        decrease global
      </button>
    </div>
  );
};

export default counterTwo;
