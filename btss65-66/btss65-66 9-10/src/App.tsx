import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import { RootState } from "./store/store";

const App: React.FC = () => {
  const loggedInUser = useSelector((state: RootState) => state.loggedInUser);

  useEffect(() => {
    if (loggedInUser) {
      console.log("Logged in user email:", loggedInUser.email);
    }
  }, [loggedInUser]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
