import { Fragment, useContext } from "react";

import QuizContext from "../../../Hooks/Context";

import MainMenu from "../../Pages/MainMenu/MainMenu";
import QuizMenu from "../../Pages/QuizMenu/QuizMenu";
import EndPage from "../../Pages/EndPage/EndPage";

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

  return <Fragment>{setPage}</Fragment>;
};

export default Main;
