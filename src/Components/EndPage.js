import React, { Fragment, useState } from "react";

import { QuestionList } from "./QuestionList";

const EndPage = ({
  score,
  setQuestion,
  setScore,
  setGame,
  answers,
  setAnswers,
}) => {
  // stet -------------------------------------------------------
  const [show, setShow] = useState(false);

  // func -------------------------------------------------------
  const resetQuiz = () => {
    setScore(0);
    setQuestion(0);
    setGame("menu");
    setAnswers([]);
  };

  const setShowHandler = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      <div id="up">
        <h1>Quiz Finished</h1>
        <h4>
          Your Score: ( {score} / {QuestionList.length} )
        </h4>
        <button onClick={resetQuiz}>Reset Quiz</button>
        <button onClick={setShowHandler}>Show Questions and Answers</button>
        <div>
          {show
            ? QuestionList.map((question, index) => (
                <div key={index}>
                  <hr />
                  <h1>Questions List</h1>
                  <h3>{question.question}</h3>
                  <p>{question.optionA}</p>
                  <p>{question.optionB}</p>
                  <p>{question.optionC}</p>
                  <p>{question.optionD}</p>
                  <p>Your Answer: {answers[index]}</p>
                  <p>True Answer: {question.answer}</p>
                  <a href="#up">Go Up of Page</a>
                </div>
              ))
            : ""}
        </div>
      </div>
    </Fragment>
  );
};
export default EndPage;
