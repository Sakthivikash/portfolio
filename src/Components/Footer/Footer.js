import React from "react";
import "./Footer.css";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <div id="Contact">
      <div
        className="box"
        style={{
          color: "white",
          textAlign: "center",
          padding: "50px 50px 0px 50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1>Contact Me</h1>
          <h4>
            <AddIcCallIcon /> Mobile: +91 9344305285
          </h4>
          <h4>
            <EmailIcon /> Email: sakthivikash@gmail.com
          </h4>{" "}
          <h4>
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
        </div>
        <p
          style={{
            justifySelf: "flex-end",
            height: "50px",
            paddingRight: "20px",
          }}
        >
          <Link to="#Home" smooth>
            <i
              class="fa fa-arrow-up up-icon"
              style={{
                color: "white",
                fontSize: "30px",
                border: "2px solid white",
                padding: "5px",
                borderRadius: "50%",
              }}
            ></i>
          </Link>
        </p>
      </div>
      <h5
        style={{ textAlign: "center", color: "white", padding: "10px" }}
        className="box"
      >
        <CopyrightIcon /> Copyright 2022 | Sakthivikash. All rigthts reserved
      </h5>
    </div>
  );
}

export default Footer;
