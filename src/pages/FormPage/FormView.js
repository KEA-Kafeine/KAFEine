import React, { useState } from "react";

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
    <section className="form-creation-section">
      <div>
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

          {question.type == "객관식" && (
            <div className="created-question" key={index}>
              <div key={question.id}>{question.text}</div>

              <CheckBox />
            </div>
          )}
        </div>
      </div>
    </section>
  ));
}

export default FormView;
