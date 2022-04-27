import Styles from "./MainMenu.module.css";

import { Container, Row, Button } from "react-bootstrap";

import QuizContext from "../../../Hooks/Context";

const MainMenu = () => {
  const boxClass = [`text-center p-3 fw-bold rounded shadow`];
  const RowClass = [`bg-info border border-3 border-dark`];
  const buttonClass = [`w-50 mx-auto shadow`];

  return (
    <QuizContext.Consumer>
      {({ setGame }) => {
        return (
          <main className={`${Styles.menu} col-md-8 p-4`}>
            <Container>
              <Row>
                <h1 className={`${boxClass} ${Styles.h1}`}>Menu</h1>
              </Row>

              <Row className={`${boxClass} ${RowClass}`}>
                <h3 className="mb-3 fw-bold">Java script Quiz</h3>

                <p>
                  Test your Java script knowlage with answer to 11 question.
                </p>

                <Button
                  className={`${buttonClass}`}
                  variant="success"
                  onClick={() => setGame("quiz")}
                >
                  Start Quiz
                </Button>
              </Row>
            </Container>
          </main>
        );
      }}
    </QuizContext.Consumer>
  );
};
export default MainMenu;
