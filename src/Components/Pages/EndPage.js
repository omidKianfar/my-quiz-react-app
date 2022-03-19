import { Fragment, useContext } from "react";

import QuizContext from "../../Hooks/Context";

import { showAnswers } from "../../Tools/ShowAnswers";
import { resetQuiz } from "../../Tools/ResetQuiz";

const EndPage = () => {
  const contetxProps = useContext(QuizContext);
  const { score, answers, QuestionList, show } = contetxProps;

  return (
    <Fragment>
      <div id="up">
        <h1>Quiz Finished</h1>
        <h4>
          Your Score: ( {score} / {QuestionList.length} )
        </h4>
        <button onClick={() => resetQuiz(contetxProps)}>Reset Quiz</button>
        <button onClick={() => showAnswers(contetxProps)}>
          Show Questions and Answers
        </button>
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
