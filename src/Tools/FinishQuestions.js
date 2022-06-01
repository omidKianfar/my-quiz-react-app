import { setAnswerScore } from "./SetAnswerScore";

// After last question show end page
export const finishQuestions = (props) => {
  setAnswerScore(props);
  props.setGame("endPage");
};
