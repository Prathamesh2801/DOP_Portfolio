import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShortFilms from "./components/ShortFilms";
import About from "./components/About";
import Music from "./components/Music";
import Commercials from "./components/Commercials";
import WebSeries from "./components/WebSeries";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaureFilms from "./components/FeatureFilms";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<ShortFilms/>}></Route>
          <Route path="/feature" element={<FeaureFilms/>}></Route>
          <Route path="/music" element={<Music/>}></Route>
          <Route path="/commercials" element={<Commercials/>}></Route>
          <Route path="/webseries" element={<WebSeries/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/details/:id" element={<Details/>} ></Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
