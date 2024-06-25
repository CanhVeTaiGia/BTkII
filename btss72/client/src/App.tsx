import { Route, Routes } from "react-router-dom";
import { Admin } from "./pages/admin/Admin";

export const App: React.FC = () => {
  return <>
    <Routes>
      <Route path="/admin" element={<Admin/>}></Route>
    </Routes>
  </>;
};
