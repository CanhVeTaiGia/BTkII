import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookInterface, RootType } from "../interface/interface";
import { Form } from "./Form";
import { action } from "../action/action";

interface Props {
  book: BookInterface;
  index: number;
}

export const Book: React.FC<Props> = ({ book, index }: Props) => {
  const bookState = useSelector((state: RootType) => {
    return state.bookReducer;
  });
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState<boolean>(false);
  
  const hideForm = () => {
    setShowForm(false);
  };

  const changeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedBook = { ...book, status: e.target.value === "done" };
    dispatch(action("CHANGESTATUS", updatedBook));
  };

  const handleDelete = (id: number) => {
    dispatch(action("DELETEBOOK", id));
  }
  return (
    <>
      <tr>
        <td className="py-[5px] border-[1px] text-center">{index + 1}</td>
        <td className="py-[5px] border-[1px] pl-[10px]">{book.name}</td>
        <td className="py-[5px] border-[1px] pl-[10px]">{book.studentName}</td>
        <td className="py-[5px] border-[1px] pl-[10px]">{book.loanDate}</td>
        <td className="py-[5px] border-[1px] pl-[10px]">{book.payDate}</td>
        <td className="py-[5px] border-[1px] pl-[10px]">
          <select
            onChange={changeStatus}
            className={`${
              book.status ? "bg-[#0f0]" : "bg-[#f00]"
            } text-[#fff] outline-none rounded-[50px] px-[5px]`}
            value={book.status ? "done" : "undone"}
          >
            <option className="bg-white text-[#000]" value="done">
              Đã trả
            </option>
            <option className="bg-white text-[#000]" value="undone">
              Chưa trả
            </option>
          </select>
        </td>
        <td className="flex justify-center gap-[10px] border-[1px] pl-[10px] py-[5px]">
          <button
            onClick={() => setShowForm(true)}
            className="w-[60px] rounded-[5px] border-[1px] text-orange-600 border-orange-400 h-[25px] bg-orange-200"
          >
            Sửa
          </button>
          <button onClick={() => handleDelete(book.id)} className="w-[60px] rounded-[5px] border-[1px] text-[#f00] border-red-500 h-[25px] bg-red-200">
            Xóa
          </button>
        </td>
      </tr>
      {showForm && <Form hideForm={hideForm} book={book} isEdit={true} />}
    </>
  );
};
