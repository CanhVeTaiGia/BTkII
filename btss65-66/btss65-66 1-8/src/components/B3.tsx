import { useSelector } from "react-redux";
import { RootType } from "../interface/interface";

export default function B3() {
  const fruits = useSelector((state: RootType) => {
    return state.fruitReducer;
  });
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th colSpan={2}>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {fruits.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}.000 đ</td>
              <td>{item.stock}</td>
              <td>
                <button>Sửa</button>
              </td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
