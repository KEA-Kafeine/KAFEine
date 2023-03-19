import "./App.css";
import React, { useCallback, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactComponent as Menu } from "./contents/menu.svg";
import { useState, useRef } from "react";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Members from "./pages/Members";
import NoPage from "./pages/NoPage";
import Contents from "./pages/Contents";

import { useMediaQuery } from "react-responsive";

function App() {
  const isTablet = useMediaQuery({
    query: "(min-width:874px)",
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
        <BrowserRouter>
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
            {/* <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/members" ref={membersRef} />
              <Route path="/contents" element={<Contents />} />
              <Route path="*" element={<NoPage />} />
            </Routes> */}
            {/* <NoPage ref={noPageRef} /> */}
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
