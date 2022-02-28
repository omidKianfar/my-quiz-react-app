import { useState, Fragment } from "react";

import MainMenu from "./Components/MainMenu";
import QuizMenu from "./Components/QuizMenu";
import EndPage from "./Components/EndPage";

function Quiz() {
  // state -------------------------------------------------
  const [game, setGame] = useState("menu");
  const [chosenAnswer, setchosenAnswer] = useState("");
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  return (
    <Fragment>
      <main>
        {game === "menu" && <MainMenu setGame={setGame} />}
        {game === "quiz" && (
          <QuizMenu
            setGame={setGame}
            score={score}
            setScore={setScore}
            chosenAnswer={chosenAnswer}
            setchosenAnswer={setchosenAnswer}
            answers={answers}
            setAnswers={setAnswers}
            question={question}
            setQuestion={setQuestion}
          />
        )}
        {game === "endPage" && (
          <EndPage
            score={score}
            setScore={setScore}
            setGame={setGame}
            answers={answers}
            setAnswers={setAnswers}
            setQuestion={setQuestion}
          />
        )}
      </main>
    </Fragment>
  );
}

export default Quiz;
