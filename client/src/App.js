import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import HotelDetail from "./pages/HotelDetail";
import Hotels from "./pages/Hotels";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
        <Route path="/register" />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
