import { setAnswers } from "./SetAnswers";

export const setAnswerScore = (props) => {
  const { QuestionList, question, chosenAnswer, setScore, score } = props;
  if (QuestionList[question].answer === chosenAnswer) {
    setScore(score + 1);
  }
  setAnswers(props);
};
