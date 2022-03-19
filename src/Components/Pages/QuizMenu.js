import { Fragment, useContext } from "react";

import QuizContext from "../../Hooks/Context";

import { finishQuestions } from "../../Tools/FinishQuestions";
import { nextQuestion } from "../../Tools/NextQuestion";

const QuizMenu = () => {
  const contextProps = useContext(QuizContext);
  const { QuestionList, question, setchosenAnswer } = contextProps;

  return (
    <Fragment>
      <h1>Java ScriptQuiz</h1>
      <h4>{QuestionList[question].question}</h4>
      <div>
        <div>
          <input
            name="answer"
            id="optionA"
            type="radio"
            value={QuestionList[question].optionA}
            onChange={() => setchosenAnswer("A")}
          />
          <label htmlFor="optionA">{QuestionList[question].optionA}</label>
        </div>
        <div>
          <input
            name="answer"
            id="optionB"
            type="radio"
            value={QuestionList[question].optionB}
            onChange={() => setchosenAnswer("B")}
          />
          <label htmlFor="optionB">{QuestionList[question].optionB}</label>
        </div>
        <div>
          <input
            name="answer"
            id="optionC"
            type="radio"
            value={QuestionList[question].optionC}
            onChange={() => setchosenAnswer("C")}
          />
          <label htmlFor="optionC">{QuestionList[question].optionC}</label>
        </div>
        <div>
          <input
            name="answer"
            id="optionD"
            type="radio"
            value={QuestionList[question].optionD}
            onChange={() => setchosenAnswer("D")}
          />
          <label htmlFor="optionD">{QuestionList[question].optionD}</label>
        </div>
      </div>
      {question == QuestionList.length - 1 ? (
        <button onClick={() => finishQuestions(contextProps)}>Finish</button>
      ) : (
        <button onClick={() => nextQuestion(contextProps)}>
          Next Question
        </button>
      )}
    </Fragment>
  );
};

export default QuizMenu;
