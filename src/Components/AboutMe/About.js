import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./About.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Wave } from "react-animated-text";

function About() {
  const styles = {
    fontFamily: "'Dancing Script', cursive",
    textAlign: "center",
    marginTop: "10px",
  };

  return (
    <div id="About">
      <Container className="about-container">
        <AnimationOnScroll animateIn="animate__rubberBand" className="title">
          <h1>About Me</h1>
          <h5 className="title-tagline">Who I am</h5>
        </AnimationOnScroll>
        <Row className="about-box">
          <Col md={4} className="image-box">
            <div className="image" data-aos="zoom-in"></div>
          </Col>
          <Col md={8} className="about-details">
            <div className="details" data-aos="zoom-in">
              Hi✋ I'm Sakthivikash a passionate Full Stack Developer. I
              developed some full stack projects using MERN stack. My core
              skills are related to the Javascript and i am skilled in working
              underpressure and adapting to new situations and challenges.I have
              completed Diploma in Mechanical Engineeing at Er.Perumal
              Manimekalai Polytechnic College Hosur. In this world which is
              changing everyday with new technologies I want to update myself
              along with it and I want to begin my everyday of my life with new
              technologies so I learned Full stack development for update me to
              travel with this updating world. I'm very intrest about to learn
              new things. And I'm a nature loving person. Currently I am seeking
              job for suiting my skills.
              <br />
              <h3 style={styles}>
                <Wave
                  className="fact"
                  text={`"If you can dream it, you can do it"`}
                  effect="stretch"
                  effectChange="2"
                />
              </h3>
            </div>
            <a
              href="https://drive.google.com/file/d/1HXTPi_qy_K5RCoMOiD_tIcRu0zR0qtSP/view?usp=sharing"
              target="_blank"
            >
              <Button className="resume-button">Get Resume</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
