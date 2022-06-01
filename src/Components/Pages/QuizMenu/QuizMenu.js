import { useContext } from "react";

import Styles from "./QuizMenu.module.css";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import QuizContext from "../../../Hooks/Context";

import { finishQuestions } from "../../../Tools/FinishQuestions";
import { nextQuestion } from "../../../Tools/NextQuestion";
import { resetQuiz } from "../../../Tools/ResetQuiz";

const QuizMenu = () => {
  const contextProps = useContext(QuizContext);
  const { QuestionList, question, chosenAnswer, setchosenAnswer } =
    contextProps;

  // Bootstrap classes
  const headClass = [`text-center p-3 fw-bold rounded shadow`];
  const colButtonClass = [`d-flex justify-content-center`];
  const buttonClass = [`w-50 mt-3 shadow`];

  return (
    <main className={`${Styles.menu}  p-4`}>
      {/* Question */}
      <h6 className={`${headClass} mb-4 bg-info`}>
        {QuestionList[question].question}
      </h6>

      {/* Answers */}
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Card
              className={`${Styles.card} 
                ${
                  chosenAnswer === "A" ? "border border-3 border-dark" : ""
                } mb-2`}
              onClick={() => setchosenAnswer("A")}
            >
              <Card.Body>
                <Card.Text>{QuestionList[question].optionA}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6}>
            <Card
              className={`${Styles.card} ${
                chosenAnswer === "B" ? "border border-3 border-dark" : ""
              } mb-2`}
              onClick={() => setchosenAnswer("B")}
            >
              <Card.Body>
                <Card.Text>{QuestionList[question].optionB}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6}>
            <Card
              className={`${Styles.card}
               ${chosenAnswer === "C" ? "border border-3 border-dark" : ""}
              mb-2 `}
              onClick={() => setchosenAnswer("C")}
            >
              <Card.Body>
                <Card.Text>{QuestionList[question].optionC}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6}>
            <Card
              className={`${Styles.card}
                ${
                  chosenAnswer === "D" ? "border border-3 border-dark" : ""
                } mb-2`}
              onClick={() => setchosenAnswer("D")}
            >
              <Card.Body>
                <Card.Text>{QuestionList[question].optionD}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={12} className={`${colButtonClass}`}>
            {question == QuestionList.length - 1 ? (
              <Button
                className={`${buttonClass}`}
                variant="success"
                onClick={() => finishQuestions(contextProps)}
              >
                Finish
              </Button>
            ) : (
              <Button
                className={`${buttonClass}`}
                variant="success"
                onClick={() => nextQuestion(contextProps)}
              >
                Next Question
              </Button>
            )}
          </Col>

          <Col sm={12} md={12} className={`${colButtonClass}`}>
            <Button
              className={`${buttonClass}`}
              variant="outline-dark"
              onClick={() => resetQuiz(contextProps)}
            >
              Exit Quiz
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default QuizMenu;
