import { setAnswerScore } from "./SetAnswerScore";

export const finishQuestions = (props) => {
  setAnswerScore(props);
  props.setGame("endPage");
};
