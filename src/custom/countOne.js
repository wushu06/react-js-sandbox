import React, { useState } from "react";
import useCustomCount from "./counter";

const countOne = () => {
  const [count, setCount] = useState(0);
  useCustomCount(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> {count} increase</button>
    </div>
  );
};

export default countOne;
