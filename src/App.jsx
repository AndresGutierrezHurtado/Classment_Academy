import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomNavbar from "./components/Navbar.jsx";
import { Banner } from "./components/Banner.jsx";
import { AccessibilityWidget } from "sena-accessibility";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import SchoolsCarousel from "./components/CarrouselSchools.jsx";
import CoursesCarousel from "./components/CarrouselCourses.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
                <CustomNavbar />
            <Banner />
            <CoursesCarousel />
            <SchoolsCarousel />
            
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <AccessibilityWidget theme="light" />
    </Router>
  );
}

export default App;
