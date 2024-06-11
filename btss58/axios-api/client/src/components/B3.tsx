import axios from "axios";
import React, { useEffect } from "react";

export default function GetStudentById() {
  const getElementById = () => {
    axios
      .get("http://localhost:3000/students/2")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("Không tìm thấy bản ghỉ");
      });
  };
  return <></>;
}
