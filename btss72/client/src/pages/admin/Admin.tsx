import { useDispatch, useSelector } from "react-redux";
import { RootType, User } from "../../interface/interface";
import { useEffect } from "react";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../../store/reducers/userSlice";

export const Admin: React.FC = () => {
  const getData = useSelector((state: RootType) => state.userSlice);
  const dispatch = useDispatch();

  const addNewUser = () => {
    let newUser = {
      id: Math.floor(Math.random() * 10000000000000),
      name: "Chất",
    };
    // console.log("hello");
    dispatch(addUser(newUser));
  };

  const editUser = (id: number) => {
    let newUser = {
      id,
      name: "Chất Edit",
    }
    dispatch(updateUser(newUser));
  };

  const eraseUser = (id: number) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <>
      {getData.users.map((item: User) => {
        return (
          <div key={item.id}>
            {item.name}
            <button onClick={() => editUser(item.id)}>Sửa</button>
            <button onClick={() => eraseUser(item.id)}>Xóa</button>
          </div>
        );
      })}
      <button onClick={addNewUser}>Click</button>
    </>
  );
};
