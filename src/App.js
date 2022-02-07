import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Main from "./Pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-notes" element={<Main />} />
        {/* <Route path="/new-note" element={<NewNote />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
