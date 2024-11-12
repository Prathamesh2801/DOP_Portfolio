import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Music from "./components/Music";
import Commercials from "./components/Commercials";
import WebSeries from "./components/WebSeries";
import Gallery from "./components/Gallery";
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Cards/>}></Route>
          <Route path="/music" element={<Music/>}></Route>
          <Route path="/commercials" element={<Commercials/>}></Route>
          <Route path="/webseries" element={<WebSeries/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
