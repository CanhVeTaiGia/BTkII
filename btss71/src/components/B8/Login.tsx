import { useDispatch, useSelector } from "react-redux";
import { RootType, User } from "../../interface/interface";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    id: 0,
    username: "",
    password: "",
  });
  const users = useSelector((state: RootType) => state.userReducer);
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const foundUser = users.find(
      (item: User) =>
        item.username === user.username && item.password === user.password
    );
    if (foundUser) {
      navigate("/home", { state: user });
    } else {
      alert("Sai thông tin đăng nhập");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          onChange={handleChange}
          placeholder="email"
          type="text"
          name="email"
        />
        <input
          onChange={handleChange}
          placeholder="password"
          type="text"
          name="password"
        />
        <button type="submit">Đăng nhập</button>
      </form>
    </>
  );
};
