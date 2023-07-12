/** @format */

import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./interface/title/Home";
const AppRouter = () => {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/Home/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
