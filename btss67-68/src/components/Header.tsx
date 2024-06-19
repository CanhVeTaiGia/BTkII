import { useState } from "react";
import { Form } from "./Form";

export const Header: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const isEdit = false;
  const hideForm = () => {
    setShowAddForm(false);
  }
  return (
    <>
    {showAddForm? <Form hideForm={hideForm} isEdit={isEdit}/> : ""}
      <header className="w-[100%] h-[40px] flex justify-between items-center">
        <h2 className="text-[24px] font-[600]">Quản lí sinh viên mượn sách</h2>
        <nav className="">
          <select className="mr-[20px] outline-none border-[1px] py-[5px] px-[10px] border-[#000] rounded-[4px]">
            <option hidden>Lọc theo trạng thái</option>
            <option value="Đã trả">Đã trả</option>
            <option value="Chưa trả">Chưa trả</option>
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
