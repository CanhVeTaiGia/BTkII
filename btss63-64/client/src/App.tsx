import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import { PostType } from "./components/PostType";
import { baseURL } from "./api";
import { AxiosResponse } from "axios";

export default function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState<number>(10);
  const [pages, setPages] = useState<number>(0);
  const [showForm, setShowForm] = useState<boolean>(false);

  const loadData = () => {
    const startIndex = (currentPage - 1) * pageLimit;
    baseURL
      .get(`posts?_start=${startIndex}&_limit=${pageLimit}`)
      .then((res: AxiosResponse) => {
        setPosts(res.data);
        const totalPages = Math.ceil(res.headers["x-total-count"] / pageLimit);
        setPages(totalPages);
      })
      .catch((error) => {
        console.error("Lỗi, không thể lấy bài viết", error);
      });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowForm(false);
  };
  const showAddForm = () => {
    setShowForm(true);
  };
  const handleDelete = (id: number) => {
    baseURL
      .delete(`posts/${id}`)
      .then((res: AxiosResponse) => {
        if (res.status === 404) {
          return console.log("Lỗi, không tìm thấy bản ghi", res.status);
        }
        return console.log("Xóa bài viết thành công");
      })
      .catch((error) => {
        console.error("Lỗi, không thể xóa bài viết");
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [currentPage]);

  useEffect(() => {
    loadData();
  }, [pages]);
  return (
    <>
      <Modal />
      <nav className="ml-[20px] mt-[20px] flex justify-between items-center">
        <div className="flex gap-[10px]">
          <input
            placeholder="Nhập từ khóa tìm kiếm"
            type="text"
            className="w-[200px] h-[30px] pl-[10px] text-[14px] rounded-[3px] border-[1px] border-[#aaa] outline-none"
          />
          <select className="w-[120px] h-[30px] border-[1px] border-[#aaa] rounded-[3px] outline-none text-[#aaa]">
            <option
              className="text-[#000] rounded-[3px] w-[120px] h-[30px] bg-[#aaa]"
              value="Hello"
            >
              Hello
            </option>
          </select>
        </div>
        <button
          onClick={showAddForm}
          className="rounded-[5px] w-[200px] text-[#fff] h-[35px] mr-[20px] bg-[#00f]"
        >
          Thêm mới bài viết
        </button>
      </nav>
      <table className="mt-[10px] w-[100%]">
        <thead className="bg-[#ddd]">
          <tr>
            <th className="border-[2px] w-[5%] h-[35px] pl-[10px] text-start border-[#bbb]">
              STT
            </th>
            <th className="border-[2px] h-[35px] pl-[10px] text-start border-[#bbb]">
              Tiêu đề
            </th>
            <th className="border-[2px] w-[15%] h-[35px] pl-[10px] text-start border-[#bbb]">
              Hình ảnh
            </th>
            <th className="border-[2px] w-[20%] h-[35px] pl-[10px] text-start border-[#bbb]">
              Ngày viết
            </th>
            <th className="border-[2px] w-[15%] h-[35px] pl-[10px] text-start border-[#bbb]">
              Trạng thái
            </th>
            <th className="border-[2px] w-[20%] h-[35px] text-center border-[#bbb]">
              Chức năng
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index) => {
            return (
              <tr>
                <td className="h-[35px] border-[#bbb] border-[2px] pl-[10px]">
                  {(currentPage - 1) * 10 + (index + 1)}
                </td>
                <td className="h-[35px] border-[#bbb] border-[2px] pl-[10px]">
                  {item.title}
                </td>
                <td className="h-[35px] border-[#bbb] border-[2px] pl-[10px]">
                  <img src={item.image} />
                </td>
                <td className="h-[35px] border-[#bbb] border-[2px] pl-[10px]">
                  {item.date}
                </td>
                <td className="h-[35px] border-[#ddd] border-[2px] px-[50px]">
                  {item.status ? (
                    <button className="w-[120px] h-[25px] bg-[#00ff0033] border-[1px] border-[#0f0] text-[14px] text-[#34e440] rounded-[5px]">
                      Đang hoạt động
                    </button>
                  ) : (
                    <button className="w-[120px] h-[25px] bg-[#ff000033]  rounded-[5px] border-[1px] text-[14px] text-[#f00] border-[#f00]">
                      Ngừng hoạt động
                    </button>
                  )}
                </td>
                <td className="h-[35px] border-[#bbb] border-[2px] px-[10px] flex justify-around items-center">
                  {item.status ? (
                    <>
                      <button className="w-[90px] h-[25px] text-[#fff] text-[14px] rounded-[5px] bg-[#fecf25]">
                        Chặn
                      </button>{" "}
                    </>
                  ) : (
                    <button className="w-[90px] h-[25px] text-[#fff] text-[14px] rounded-[5px] bg-[#000000]">
                      Bỏ chặn
                    </button>
                  )}
                  <button className="bg-[#fff30b66] py-[2px] px-[10px] rounded-[3px] border-[1px] border-[#ffb744] text-[#ffb744]">
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="py-[2px] px-[10px] border-[1px] border-[#f00] text-[#f00] bg-[#f002] rounded-[3px]"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="w-[100%] justify-center flex gap-[10px] mt-[20px] ">
        {Array.from({ length: pages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={`w-[35px] h-[35px] border-[1px] ${
              page === currentPage ? "bg-[#07f] text-[#fff] border-none" : ""
            } rounded-[5px]`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      {showForm ? (
        <div className="absolute w-[100%] h-[100vh] top-0 left-0 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="p-[20px] rounded-[3px] bg-[#fff] w-[500px] border-[1px]"
          >
            <h2 className="text-[20px] flex justify-between font-[600] mb-[30px]">
              <p>Thêm mới bài viết</p>
              <p className="cursor-pointer" onClick={() => setShowForm(false)}>
                X
              </p>
            </h2>
            <label className="inline-block font-[700] text-[14px] mb-[10px]">
              Tên bài viết
            </label>
            <input
              type="text"
              className="p-[10px] w-[100%] h-[30px] border-[1px] mb-[10px] border-[#ddd] rounded-[3px] outline-none"
            />
            <label className="inline-block font-[700] text-[14px] mb-[10px]">
              Hình ảnh
            </label>
            <input
              type="text"
              className="p-[10px] w-[100%] h-[30px] border-[1px] mb-[10px] border-[#ddd] rounded-[3px] outline-none"
            />
            <label className="block font-[700] text-[14px] mb-[10px]">
              Nội dung
            </label>
            <textarea
              placeholder="Nhập nội dung"
              className="border-[1px] p-[10px] border-[#ddd] w-[100%] h-[200px] resize-none outline-none"
            ></textarea>
            <div className="w-[100%] flex justify-end">
              <button
                type="submit"
                className="w-[80px] h-[30px] rounded-[5px] border-[1px] mr-[10px] border-[#ddd]"
              >
                Xuất bản
              </button>
              <button
                type="reset"
                className="w-[80px] h-[30px] rounded-[5px] border-[1px] bg-[#09f]"
              >
                Làm mới
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
