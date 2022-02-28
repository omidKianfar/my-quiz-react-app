import React from "react";

const MainMenu = ({ setGame }) => {
  return (
    <div>
      <h1>Quiz App Menu</h1>
      <button onClick={() => setGame("quiz")}>Start Game</button>
    </div>
  );
};
export default MainMenu;
