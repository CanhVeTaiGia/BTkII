import axios from "axios";
import { useEffect } from "react";

export default function RemoveById() {
  const removeById = () => {
    axios
      .delete("http://localhost:3000/students/3")
      .then((res) => {
        console.log("Đã xóa");
      })
      .catch((error) => {
        console.error("Không thể xóa");
      });
  };
  return <></>;
}
