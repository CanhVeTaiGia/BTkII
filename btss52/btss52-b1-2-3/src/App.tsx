import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/b1-2/Home";
import About from "./components/b1-2/About";
import Contact from "./components/b1-2/Contact";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}
