import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Box from "@mui/material/Box";
import "./Navbar.css";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { HashLink as Link } from "react-router-hash-link";

function NavBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="home" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <i class="fa fa-home" aria-hidden="true"></i>
            </ListItemIcon>
            <ListItemText style={{ fontSize: "larger" }}>
              <Link to="#Home" smooth style={{ color: "black" }}>
                Home
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="about" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <i class="fa fa-user-secret" aria-hidden="true"></i>
            </ListItemIcon>
            <ListItemText style={{ fontSize: "larger" }}>
              <Link to="#About" smooth style={{ color: "black" }}>
                About
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="skill" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <i class="fa fa-cog" aria-hidden="true"></i>
            </ListItemIcon>
            <ListItemText style={{ fontSize: "larger" }}>
              <Link to="#Skill" smooth style={{ color: "black" }}>
                Skills
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="project" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <i class="fa fa-laptop" aria-hidden="true"></i>
            </ListItemIcon>
            <ListItemText style={{ fontSize: "larger" }}>
              <Link to="#Projects" smooth style={{ color: "black" }}>
                Projects
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="contact" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText style={{ fontSize: "larger" }}>
              <Link to="#Contact" smooth style={{ color: "black" }}>
                Contact
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Navbar bg="light" expand="lg" className="navbar-container">
      <Container className="navbar">
        <Navbar.Brand href="/">
          <h1 style={{ color: "white" }}>Portfolio</h1>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <React.Fragment key="Top">
            <Button onClick={toggleDrawer("Top", true)} s>
              <i
                class="fa fa-bars"
                style={{ backgroundColor: "white", fontSize: "30px" }}
              ></i>
            </Button>
            <SwipeableDrawer
              Top="Top"
              open={state["Top"]}
              onClose={toggleDrawer("Top", false)}
              onOpen={toggleDrawer("Top", true)}
            >
              {list("Top")}
            </SwipeableDrawer>
          </React.Fragment>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
