export const resetQuiz = ({
  setQuestion,
  setScore,
  setGame,
  setAnswers,
  setShow,
}) => {
  setScore(0);
  setQuestion(0);
  setGame("menu");
  setAnswers([]);
  setShow(false);
};
