import React from "react";

const checkOnlyOne = (checkThis) => {
  const checkboxes = document.getElementsByName("selectOne");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== checkThis) {
      checkboxes[i].checked = false;
    }
  }
};

function AddYN({ selections }) {
  return selections.map((selection, index) => (
      <>
        <input
          type="checkbox"
          value={index}
          name="selectOne"
          onChange={(e) => checkOnlyOne(e.target)} />{" "}
        <label>{selection}</label>
      </>
    ));
}

export default AddYN;
