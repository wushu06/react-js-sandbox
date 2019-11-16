import React, { useState } from "react";
import { useStore } from "../hooks/search";

const Select = () => {
  const [data, searchById] = useStore();

  const changeHandler = value => {
    searchById(value);
  };
  return (
    <div>
      <p>picker</p>
      <select defaultValue="1" onChange={e => changeHandler(e.target.value)}>
        <option disabled="disabled" value="1" hidden="hidden">
          -- Select --
        </option>
        <option label="id 1">1</option>
        <option label="id 2">2</option>
      </select>
    </div>
  );
};

export default Select;
