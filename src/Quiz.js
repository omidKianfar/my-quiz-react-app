import { useState } from "react";

import MainMenu from "./Components/MainMenu";
import QuizMenu from "./Components/QuizMenu";

function Quiz() {
  // state -------------------------------------------------
  const [game, setGame] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <main>
      {game === "menu" && <MainMenu setGame={setGame} />}
      {game === "quiz" && (
        <QuizMenu setGame={setGame} score={score} setScore={setScore} />
      )}
      {console.log(score)}
    </main>
  );
}

export default Quiz;
