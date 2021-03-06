import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Charts from "./pages/Charts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/charts" element={<Charts />} />
      </Routes>
    </Router>
  );
};

export default App;
