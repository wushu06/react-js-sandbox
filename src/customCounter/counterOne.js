import React from "react";
import useCounter from "./counter";
import { store, useStore } from "./store";

const counterOne = () => {
  const [count, increase, decrease, reset, state] = useCounter();
  const [timesClicked, updateTimesClicked] = useStore();
  return (
    <div>
      <button onClick={() => increase()}> increase {state.data}</button>
      <button type="button" onClick={() => updateTimesClicked("increase")}>
        increase global
      </button>
    </div>
  );
};

export default counterOne;
