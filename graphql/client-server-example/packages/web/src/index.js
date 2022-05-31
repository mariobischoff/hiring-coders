import { ApolloProvider } from "@apollo/client";
import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import client from "./plugins/apollo/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authenticate" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);
