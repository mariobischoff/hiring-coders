import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

export default function Router() {
  return (
    <Routes>
      <Route to="/" element={<Home />} />
      <Route to="/sign-in" element={<SignIn />} />
    </Routes>
  );
}
