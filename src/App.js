import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactComponent as Menu } from "./contents/menu.svg";
import { useState, useRef } from "react";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Members from "./pages/Members";
import NoPage from "./pages/NoPage";
import Contents from "./pages/Contents";

import "./pages/test.css";

function App() {
  //깃허브 테스트
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  const homeRef = useRef(null);
  const visionRef = useRef(null);
  const contentsRef = useRef(null);
  const membersRef = useRef(null);
  const noPageRef = useRef(null);

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
  const gotoNoPage = () => {
    noPageRef.current?.scrollIntoView({ behavior: "smooth" });
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
            gotoNoPage={gotoNoPage}
          />
          <Menu onClick={showSidebar} className="menu-btn" />
          <div className="main-content">
            <Home ref={homeRef} data={sidebar} />
            <Vision ref={visionRef} />
            <Contents ref={contentsRef} />
            <Members ref={membersRef} />
            <NoPage ref={noPageRef} />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
