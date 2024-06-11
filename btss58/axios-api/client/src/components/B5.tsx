import axios from "axios";
import React, { useEffect } from "react";

export default function CreateStudent() {
  const createStudent = () => {
    const newStudent = {
      student_name: "Sơn",
      email: "son@gmail.com",
      address: "Hà Nội",
      phone: "093214689",
      status: true,
      create_at: "16/07/2024",
    };
    axios
      .post("http://localhost:3000/students", newStudent)
      .then((res) => {
        console.log("Đã thêm");
      })
      .catch((error) => {
        console.error("Không thể thêm");
      });
  };
  return <></>;
}
