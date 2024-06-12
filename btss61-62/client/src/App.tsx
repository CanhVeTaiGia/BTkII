import React from "react";
import Tasks from "./components/Tasks";
import Modal from "./components/Modal";

export default function App() {
  return (
    <>
    
      <div className="relative w-[100%] h-[100vh] flex justify-center items-center">
        <Tasks />
      </div>
    </>
  );
}
