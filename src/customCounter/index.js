import React from "react";
import CounterOne from "./counterOne";
import CounterTwo from "./counterTwo";
import { useStore } from "./store";
import Child from "./child";
import Reset from "./reset";

const index = () => {
  const [timesClicked] = useStore();
  return (
    <div>
      <h2>Custom hook counter:</h2>
      in index: {timesClicked}
      <Child />
      <CounterOne />
      <CounterTwo />
      <Reset />
    </div>
  );
};

export default index;
