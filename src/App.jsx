import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import About from "./components/About";
import Music from "./components/Music";
import Commercials from "./components/Commercials";
import WebSeries from "./components/WebSeries";
import Gallery from "./components/Gallery";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/commercials/:id" element={<Details/>} ></Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
