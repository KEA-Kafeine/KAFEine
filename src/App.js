import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <div className="app-page">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainpage />}/>
            <Route path="/vision" element={<Mainpage />}/>
            <Route path="/members" element={<Mainpage />} />
            <Route path="/contents" element={<Mainpage />}/>
            <Route path="*" element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;