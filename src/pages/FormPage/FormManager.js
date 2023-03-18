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
  return questions.map((question, index) => (
    <div className="question-box">
      <div className="created-question" key={index}>
        <div key={question.id} onClick={() => completeQuestion(question.id)}>
          {question.text}
        </div>
        <div className="icons">
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => removeQuestion(question.id)}
            className="delete-icon"
          />
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => setEdit({ id: question.id, value: question.text })}
            className="edit-icon"
          />
        </div>
      </div>
    </div>
  ));
}

export default FormManager;
