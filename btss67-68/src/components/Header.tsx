import { useState } from "react";
import { Form } from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../interface/interface";
import { action } from "../action/action";

export const Header: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const isEdit = false;
  const hideForm = () => {
    setShowAddForm(false);
  };
  const books = useSelector((state: RootType) => {
    return state.bookReducer;
  });
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "done") {
      return dispatch(action("PAYBOOK"));
    } else if (e.target.value === "undone") {
      return dispatch(action("UNPAYBOOK"));
    } else {
      return dispatch(action("ALL"));
    }
  };
  return (
    <>
      {showAddForm ? <Form hideForm={hideForm} isEdit={isEdit} /> : ""}
      <header className="w-[100%] h-[40px] flex justify-between items-center">
        <h2 className="text-[24px] font-[600]">Quản lí sinh viên mượn sách</h2>
        <nav className="">
          <select
            onChange={handleChange}
            className="mr-[20px] outline-none border-[1px] py-[5px] px-[10px] border-[#000] rounded-[4px] cursor-pointer"
          >
            <option className="cursor-pointer" hidden>
              Lọc theo trạng thái
            </option>
            <option className="cursor-pointer" value="all">
              Tất cả
            </option>
            <option className="cursor-pointer" value="done">
              Đã trả
            </option>
            <option className="cursor-pointer" value="undone">
              Chưa trả
            </option>
          </select>
          <button
            onClick={() => setShowAddForm(true)}
            className="border-[1px] py-[5px] px-[10px] bg-blue-500 text-white rounded-[5px]"
          >
            Thêm thông tin
          </button>
        </nav>
      </header>
    </>
  );
};
