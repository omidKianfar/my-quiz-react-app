import { useState } from "react";

import QuizContext from "../../Hooks/Context";
import QuestionList from "../QuestionList/QuestionList";
import Navbar from "./Navbar";

function Layout() {
  // state -------------------------------------------------
  const [game, setGame] = useState("menu");
  const [chosenAnswer, setchosenAnswer] = useState("");
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <QuizContext.Provider
      value={{
        game,
        setGame,
        score,
        setScore,
        chosenAnswer,
        setchosenAnswer,
        answers,
        setAnswers,
        question,
        setQuestion,
        show,
        setShow,
        QuestionList,
      }}
    >
      <Navbar />
    </QuizContext.Provider>
  );
}

export default Layout;
