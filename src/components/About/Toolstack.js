import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiLinux,
    SiWebstorm,
    SiIntellijidea,
    SiGithub,
    SiGooglecolab
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGooglecolab />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiWebstorm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        </Col>
    </Row>
  );
}

export default Toolstack;
