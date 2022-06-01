// Reset answrs and quiz to main menu page
export const resetQuiz = ({
  setQuestion,
  setScore,
  setGame,
  setAnswers,
  setShow,
  setchosenAnswer,
}) => {
  setScore(0);
  setQuestion(0);
  setGame("menu");
  setAnswers([]);
  setShow(false);
  setchosenAnswer("");
};
