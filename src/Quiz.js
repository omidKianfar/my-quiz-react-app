import { useState } from "react";

import MainMenu from "./Components/MainMenu";

function Quiz() {
  const [game, setGame] = useState("menu");
  return <main>{game === "menu" && <MainMenu setGame={setGame} />}</main>;
}

export default Quiz;
