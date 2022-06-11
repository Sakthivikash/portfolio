import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <div id="About">
      <Container className="about-container">
        <Row className="title">
          <h1>About Me</h1>
          <h5 className="title-tagline">Who I am</h5>
        </Row>
        <Row className="about-box">
          <Col md={4} className="image-box">
            <div className="image"></div>
          </Col>
          <Col md={8} className="about-details">
            <div className="details">
              I'm Sakthivikash Full Stack Developer.I am a diploma in Mechnaical
              Engineering graduated. For me I'm not intrest to work in the
              mechanical field. So I decided to change my career into IT
              industry. Thus I learned Full Stack Developmeent Course.
            </div>
            <Button className="resume-button">Get Resume</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
