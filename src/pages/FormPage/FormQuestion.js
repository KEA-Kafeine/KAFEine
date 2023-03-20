import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-router-dom";

function FormQuestion(props) {
  const [input, setInput] = useState("");
  const [type, setType] = useState("주관식");
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      type: type, // generate random number
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
          <option key="yesNo" value="찬부식">
            찬부식{" "}
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

      <button className="question-button">+</button>
    </form>
  );
}

export default FormQuestion;
