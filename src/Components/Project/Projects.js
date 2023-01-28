import { motion } from "framer-motion";
import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import "./Projects.css";
import { projects } from "./ProjectsData";

function Projects() {
  return (
    <div id="Projects">
      <Container className="project-box">
        <Row className="heading">
          <h1 class="animate__animated animate__bounce animate__delay-2s">
            Projects
          </h1>
          <h5 className="title-tagline">Which I created</h5>
          <p>
            <span>
              <b style={{ fontSize: "18px" }}>Credentials:-</b>
              <span>
                <b>Email:</b> admin@demo.com & <b>Password:</b> admin123
              </span>{" "}
              ||{" "}
              <span>
                <b>Email:</b> user@demo.com & <b>Password:</b> user123
              </span>
            </span>
          </p>
        </Row>
        <Row className="card-container">
          {projects.map((project, idx) => (
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              variants={{
                visible: {
                  y: 1,
                  opacity: 2,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, y: 80 },
              }}
            >
              <Card className="card" key={idx}>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                  <p>
                    <b>Technologies Used:</b>
                    {project.technologiesUsed}
                  </p>
                  <div className="buttons">
                    <a href={project.live} target="_blank">
                      <Button className="pro-btn">Live</Button>
                    </a>
                    <a href={project.fEnd} target="_blank">
                      <Button className="pro-btn">FrontEnd</Button>
                    </a>
                    <a href={project.bEnd} target="_blank">
                      <Button className="pro-btn">BackEnd</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
