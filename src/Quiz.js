import { useState } from "react";

import MainMenu from "./Components/MainMenu";
import QuizMenu from "./Components/QuizMenu";

function Quiz() {
  const [game, setGame] = useState("menu");
  return (
    <main>
      {game === "menu" && <MainMenu setGame={setGame} />}
      {game === "quiz" && <QuizMenu setGame={setGame} />}
    </main>
  );
}

export default Quiz;
