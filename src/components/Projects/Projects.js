import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
  import Business from "../../Assets/Projects/Business_Website.png";
import form from "../../Assets/Projects/Form_validator.png";
import Quiz from "../../Assets/Projects/Quiz-app.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Business}
              isBlog={false}
              title="Business Website"
              description="A business website showcasing services, portfolio, and team to attract clients and share company information."
              ghLink="https://github.com/mayank1365/Business_Website"
              demoLink="https://mayank1365.github.io/Hackathon-Project-1/#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={Quiz}
                isBlog={false}
                title="Quiz App"
                description="A quiz app featuring 10 general knowledge questions, designed to test your knowledge. Built with React.js, the app tracks your score, provides instant feedback on each answer, and saves your progress. "
                ghLink="https://github.com/mayank1365/Quiz-App-Assignment-1"
                demoLink="https://mayank1365.github.io/Quiz-App-Assignment-1/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={form}
              isBlog={false}
              title="Form Validator"
              description="A simple form validator built with JavaScript. Validates user inputs in real-time, ensuring data accuracy and integrity."
              ghLink="https://github.com/mayank1365/Form-Validator-project"
              demoLink="https://mayank1365.github.io/Form-Validator-project/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
