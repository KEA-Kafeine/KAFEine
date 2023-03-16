import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ReactComponent as Menu } from "./contents/menu.svg";
import { ReactComponent as Arrow } from "./contents/arrow-left.svg";
import { useState } from "react";

export function Navbar() {
  var xPos = 0;
  const [style, setStyle] = React.useState({
    transform: `translateX(xPos)`,
  });

  const hide = () => {
    setStyle({ transform: `translateX(-100%)` });
    console.log(xPos);
  };

  const show = () => {
    setStyle({ transform: `translateX(0)` });
    console.log(xPos);
  };
}
