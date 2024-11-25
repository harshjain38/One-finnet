import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { useRef } from "react";
import Home from "./components/Home.jsx";
import BicyclesPage from "./components/Bicycles.jsx";
import Navbar from "./components/Navbar.jsx";
import BicycleInfo from "./components/BicycleInfo.jsx";
import Footer from "./components/Footer.jsx";
import Accessories from "./components/Accessories.jsx";
import AccessoryPage from "./components/AccessoryPage.jsx";

export default function App() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
    <Router>
      <Navbar scrollToFooter={scrollToFooter}/>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/bicycles" element={<BicyclesPage />} ></Route>
            <Route path="/accessories" element={<Accessories />} ></Route>
            <Route path="/accessories/:id" element={<AccessoryPage />} ></Route>
            <Route path="/bicycles/:id" element={<BicycleInfo />} ></Route>
          </Routes>
        <Footer footerRef={footerRef}/>
    </Router>
    </div>
  
  );
}
