import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Arrow } from "../contents/arrow-left.svg";

import logo from "../contents/samplelogo.png";
import Contents from "./Contents";

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
          <img src={logo} className="logo" style={{ width: "80%" }} />
        </div>

        <ul>
          <li>
            <Link to="/" className="active" onClick={props.gotoHome}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/vision" onClick={props.gotoVision}>
              Vision
            </Link>
          </li>
          <li>
            <Link to="/contents" onClick={props.gotoContents}>
              Contents
            </Link>
          </li>
          <li>
            <Link to="/members" onClick={props.gotoMembers}>
              Members
            </Link>
          </li>
          <li>
            <Link to="*" onClick={props.gotoNoPage}>
              404
            </Link>
          </li>
        </ul>

        <a href="https://github.com/KEA-Kaffeine" className="cta">
          github
        </a>
      </nav>
    </div>
  );
}

export default Nav;
