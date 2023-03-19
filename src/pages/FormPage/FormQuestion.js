import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-router-dom";

function FormQuestion(props) {
  const [input, setInput] = useState("");

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input, // generate random number
    });

    setInput("");
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
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
