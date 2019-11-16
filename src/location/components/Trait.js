import React from "react";
import { useStore } from "../hooks/search";

const Trait = () => {
  const [data, searchById] = useStore();

  return (
    <div>
      <p>trait search</p>
      <button onClick={() => searchById(3)}>id 3</button>
      <button onClick={() => searchById(4)}>id 4</button>
    </div>
  );
};

export default Trait;
