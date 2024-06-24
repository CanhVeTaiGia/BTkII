import { Outlet, Route, Routes } from "react-router-dom";
import { B1 } from "./components/B1";
import { B2 } from "./components/B2";
import { B3 } from "./components/B3";
import { B4 } from "./components/B4";
import { B5 } from "./components/B5";
import { B6 } from "./components/B6";
import { B7 } from "./components/B7";
import { Login } from "./components/B8/Login";
import { Home } from "./components/B8/Home";

export const App: React.FC = () => {
  return (
    <>
      <h2>Bài 1</h2>
      <B1 />
      <h2>Bài 2</h2>
      <B2 />
      <h2>Bài 3</h2>
      <B3 />
      <h2>Bài 4</h2>
      <B4 />
      <h2>Bài 5</h2>
      <B5 />
      <h2>Bài 6</h2>
      <B6 />
      <h2>Bài 7</h2>
      <B7 />
      <h2>Bài 8</h2>
      <Outlet />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
};
