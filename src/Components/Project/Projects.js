import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "./Projects.css";
import { projects } from "./ProjectsData";

function Projects() {
  return (
    <div id="Projects">
      <Container className="project-box">
        <Row className="heading">
          <h1>Projects</h1>
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
          ))}
          {/* <Card className="card ">
            <Card.Img variant="top" src={Chatapp} />
            <Card.Body>
              <Card.Title>ChatApp</Card.Title>
              <Card.Text>
                ChatApp is a real time chatting app created using mern stack.
              </Card.Text>
              <p>
                <b>Technologies Used:</b>
                ReactJS, NodeJS, MongoDB, Bootstrap, Mui Material
              </p>
              <div className="buttons">
                <a href="#">
                  <Button className="pro-btn">Live</Button>
                </a>
                <a href="#">
                  <Button className="pro-btn">FrontEnd</Button>
                </a>
                <a href="#">
                  <Button className="pro-btn">BackEnd</Button>
                </a>
              </div>
            </Card.Body>
          </Card> */}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
