import { RootType } from "../interface/interface";
import { useSelector } from "react-redux";

export default function B2() {
  const profiles = useSelector((state: RootType) => {
    return state.profileReducer;
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
        {profiles.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.birthOfDate}</td>
              <td>
                {item.address.district}, {item.address.city}
              </td>
              <td><button>Sửa</button></td>
              <td><button>Xóa</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
