import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Browse from "./Browse";
import Login from "./Login";

function Body() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Body;
