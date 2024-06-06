import { Route, Router, Routes } from "react-router-dom";
import ProductDetail from "./components/B1/ProductDetail";
import Student from "./components/B2-4/Student";
import Employee from "./components/B3/Employee";
import PrivateRouter from "./components/B4-5/PrivateRouter";
import Account from "./components/B4-5/Account";
import Login from "./components/B4-5/Login";
import Teams from "./components/B7/Teams";
import TeamsIndex from "./components/B7/TeamsIndex";
import Team from "./components/B7/Team";
import AdminIndex from "./components/B8/AdminIndex";
import PrivateRouter2 from "./components/B8/PrivateRouter2";
import Account2 from "./components/B8/Account2";
import Product from "./components/B8/Product";
import Order from "./components/B8/Order";

function App() {
  return (
    <>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/student/:name" element={<Student />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route path="/privateRouter" element={<PrivateRouter />}>
          <Route index path="account" element={<Account />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/teams" element={<Teams />}>
          <Route index element={<TeamsIndex />} />
          <Route path=":teamId" element={<Team />} />
        </Route>
        <Route path="/admin" element={<PrivateRouter2 />}>
          <Route index element={<AdminIndex />} />
          <Route path="account" element={<Account2 />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
