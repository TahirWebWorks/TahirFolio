import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header'
import Home from "./pages/home/home";
import About from "./pages/about/about";
import CaseStudies from "./pages/works/works";
import Contact from "./pages/Contact/contact";

function App() {
  return (
    <div className="max-w-7xl">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
