import { setAnswers } from "./SetAnswers";

// Save truth answers
export const setAnswerScore = (props) => {
  const { QuestionList, question, chosenAnswer, setScore, score } = props;
  if (QuestionList[question].answer === chosenAnswer) {
    setScore(score + 1);
  }
  setAnswers(props);
};
