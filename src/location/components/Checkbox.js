import React, { useState } from "react";

const Checkbox = () => {
  const [check, setCheck] = useState(false);
  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    let evt = new CustomEvent("printerstatechanged", {
      detail: event.target.checked
    });
    window.dispatchEvent(evt);

    // setChecked(event.target.checked);
  };
  return (
    <div>
      <input
        type="checkbox"
        value="refCheck"
        onChange={handleChange()}
        id="checkRef"
      />
      <label>Search by ref</label>
    </div>
  );
};

export default Checkbox;
