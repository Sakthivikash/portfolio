import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Box from "@mui/material/Box";
import "./Navbar.css";
import DnsIcon from "@mui/icons-material/Dns";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Wave } from "react-animated-text";

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

  const navs = [
    ["fa-home", "Home"],
    ["fa-user-secret", "About"],
    ["fa-cog", "Skills"],
    ["fa-laptop", "Projects"],
  ];

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
        {navs.map((nav, i) => (
          <ListItem disablePadding>
            <ListItemButton to={`#${nav[1]}`} smooth>
              <ListItemIcon>
                <i class={`fa ${nav[0]}`} aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText style={{ fontSize: "larger" }}>
                {nav[1]}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem key="contact" disablePadding>
          <ListItemButton to="#Contact" smooth>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText style={{ fontSize: "larger" }}>Contact</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Navbar bg="light" expand="lg" className="navbar-container">
      <Container className="navbar h-60">
        <Navbar.Brand href="/">
          <h3 style={{ color: "white" }}>
            <Wave text="Portfolio" effect="stretch" effectChange="2" />
          </h3>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <React.Fragment key="Top">
            <Button className="bar-btn" onClick={toggleDrawer("Top", true)}>
              <DnsIcon
                style={{
                  backgroundColor: "white",
                  fontSize: "30px",
                  borderRadius: "2px",
                  position: "fixed",
                  top: "25px",
                  marginLeft: "30px",
                  zIndex: "999",
                  boxShadow: "2px 2px 5px blue",
                }}
              />
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
