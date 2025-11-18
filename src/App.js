import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import './App.css';

function App(){
  <Router>
    <Navbar/>
    <div className="main-container">
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/education" element={Education}></Route>
        <Route path="/contact" element={Contact}></Route>
      </Routes>
    </div>
  </Router>
}
export default App;