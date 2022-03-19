import { Fragment } from "react";

import QuizContext from "../../Hooks/Context";

const MainMenu = () => {
  return (
    <QuizContext.Consumer>
      {({ setGame }) => {
        return (
          <Fragment>
            <h1>Quiz App Menu</h1>
            <button onClick={() => setGame("quiz")}>Start Game</button>
          </Fragment>
        );
      }}
    </QuizContext.Consumer>
  );
};
export default MainMenu;
