import React from "react";
import CountOne from "./countOne";
import CountTwo from "./countTwo";

const countOne = () => {
  return (
    <div>
      <h2>Shared count:</h2>

      <CountOne />
      <CountTwo />
    </div>
  );
};

export default countOne;
