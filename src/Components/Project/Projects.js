import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "./Projects.css";
import Taskflow from "../../Images/TaskFlow.png";
import Chatapp from "../../Images/Chatapp.png";

function Projects() {
  return (
    <div id="Projects">
      <Container className="project-box">
        <Row className="heading">
          <h1>Projects</h1>
          <p>
            <span>
              <b style={{ fontSize: "18px" }}>Credentials:-</b>
              <b>Email:</b> user@demo.com | <b>Password:</b> user123{" "}
            </span>
          </p>
        </Row>
        <Row className="card-container">
          <Card className="card">
            <Card.Img variant="top" src={Taskflow} />
            <Card.Body>
              <Card.Title>TaskFlow</Card.Title>
              <Card.Text>
                Task flow website is a Project Managment Tool application. It is
                created for handling projects with step by step.
              </Card.Text>
              <p>
                <b>Technologies Used:</b>
                ReactJS, NodeJS, MongoDB, Bootstrap, Mui Material
              </p>
              <div className="buttons">
                <a href="https://vocal-madeleine-55f8d7.netlify.app/">
                  <Button className="pro-btn">Live</Button>
                </a>
                <a href="https://github.com/Sakthivikash/project-management-tool-client">
                  <Button className="pro-btn">FrontEnd</Button>
                </a>
                <a href="https://github.com/Sakthivikash/Project-management-tool-back-end">
                  <Button className="pro-btn">BackEnd</Button>
                </a>
              </div>
            </Card.Body>
          </Card>
          <Card className="card ">
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
          </Card>
          {/* <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={Taskflow}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  TaskFlow
                </Typography>
                <Typography variant="h5" component="p">
                  Technologies Used: 
                </Typography>
                <Typography variant="h6" color="text.secondary">
                 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> */}
          {/* <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={Chatapp}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  ChatApp
                </Typography>
                <Typography variant="h5" component="p">
                  Technologies Used: ReactJS, NodeJS, MongoDB, Bootstrap, Mui
                  Material
                </Typography>
                <Typography variant="h6" color="text.secondary">
                 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> */}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
