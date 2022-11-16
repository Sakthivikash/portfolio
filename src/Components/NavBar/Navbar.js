import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Box from "@mui/material/Box";
import "./Navbar.css";
import DnsIcon from '@mui/icons-material/Dns';
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
          <ListItemButton to="#Home" smooth>
            <ListItemIcon>
              <i class="fa fa-home" aria-hidden="true"></i>
            </ListItemIcon>
            <ListItemText style={{ fontSize: "larger" }}>
                Home
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="about" disablePadding>
          <ListItemButton to="#About" smooth>
            <ListItemIcon>
              <i class="fa fa-user-secret" aria-hidden="true"></i>
            </ListItemIcon>
            <ListItemText style={{ fontSize: "larger" }}>
                About
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="skill" disablePadding>
          <ListItemButton to="#Skill" smooth>
            <ListItemIcon>
              <i class="fa fa-cog" aria-hidden="true"></i>
            </ListItemIcon>
            <ListItemText style={{ fontSize: "larger" }}>
                Skills
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="project" disablePadding>
          <ListItemButton to="#Projects" smooth>
            <ListItemIcon>
              <i class="fa fa-laptop" aria-hidden="true"></i>
            </ListItemIcon>
            <ListItemText style={{ fontSize: "larger" }}>
                Projects
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="contact" disablePadding>
          <ListItemButton to="#Contact" smooth>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText style={{ fontSize: "larger" }}>
                Contact
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
            <Button className="bar-btn" onClick={toggleDrawer("Top", true)}>
              <DnsIcon style={{ backgroundColor: "white", fontSize: "30px", borderRadius: "5px" }} />
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
