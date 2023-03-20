import {
  faEdit,
  faQuestion,
  faTrash,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import FormQuestion from "./FormQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddSelections from "./AddSelections";

function FormManager({
  questions,
  completeQuestion,
  removeQuestion,
  updateQuestion,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateQuestion(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <FormQuestion edit={edit} onSubmit={submitUpdate} />;
  }

  function CheckBox({ valuekor, value }) {
    return (
      <div>
        <input type="checkbox" value={value} /> <label> 예 </label>
        <input type="checkbox" value={value} /> <label> 아니요 </label>
      </div>
    );
  }

  function onButtonClick() {
    return (
      <div>
        {" "}
        <CheckBox />{" "}
      </div>
    );
  }

  return questions.map((question, index) => (
    <div className="question-box">
      {question.type == "주관식" && (
        <div className="created-question" key={index}>
          <div key={question.id} onClick={() => completeQuestion(question.id)}>
            {question.text}
          </div>

          <input
            type="text"
            placeholder="여기에 응답하세요"
            name="text"
            className="question-answer"
            // ref={inputRef}
          />
          <div className="icons">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => removeQuestion(question.id)}
              className="delete-icon"
            />
            {/* <FontAwesomeIcon
              icon={faEdit}
              onClick={() => setEdit({ id: question.id, value: question.text })}
              className="edit-icon"
            /> */}
          </div>
        </div>
      )}

      {question.type == "객관식" && (
        <div className="created-question" key={index}>
          <div key={question.id} onClick={() => completeQuestion(question.id)}>
            {question.text}
          </div>
          <div>{questions.selections}</div>

          <div className="icons">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => removeQuestion(question.id)}
              className="delete-icon"
            />
            {/* <FontAwesomeIcon
              icon={faEdit}
              onClick={() => setEdit({ id: question.id, value: question.text })}
              className="edit-icon"
            /> */}
            <AddSelections selections={question.selections} />
          </div>
        </div>
      )}
    </div>
  ));
}

export default FormManager;
