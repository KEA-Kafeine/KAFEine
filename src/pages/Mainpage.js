import "../App.css";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { ReactComponent as Menu } from "../contents/menu.svg";
import { useMediaQuery } from "react-responsive";
import Nav from "./Nav";
import Home from "./Home";
import Vision from "./Vision";
import Members from "./Members";
import Contents from "./Contents";
import { useNavigate } from "react-router-dom";

function Mainpage() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const homeRef = useRef(null);
  const visionRef = useRef(null);
  const contentsRef = useRef(null);
  const membersRef = useRef(null);
  const navigate = useNavigate();

  const isTablet = useMediaQuery({
    query: "(min-width:844px)",
  });

  /* 네비바 사이즈 조정 시 자동으로 줄어듦 - 시작 */

  const isOpen = useMemo(() => {
    if (!isTablet) {
      //
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  }, [isTablet]);

  /* 네비바 사이즈 조정 시 자동으로 줄어듦 - 끝 */

  const gotoHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const gotoVision = () => {
    visionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const gotoContents = () => {
    contentsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const gotoMembers = () => {
    membersRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const homeSectionTop = homeRef.current.offsetTop;
      const visionSectionTop = visionRef.current.offsetTop;
      const contentsSectionTop = contentsRef.current.offsetTop;
      const membersSectionTop = membersRef.current.offsetTop;
      const sections = [
        { name: "home", top: homeSectionTop },
        { name: "vision", top: visionSectionTop },
        { name: "contents", top: contentsSectionTop },
        { name: "members", top: membersSectionTop },
      ];
      const activeSection = sections.find((section) => {
        const sectionTop = section.top - 80;
        return currentScrollPos >= sectionTop;
      });
      if (activeSection) {
        navigate(`#${activeSection.name}`);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate]);

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