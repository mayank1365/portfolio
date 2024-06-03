import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I've developed a strong passion for programming and have gained proficiency in several key areas.
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple"> Java, Javascript and Python. </b>
                </i>
                <br />
                <br />
                My interests lie in building innovative web technologies and products, with a particular focus on BigData technology.
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript and Python Libraries and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> Pandas, NumPy, SciPy, React.js and Next.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/mayank1365"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/mayank-gupta-dev/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home2;
