import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookInterface, RootType } from "../interface/interface";

interface FormProps {
  book?: BookInterface;
  hideForm: () => void;
  isEdit: boolean;
}

export const Form: React.FC<FormProps> = ({ book, hideForm, isEdit }: FormProps) => {
  const dispatch = useDispatch();
  const initialBookState = book || {
    id: Date.now(),
    name: "",
    studentName: "",
    loanDate: "",
    payDate: "",
    status: false,
  };
  const [formBook, setFormBook] = useState<BookInterface>(initialBookState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormBook({
      ...formBook,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !formBook.name ||
      !formBook.studentName ||
      !formBook.loanDate ||
      !formBook.payDate
    ) {
      return;
    }

    if (isEdit) {
      dispatch({ type: "EDITBOOK", payload: formBook });
    } else {
      dispatch({ type: "ADDBOOK", payload: formBook });
    }
    hideForm();
  };

  return (
    <div className="absolute w-[100%] h-[100vh] flex justify-center items-center bg-[#00000055] top-0 right-0">
      <form
        onSubmit={handleSubmit}
        className="w-[600px] p-[30px] bg-white border-[1px] rounded-[10px]"
      >
        <h2 className="w-[100%] flex justify-between mb-[10px]">
          <p className="text-[24px]">{isEdit ? "Sửa thông tin mượn sách" : "Thêm thông tin mượn sách"}</p>
          <p onClick={hideForm} className="text-[24px] cursor-pointer">
            X
          </p>
        </h2>
        <label className="inline-block mb-[10px]">Tên sách</label>
        <input
          value={formBook.name}
          onChange={handleChange}
          name="name"
          className="w-[100%] rounded-[5px] h-[40px] pl-[10px] outline-none border-[1px] mb-[20px]"
          type="text"
        />
        <label className="inline-block mb-[10px]">Tên người mượn</label>
        <input
          value={formBook.studentName}
          onChange={handleChange}
          name="studentName"
          className="w-[100%] rounded-[5px] h-[40px] pl-[10px] outline-none border-[1px] mb-[20px]"
          type="text"
        />
        <label className="inline-block mb-[10px]">Ngày mượn</label>
        <input
          value={formBook.loanDate}
          onChange={handleChange}
          name="loanDate"
          className="w-[100%] rounded-[5px] h-[40px] pl-[10px] outline-none border-[1px] mb-[20px]"
          type="date"
        />
        <label className="inline-block mb-[10px]">Ngày trả</label>
        <input
          value={formBook.payDate}
          onChange={handleChange}
          name="payDate"
          className="w-[100%] rounded-[5px] h-[40px] pl-[10px] outline-none border-[1px] mb-[20px]"
          type="date"
        />
        <button
          type="submit"
          className="w-[100%] rounded-[5px] h-[40px] pl-[10px] bg-blue-500 border-[1px] text-white"
        >
          {isEdit ? "Sửa" : "Thêm"}
        </button>
      </form>
    </div>
  );
};