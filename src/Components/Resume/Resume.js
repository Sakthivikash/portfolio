import React, { useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import "./Resume.css";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import ConstructionIcon from "@mui/icons-material/Construction";

function Resume() {
  const [nav, setNav] = useState("skills");
  return (
    <div className="box" id="Skill">
      <Container className="resume-container">
        <Row className="resume-header">
          <h1>My Bio Details</h1>
        </Row>
        <Row className="resume-box">
          <Col md={5} className="resume-navs">
            <Button
              className="nav-item"
              onClick={() => {
                setNav("skills");
              }}
            >
              <span style={{ marginRight: "10px" }}>
                <LaptopMacIcon />
              </span>
              Programming Skills
            </Button>
            <Button
              className="nav-item"
              onClick={() => {
                setNav("edu");
              }}
            >
              <span style={{ marginRight: "10px" }}>
                <SchoolIcon />
              </span>
              Education
            </Button>
            <Button
              className="nav-item"
              onClick={() => {
                setNav("other");
              }}
            >
              <span style={{ marginRight: "10px" }}>
                <ConstructionIcon />
              </span>
              Other Tools
            </Button>
          </Col>
          <Col md={7} className="resume-details">
            {nav == "edu" && (
              <ListGroup>
                <ListGroup.Item>
                  Diploma
                  <h5> Er.Perumal Manimekalai Polytechnic College, Hosur.</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  HSC
                  <h5>Government Higher Secondary School, Barur.</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  SSLC
                  <h5> Government Higher Secondary School, Barur.</h5>
                </ListGroup.Item>
              </ListGroup>
            )}
            {nav == "skills" && (
              <ListGroup className="skills">
                <ListGroup.Item className="progress container">
                  <span className="name">
                    <i class="devicon-html5-plain"></i> HTML
                  </span>
                  <div className="progress">
                    <span className="progress-width html">&nbsp;</span>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="progress container">
                  <span className="name">
                    <i class="devicon-css3-plain"></i> CSS
                  </span>
                  <div className="progress">
                    <span className="progress-width css">&nbsp;</span>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="progress container">
                  <span className="name">
                    <i class="devicon-javascript-plain"></i> JavaScript
                  </span>
                  <div className="progress">
                    <span className="progress-width javascript">&nbsp;</span>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="progress container">
                  <span className="name">
                    <i class="devicon-react-original"></i> ReactJs
                  </span>
                  <div className="progress">
                    <span className="progress-width reactjs">&nbsp;</span>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="progress container">
                  <span className="name">
                    <i class="devicon-nodejs-plain"></i> NodeJs
                  </span>
                  <div className="progress">
                    <span className="progress-width nodejs">&nbsp;</span>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            )}

            {nav == "other" && (
              <ListGroup variant="flush" className="other-tools">
                <ListGroup.Item className="tool">
                  <i class="devicon-bootstrap-plain"></i> Bootstrap
                </ListGroup.Item>
                <ListGroup.Item className="tool">
                  <i class="devicon-mongodb-plain"></i> MongoDB
                </ListGroup.Item>
                <ListGroup.Item className="tool">
                  <i class="devicon-git-plain"></i> Git
                </ListGroup.Item>
                <ListGroup.Item className="tool">
                  <i class="devicon-vscode-plain"></i> VS Code
                </ListGroup.Item>
              </ListGroup>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
