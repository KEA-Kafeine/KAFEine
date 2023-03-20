import "./FormCreationPage.css";
import FormQuestion from "./FormQuestion";
import React, { useState } from "react";
import FormManager from "./FormManager";

function FormCreationPage() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    if (!question.text || /^\s*$/.test(question.text)) {
      return;
    }
    
    const newQuestions = [...questions, question];

    setQuestions(newQuestions);
  };

  const completeQuestion = (id) => {
    let updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        question.isComplete = !question.isComplete;
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const updateQuestion = (questionId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setQuestions((prev) =>
      prev.map((item) => (item.id === questionId ? newValue : item))
    );
  };

  const removeQuestion = (id) => {
    const removeArr = [...questions].filter((question) => question.id !== id);

    setQuestions(removeArr);
  };

  return (
    <section className="form-creation-section">
      <div>
        <h2 className="createText"> Create Your Survey Form </h2>
        <FormQuestion onSubmit={addQuestion} />
        <FormManager
          questions={questions}
          completeQuestion={completeQuestion}
          removeQuestion={removeQuestion}
          updateQuestion={updateQuestion}
        />
      </div>
    </section>
  );
}

export default FormCreationPage;
