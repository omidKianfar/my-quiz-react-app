import { useContext, useState } from "react";

import Styles from "./EndPage.module.css";

import QuizContext from "../../../Hooks/Context";

import { showAnswers } from "../../../Tools/ShowAnswers";
import { resetQuiz } from "../../../Tools/ResetQuiz";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const EndPage = () => {
  const contetxProps = useContext(QuizContext);
  const { score, answers, QuestionList, show } = contetxProps;

  // element bootstrap classes
  const headClass = [`p-3 fw-bold rounded shadow`];
  const colButtonClass = [`d-flex justify-content-center`];
  const buttonClass = [`w-50 mb-3 shadow`];

  return (
    <main id="up" className={`${Styles.menu} p-4`}>
      <Container>
        {/* List of qiestions and answers */}
        <div>
          {!show ? (
            // Show and uhide question list and answers
            <h4 className={`${headClass} ${Styles.h5} text-center bg-info`}>
              Your Score: ( {score} / {QuestionList.length} )
            </h4>
          ) : (
            ""
          )}

          <Row className="mb-2">
            <Col sm={12} md={12} className={`${colButtonClass}`}>
              <Button
                className={` ${buttonClass} w-50`}
                variant="success"
                onClick={() => resetQuiz(contetxProps)}
              >
                Reset Quiz
              </Button>
            </Col>

            <Col sm={12} md={12} className={`${colButtonClass}`}>
              <Button
                className={` ${buttonClass} w-50`}
                variant="outline-dark"
                onClick={() => showAnswers(contetxProps)}
              >
                {!show ? "Show Answers" : "Hide Answers"}
              </Button>
            </Col>
          </Row>

          <Row>
            {show
              ? QuestionList.map((question, index) => (
                  <div key={index}>
                    <hr />
                    <h6
                      className={`${headClass} mb-2 lh-base bg-dark text-light`}
                    >
                      {question.question}
                    </h6>
                    <Row>
                      <Col sm={12} md={6}>
                        <Card className="mb-2">
                          <Card.Body>
                            <Card.Text>{question.optionA}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col sm={12} md={6}>
                        <Card className="mb-2">
                          <Card.Body>
                            <Card.Text>{question.optionB}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={12} md={6}>
                        <Card className="mb-2">
                          <Card.Body>
                            <Card.Text>{question.optionC}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col sm={12} md={6}>
                        <Card className="mb-2">
                          <Card.Body>
                            <Card.Text>{question.optionD}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={12} md={6}>
                        <Card className={`bg-info text-light mb-2`}>
                          <Card.Body>
                            <Card.Text>Your Answer: {answers[index]}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col sm={12} md={6}>
                        <Card className={`bg-success text-light mb-2`}>
                          <Card.Body>
                            <Card.Text>
                              True Answer: {question.answer}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                ))
              : ""}
          </Row>
          <Row>
            {show ? (
              // Link up page
              <Button
                variant="dark"
                className={`${buttonClass} mt-5 w-100`}
                href="#up"
              >
                Go Page Up
              </Button>
            ) : (
              ""
            )}
          </Row>
        </div>
      </Container>
    </main>
  );
};
export default EndPage;
