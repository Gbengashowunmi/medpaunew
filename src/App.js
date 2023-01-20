import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import ScrollToTopNav from "./component/ScrollToTopNav";

AOS.init();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop className="scroll_up" smooth={true} />
      <ScrollToTopNav/>

      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="about" element={<About/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;