import Styles from "./About.module.css";

import { Container, Row, Col } from "react-bootstrap";

import myImg from "./Img/Untitled-2-min.jpg";

const About = () => {
  const headClass = [`text-center p-3 fw-bold bg-info rounded shadow `];
  const linkClass = [`link-info text-decoration-none`];

  return (
    <main className={`${Styles.menu} col-md-10 p-4`}>
      <Container>
        <h2 className={`${headClass} ${Styles.h1}`}>About Me</h2>

        <Row>
          <Col className="d-flex justify-content-around mb-5">
            <img
              src={myImg}
              alt="omid kianfar"
              className="w-50 rounded-circle shadow "
            />
          </Col>

          <Col>
            <p>Fname: omid</p>
            <p>Lname: kianfar</p>
            <p>Gmail: kianfar.omid.990@gmail.com</p>
            <p>
              Github:
              <a
                className={`${linkClass}`}
                href="https://github.com/omidKianfar"
              >
                &nbsp;https://github.com/omidKianfar
              </a>
            </p>
            <p>
              Linkedin:
              <a
                className={`${linkClass}`}
                href="www.linkedin.com/in/kianfar-omid1990"
              >
                &nbsp;www.linkedin.com/in/kianfar-omid1990
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h4>Copyright</h4>
            <hr />
            <p>May 9, 2022</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default About;
