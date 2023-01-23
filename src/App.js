import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import ScrollToTopNav from "./component/ScrollToTopNav";
import Shop from "./Pages/shop/Shop";
import ProductDetail from "./Pages/ProductDetails/ProductDetail";
  
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
        <Route path="shop" element={<Shop/>}></Route>
        <Route path="details" element={<ProductDetail/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
