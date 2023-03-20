import React from "react";

function AddSelections({ selections }) {
  return selections.map((selection, index) => (
    <>
      <input type="checkbox" value={selection} /> <label> {selection} </label>
    </>
  ));
}

export default AddSelections;
