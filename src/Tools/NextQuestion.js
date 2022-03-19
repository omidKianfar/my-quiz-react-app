import { setAnswerScore } from "./SetAnswerScore";

export const nextQuestion = (props) => {
  const { setQuestion, question } = props;
  setAnswerScore(props);
  setQuestion(question + 1);
};
