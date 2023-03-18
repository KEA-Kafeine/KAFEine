import "../App.css";
import React, { useCallback, useEffect, useMemo } from "react";
import { ReactComponent as Menu } from "../contents/menu.svg";
import { useState, useRef } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Vision from "./Vision";
import Members from "./Members";
import Contents from "./Contents";
import { useMediaQuery } from "react-responsive";

function Mainpage(ref) {
  const isTablet = useMediaQuery({
    query: "(min-width:768px)",
  });

  /* 네비바 사이즈 조정 시 자동으로 줄어듦 - 시작 */
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  const isOpen = useMemo(() => {
    if (!isTablet) {
      //
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  }, [isTablet]);

  /* 네비바 사이즈 조정 시 자동으로 줄어듦 - 끝 */

  const homeRef = useRef(null);
  const visionRef = useRef(null);
  const contentsRef = useRef(null);
  const membersRef = useRef(null);
  const gotoHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const gotoVision = () => {
    visionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const gotoContents = () => {
    contentsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const gotoMembers = () => {
    membersRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-page">
      <div className="container">
        <Nav
          showSidebar={showSidebar}
          sidebar={sidebar}
          gotoHome={gotoHome}
          gotoVision={gotoVision}
          gotoContents={gotoContents}
          gotoMembers={gotoMembers}
          // gotoNoPage={gotoNoPage}
        />
        <Menu onClick={showSidebar} className="menu-btn" />
        <div className="main-content">
          <Home ref={homeRef} data={sidebar} />
          <Vision ref={visionRef} />
          <Contents ref={contentsRef} />
          <Members ref={membersRef} />
        </div>
      </div>
    </div>
  );
}
export default Mainpage;
