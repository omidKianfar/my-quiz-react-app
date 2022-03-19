import { useContext } from "react";

import QuizContext from "../../Hooks/Context";

import MainMenu from "../Pages/MainMenu";
import QuizMenu from "../Pages/QuizMenu";
import EndPage from "../Pages/EndPage";

const Main = () => {
  const { game } = useContext(QuizContext);

  let setPage = null;
  switch (game) {
    case "menu":
      setPage = <MainMenu />;
      break;
    case "quiz":
      setPage = <QuizMenu />;
      break;
    case "endPage":
      setPage = <EndPage />;
      break;
  }

  return <div>{setPage}</div>;
};

export default Main;
