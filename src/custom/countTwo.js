import React, { useState } from "react";
import useCustomCount from "./counter";
const countTwo = () => {
  const [count, setCount] = useState(0);
  useCustomCount(count);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}> {count} decrease</button>
    </div>
  );
};

export default countTwo;
