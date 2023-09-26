import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import FreeTutorial from "./pages/FreeTutorial";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/freetutorial" element={< FreeTutorial/>} />
        <Route path="/courses" element={<Courses />} />
        
       
      </Routes>
    </div>
  );
}

export default App;