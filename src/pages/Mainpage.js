import "../App.css";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { ReactComponent as Menu } from "../contents/menu.svg";
import { useMediaQuery } from "react-responsive";
import Nav from "./Nav";
import Home from "./Home";
import Vision from "./Vision";
import Members from "./Members";
import Contents from "./Contents";

function Mainpage() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const homeRef = useRef(null);
  const visionRef = useRef(null);
  const contentsRef = useRef(null);
  const membersRef = useRef(null);

  const [activeId, setActiveId] = useState("home");

  const isTablet = useMediaQuery({
    query: "(min-width:844px)",
  });

  useIntersectionObservation(setActiveId);

  /* 네비바 사이즈 조정 시 자동으로 줄어듦 - 시작 */

  useMemo(() => {
    if (!isTablet) {
      //
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  }, [isTablet]);

  /* 네비바 사이즈 조정 시 자동으로 줄어듦 - 끝 */

  const gotoHome = () => {
    setActiveId("Home");
    homeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const gotoVision = () => {
    setActiveId("vision");
    visionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const gotoContents = () => {
    setActiveId("contents");
    contentsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const gotoMembers = () => {
    setActiveId("members");
    membersRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app-page">
      <div className="container">
        <Nav
          activeId={activeId}
          showSidebar={showSidebar}
          sidebar={sidebar}
          gotoHome={gotoHome}
          gotoVision={gotoVision}
          gotoContents={gotoContents}
          gotoMembers={gotoMembers}
        />
        <Menu onClick={showSidebar} className="menu-btn" />
        <div className="main-content">
          <Home ref={homeRef} />
          <Vision ref={visionRef} />
          <Contents ref={contentsRef} />
          <Members ref={membersRef} />
        </div>
      </div>
    </div>
  );
}

const useIntersectionObservation = (setActiveId) => {
  const contentRef = useRef({});

  useEffect(() => {
    const callback = (observedContent) => {
      observedContent.forEach((content) => {
        contentRef.current[content.target.id] = content;
      });

      const visibleContent = Object.values(contentRef.current).filter((content) => content.isIntersecting);
      setActiveId(visibleContent[0].target.id);
    };
    //1. 새로운 observer 설정
    const observer = new IntersectionObserver(callback, {
      rootMargin: "-20% 0px",
      threshold: [0, 0.5, 1],
    });

    //2. DOM 요소 찾고 Observer달아주기
    const contents = [...document.querySelectorAll(".content")];

    contents.forEach((content) => observer.observe(content));

    //3. 언 마운트시 옵저버 해제
    return () => observer.disconnect();
  }, [setActiveId]);
};

export default Mainpage;
