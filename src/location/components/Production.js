import React from "react";
import { useStore } from "../hooks/search";

const Production = () => {
  const [data, searchById] = useStore();

  return (
    <div>
      <p>production</p>
      <button onClick={() => searchById(1, true)}>images 1</button>
      <button onClick={() => searchById(2, true)}>images 2</button>
    </div>
  );
};

export default Production;
