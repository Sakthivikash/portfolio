import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./Projects.css";
import Taskflow from "../../Images/TaskFlow.png";
import Chatapp from "../../Images/Chatapp.png";

function Projects() {
  return (
    <div id="Projects">
      <Container className="project-box">
        <Row className="heading">
          <h1>Projects</h1>
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
            </Card.Body>
          </Card>
          <Card className="card">
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
