import { useSelector } from "react-redux";
import { RootType } from "../interface/interface";
import { Book } from "./Book";

export const BookList: React.FC = () => {
  const books = useSelector((state: RootType) => {
    return state.bookReducer;
  });
  return (
    <table className="border-[1px] w-[100%] mt-[20px] ">
      <thead>
        <tr>
          <th className="py-[5px] border-[1px] w-[5%] ">STT</th>
          <th className="py-[5px] text-start pl-[10px]">Tên sách</th>
          <th className="py-[5px] text-start pl-[10px] border-[1px]">Sinh viên mượn</th>
          <th className="py-[5px] text-start pl-[10px] border-[1px]">Ngày mượn</th>
          <th className="py-[5px] text-start pl-[10px] border-[1px]">Ngày trả</th>
          <th className="py-[5px] text-start pl-[10px] border-[1px]">Trạng thái</th>
          <th className="py-[5px] border-[1px] w-[15%]">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {books.map((item, index) => {
            return (<Book  key={item.id} book={item} index={index}/>)
        })}
      </tbody>
    </table>
  );
};
