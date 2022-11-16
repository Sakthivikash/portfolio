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
              <p>
                <span className="primary-text">Hello🙋‍♂️, I'm </span>
                <span className="highlighted-text">Sakthivikash</span>
              </p>
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
            <h4 style={{ marginTop: "10px" }}>
              <a
                href="https://www.linkedin.com/in/sakthivikash-s-vikash-820393201/"
                style={{ color: "white", margin: "10px" }}
                target="_blank"
              >
                <i class="devicon-linkedin-plain"></i>
              </a>{" "}
              <a
                href="https://github.com/Sakthivikash"
                style={{ color: "white", margin: "10px" }}
                target="_blank"
              >
                <i class="devicon-github-original"></i>
              </a>
            </h4>
            <Row className="profile-options display-flex">
              {/* <Button className="hire-btn"> Hire Me </Button> */}
              <a
                href="https://drive.google.com/file/d/1HXTPi_qy_K5RCoMOiD_tIcRu0zR0qtSP/view?usp=sharing"
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
