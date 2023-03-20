import React from "react";

function AddSelections({ selections }) {
  return selections.map((selection, index) => (
    <div>
      <input type="checkbox" value={selection} /> <label> {selection} </label>
    </div>
  ));
}

export default AddSelections;
