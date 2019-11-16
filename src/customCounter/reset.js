import React from "react";
import { store, useStore } from "./store";

const reset = () => {
  const [timesClicked, updateTimesClicked] = useStore();

  return (
    <div>
      <button onClick={() => updateTimesClicked("reset")}>reset global</button>
    </div>
  );
};

export default reset;
