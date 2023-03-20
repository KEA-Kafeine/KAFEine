// import styled from "styled-components";
import React, { useState } from "react";
import {
  faInfoCircle,
  faPencil,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Form.css";
import FormCreationPage from "./FormCreationPage";
import FormView from "./FormView";

function Form() {
  const [checked, setChecked] = React.useState(true);
  const [questions, setQuestions] = useState([]);
  
  return (
    <div className="formsection">
      <input
        type="radio"
        name="slider"
        id="home"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      ></input>
      <input type="radio" name="slider" id="blog"></input>
      <input type="radio" name="slider" id="code"></input>
      <input type="radio" name="slider" id="help"></input>
      <input type="radio" name="slider" id="about"></input>
      <nav>
        <label for="home" class="home">
          <FontAwesomeIcon icon={faPencil} /> &nbsp;설문만들기
        </label>
        <label for="blog" class="blog">
          <FontAwesomeIcon icon={faSuitcase} /> &nbsp;워크스페이스
        </label>
        <label for="code" class="code">
          <FontAwesomeIcon icon={faInfoCircle} /> &nbsp;이용가이드
        </label>
        <label for="about" class="about">
          <FontAwesomeIcon icon={faUser} /> &nbsp;로그인/회원가입
        </label>
        <div class="slider"></div>
      </nav>
      <div className="pages">
        <div class="content content-1">
          <FormCreationPage questions={questions} setQuestions={setQuestions}/>
        </div>
        <div className="content content-2">
          <FormView questions={questions} setQuestions={setQuestions} />
        </div>
      </div>
    </div>
  );
}

export default Form;
