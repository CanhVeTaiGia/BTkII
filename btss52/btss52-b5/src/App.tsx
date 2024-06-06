import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Teashop from "./pages/teashop/Teashop";
import Pricing from "./pages/pricing/Pricing";
import Contact from "./pages/contact/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Routes>
        <Route path=""element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/tea-shop" element={<Teashop></Teashop>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        {/* <Route path="/service" element={<Service/>}></Route> */}
      </Routes>
      <Footer/>
    </>
  );
}
