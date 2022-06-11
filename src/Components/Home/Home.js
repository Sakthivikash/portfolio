import "./Home.css";
import React from "react";
import Typical from "react-typical";
import { Button, Container, Row } from "react-bootstrap";
import Resume from "../Resume/Resume";

function Home() {
  return (
    <div className="profile-container" id="Home">
      <Container className="profile-parent">
        <Row md={8} className="profile">
          <Container className="profile-details">
            <Row className="profile-details-name">
              <span className="primary-text">Hello🙋‍♂️, I'm </span>
              <span className="highlighted-text">Sakthivikash</span>
            </Row>
            <Row className="profile-details-role">
              <h2 style={{ textAlign: "left" }}>
                <Typical
                  steps={[
                    " Full Stack Developer 💻",
                    2000,
                    " MERN dev ✨",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </h2>
            </Row>
            <Row>
              <span className="primary-text">
                <span className="profile-role-tagline">
                  This portfolio is created using ReactJs
                </span>
              </span>
            </Row>
            <Row className="profile-options display-flex">
              {/* <Button className="hire-btn"> Hire Me </Button> */}
              <a
                href="https://drive.google.com/file/d/1Tc-H12on_WiAZ7_8oJtrQMM1nmCqwUkC/view?usp=sharing"
                target="_blank"
              >
                <Button className="resume-btn"> Get Resume</Button>
              </a>
            </Row>
          </Container>
        </Row>
        <Row md={4} className="profile-picture">
          <div className="profile-picture-background"></div>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
