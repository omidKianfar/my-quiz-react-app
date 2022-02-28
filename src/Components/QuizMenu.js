import React, { useState } from "react";

import { Questions } from "./QuestionList";

const QuizMenu = () => {
  const [question, setQuestion] = useState(0);
  const [chosenAnswer, setchosenAnswer] = useState("");

  return (
    <div>
      <h1>Java ScriptQuiz</h1>
      <h4>{Questions[question].question}</h4>
      <div>
        <div>
          <input
            name="answer"
            id="optionA"
            type="radio"
            value={Questions[question].optionA}
            onChange={() => setchosenAnswer("A")}
          />
          <label htmlFor="optionA">{Questions[question].optionA}</label>
        </div>
        <div>
          <input
            name="answer"
            id="optionB"
            type="radio"
            value={Questions[question].optionB}
            onChange={() => setchosenAnswer("B")}
          />
          <label htmlFor="optionB">{Questions[question].optionB}</label>
        </div>
        <div>
          <input
            name="answer"
            id="optionC"
            type="radio"
            value={Questions[question].optionC}
            onChange={() => setchosenAnswer("C")}
          />
          <label htmlFor="optionC">{Questions[question].optionC}</label>
        </div>
        <div>
          <input
            name="answer"
            id="optionD"
            type="radio"
            value={Questions[question].optionD}
            onChange={() => setchosenAnswer("D")}
          />
          <label htmlFor="optionD">{Questions[question].optionD}</label>
        </div>
      </div>
    </div>
  );
};

export default QuizMenu;
