import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import NoPage from "./pages/NoPage";
import Mainpage from "./pages/Mainpage";

function App() {
  const homeRef = useRef(null);
  const visionRef = useRef(null);
  const contentsRef = useRef(null);
  const membersRef = useRef(null);
  // const noPageRef = useRef(null);
  return (
    <div className="app-page">
      <div className="container">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Mainpage ref={homeRef}/>}/>
              <Route path="/vision" element={<Mainpage ref={visionRef}/>}/>
              <Route path="/members" element={<Mainpage ref={membersRef}/>} />
              <Route path="/contents" element={<Mainpage ref={contentsRef}/>}/>
              <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;