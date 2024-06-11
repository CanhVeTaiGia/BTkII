import axios from "axios";
import { useEffect } from "react";

export default function GetAllStudents() {
  const getAllStudents = () => {
    axios("http://localhost:3000/students")
      .then((res) => {
        console.log("Data: ", res.data);
      })
      .catch((error) => {
        console.error("Không tìm thấy bản ghi", error);
      });
  };

  useEffect(() => {
    getAllStudents();
  }, []);
  return <></>;
}
