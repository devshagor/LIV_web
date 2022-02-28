import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About US/About";
import Artist from "./components/Artist/Artist";
import Contact from "./components/Contact US/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
