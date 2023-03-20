import React, { useState } from "react";
import AddSelections from "./AddSelections";
import AddYN from "./AddYN";

function FormView(props) {
  const questions = props.questions;

  function CheckBox({ valuekor, value }) {
    return (
      <div>
        <input type="checkbox" value={value} /> <label> 예 </label>
        <input type="checkbox" value={value} /> <label> 아니요 </label>
      </div>
    );
  }

  return questions.map((question, index) => (
    <div className="question-box">
      {question.type == "주관식" && (
        <div className="created-question" key={index}>
          <div key={question.id}>{question.text}</div>
          <input
            type="text"
            placeholder="여기에 응답하세요"
            name="text"
            className="question-answer"
          />
        </div>
      )}

      {question.type == "객관식" && question.selections.length > 0 && (
        <div className="created-question" key={index}>
          <div key={question.id}>{question.text}</div>
          <div>{questions.selections}</div>

          <AddSelections selections={question.selections} />
        </div>
      )}

      {question.type == "찬부식" && question.selections.length > 0 && (
        <div className="created-question" key={index}>
          <div key={question.id}>
            {question.text}
          </div>
          <div>{questions.selections}</div>

          <AddYN selections={question.selections} />
        </div>
      )}
    </div>
  ));
}

export default FormView;
