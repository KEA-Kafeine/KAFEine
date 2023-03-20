import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" id="home" element={<Mainpage />} />
        <Route path="/vision" id="vision" element={<Mainpage />} />
        <Route path="/members" id="members" element={<Mainpage />} />
        <Route path="/contents" id="contents" element={<Mainpage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
