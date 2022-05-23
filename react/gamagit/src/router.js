import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./Home";
import Repositories from "./Repositories";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}
