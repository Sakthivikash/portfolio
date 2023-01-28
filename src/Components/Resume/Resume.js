import React, { useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import "./Resume.css";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import ConstructionIcon from "@mui/icons-material/Construction";
import { motion } from "framer-motion";
import netlify from "../../Images/netlify.png";

function Resume() {
  const [nav, setNav] = useState("skills");

  const skills = [
    ["devicon-html5-plain", "html", "HTML"],
    ["devicon-css3-plain", "css", "CSS"],
    ["devicon-javascript-plain", "javascript", "Javascript"],
    ["devicon-react-plain", "reactjs", "ReactJs"],
    ["devicon-nodejs-plain", "nodejs", "NodeJs"],
    ["devicon-mongodb-plain", "mongodb", "MongoDB"],
  ];
  const ohterTools = [
    ["devicon-bootstrap-plain", "Bootstrap"],
    ["devicon-heroku-original", "Heroku"],
    ["devicon-git-plain", "Git"],
    ["devicon-vscode-plain", "VS Code"],
  ];
  const education = [
    ["Diploma", "Er.Perumal Manimekalai Polytechnic College, Hosur."],
    ["HSC", "Government Higher Secondary School, Barur."],
    ["SSLC", "Government Higher Secondary School, Barur."],
  ];
  return (
    <div className="box" id="Skills">
      <Container className="resume-container">
        <Row className="resume-header">
          <h1>My Skills</h1>
          <h5 className="title-tagline" style={{ colour: "white" }}>
            What I learned
          </h5>
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
              Technical Skills
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
          </Col>
          <Col md={7} className="resume-details">
            {nav == "edu" && (
              <ListGroup>
                {education.map((edu) => (
                  <ListGroup.Item>
                    <motion.div
                      initial="hidden"
                      whileInView={"visible"}
                      variants={{
                        visible: {
                          x: 1,
                          opacity: 1,
                          transition: {
                            type: "spring",
                          },
                        },
                        hidden: { opacity: 1, x: 80 },
                      }}
                    >
                      <b>{edu[0]}</b>
                      <h5>{edu[1]}</h5>
                    </motion.div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
            {nav == "skills" && (
              <ListGroup className="skills">
                {skills.map((skill) => (
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        x: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, x: 80 },
                    }}
                  >
                    <ListGroup.Item className="progress container h-2">
                      <span className="name">
                        <i class={skill[0]}></i> {skill[2]}
                      </span>
                      <div className="progress">
                        <span className={`progress-width ${skill[1]}`}>
                          &nbsp;
                        </span>
                      </div>
                    </ListGroup.Item>
                  </motion.div>
                ))}
              </ListGroup>
            )}

            {nav == "other" && (
              <ListGroup variant="flush" className="other-tools">
                {ohterTools.map((tool) => (
                  <ListGroup.Item className="tool">
                    <motion.div
                      initial="hidden"
                      whileInView={"visible"}
                      variants={{
                        visible: {
                          x: 1,
                          opacity: 1,
                          transition: {
                            type: "spring",
                          },
                        },
                        hidden: { opacity: 1, x: 80 },
                      }}
                    >
                      <i class={tool[0]} style={{ color: "black" }}></i>{" "}
                      {tool[1]}
                    </motion.div>
                  </ListGroup.Item>
                ))}

                <ListGroup.Item className="tool">
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        x: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, x: 80 },
                    }}
                  >
                    <img
                      src={netlify}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />{" "}
                    Netlify
                  </motion.div>
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
