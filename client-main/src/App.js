import React from "react";
import Display from "./Display/Display";
import Modal from "./Modal/Modal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Display />} exact />
      </Routes>
    </Router>
  );
};

export default App;
