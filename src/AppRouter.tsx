/** @format */

import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./interface/home/Home";
import Info from "./interface/info/Info";
import Skill from "./interface/skill/Skill";
const AppRouter = () => {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/Home/*" element={<Home />} />
          <Route path="/Info/*" element={<Info />} />
          <Route path="/Skill/*" element={<Skill />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
