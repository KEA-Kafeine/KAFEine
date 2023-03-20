import React, { useState, useRef, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Arrow } from "../contents/arrow-left.svg";

import logo from "../contents/kafeine_logo.svg";

const logoCss = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Nav(props) {
  return (
    <div className="left-col">
      <nav className={props.sidebar ? "nav-menu active" : "nav-menu"}>
        <Arrow onClick={props.showSidebar} className="back-btn" />

        <div style={logoCss}>
          <img src={logo} className="logo" alt="" />
        </div>
        <ul>
          <li>
            <Link to="/" className={`${props.activeId === "home" ? "navClicked" : ""}`} onClick={props.gotoHome}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/vision" className={`${props.activeId === "vision" ? "navClicked" : ""}`} onClick={props.gotoVision}>
              Vision
            </Link>
          </li>
          <li>
            <Link to="/contents" className={`${props.activeId === "contents" ? "navClicked" : ""}`} onClick={props.gotoContents}>
              Contents
            </Link>
          </li>
          <li>
            <Link to="/members" className={`${props.activeId === "members" ? "navClicked" : ""}`} onClick={props.gotoMembers}>
              About Us
            </Link>
          </li>
        </ul>

        <div>
          <a href="https://github.com/KEA-Kafeine" target="_blank" rel="noopener noreferrer" className="giturl" />
          <a
            href="https://beneficial-structure-ef5.notion.site/8c5a2339d7844b4495fb958c882da344"
            target="_blank"
            rel="noopener noreferrer"
            className="notionurl"
          />
          <a href="https://www.figma.com/team_invite/redeem/oP4ZrfU1RCkDN3G4A5sQZ2" target="_blank" rel="noopener noreferrer" className="figmaurl" />
        </div>
      </nav>
    </div>
  );
}
export default Nav;
