import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Movies App
import Home from "./Movies App/Home";
import SingleMovie from "./Movies App/SingleMovie";
import Error from "./Movies App/Error";

function App() {
  return (
    <>
      {/* =====================> Movies App <====================== */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
