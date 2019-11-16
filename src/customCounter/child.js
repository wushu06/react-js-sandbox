import React from "react";
import { useStore } from "./store";

function child() {
  // using the useStore hook here as well. The same state will be shared here.
  const [timesClicked] = useStore();
  return (
    <div>
      <h2>{timesClicked} times!</h2>
    </div>
  );
}

export default child;
