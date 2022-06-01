// Save client answers to array
export const setAnswers = ({ setAnswers, answers, chosenAnswer }) => {
  setAnswers([...answers, chosenAnswer]);
};
