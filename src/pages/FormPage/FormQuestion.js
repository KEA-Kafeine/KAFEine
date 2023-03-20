import {
  faEdit,
  faPlusCircle,
  faQuestion,
  faTrash,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-router-dom";

function FormQuestion(props) {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [type, setType] = useState("");
  const [selections, setSelections] = useState([""]);
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  function addSelections() {
    console.log(input2);
    if (!input2 || /^\s*$/.test(input2)) {
      return;
    }

    const newSelections = [input2, ...selections];

    setSelections(newSelections);
    setInput2("");
  }

  function addOptions() {
    return <p>{input2}</p>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      type: type,
      selections: selections, // generate random number
    });

    setInput("");
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <div className="question-type">
        <select onChange={handleSelectChange}>
          <option key="word" value="주관식">
            {" "}
            주관식{" "}
          </option>
          <option key="select" value="객관식">
            객관식{" "}
          </option>
        </select>
      </div>
      <input
        type="text"
        placeholder="새로운 질문을 추가하세요"
        value={input}
        name="text"
        className="question-input"
        onChange={handleChange}
        // ref={inputRef}
      />

      <input
        type="text"
        placeholder="옵션"
        value={input2}
        name="text"
        className="question-input"
        onChange={handleChange2} // ref={inputRef}
      />

      <FontAwesomeIcon
        icon={faPlusCircle}
        onClick={addSelections}
        className="edit-icon"
      />

      <button className="question-button">+</button>
    </form>
  );
}

export default FormQuestion;
