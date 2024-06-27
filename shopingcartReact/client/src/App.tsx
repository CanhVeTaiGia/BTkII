import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Carts from "./pages/Carts";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products></Products>} />
        <Route path="/cart" element={<Carts></Carts>} />
      </Routes>
    </>
  );
};
export default App;
