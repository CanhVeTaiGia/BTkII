import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [users] = useState([
    {
      email: "hung@gmail.com",
      password: "1234",
      role: "admin",
    },
    {
      email: "vu@gmail.com",
      password: "345",
      role: "user",
    },
  ]);

  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const foundUser = users.find(
      (item) => item.email === user.email && item.password === user.password
    );

    if (foundUser) {
      navigate('/privateRouter/account', { state: foundUser });
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="email"
        type="text"
        placeholder="Email"
        value={user.email}
      />
      <input
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="Password"
        value={user.password}
      />
      <select
        onChange={handleChange}
        name="role"
        value={user.role}
      >
        <option value="">-- Chọn quyền --</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button type="submit">Login</button>
    </form>
  );
}
