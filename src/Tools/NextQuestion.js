import { setAnswerScore } from "./SetAnswerScore";

// After question show next question
export const nextQuestion = (props) => {
  const { setQuestion, question } = props;
  setAnswerScore(props);
  setQuestion(question + 1);
};
