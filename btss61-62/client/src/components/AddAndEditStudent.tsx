import { useState } from "react";
import { addStudent, TaskType } from "./TaskService";

export default function AddAndEditStudent() {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<TaskType>({
    id: 0,
    name: "",
    status: false,
  });
  const handleAddStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addStudent(newTask);
    resetInput();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (value === "") {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
      setNewTask({
        ...newTask,
        id: Math.floor(Math.random() * 1000000000),
        [name]: value,
      });
    }
  };

  const resetInput = () => {
    setNewTask({
      id: 0,
      name: "",
      status: false,
    });
  };
  return (
    <>
      <form
        onSubmit={handleAddStudent}
        className="w-[100%] mb-[20px] p-[10px] py-[20px] border-[1px] shadow-md flex rounded-[3px] justify-center flex-wrap"
      >
        <div className="w-[90%] mb-[10px]">
          {" "}
          <input
            name="name"
            onChange={handleChange}
            placeholder="Nhập tên công việc"
            type="text"
            className={`pl-[10px] border-[1px] w-[100%] h-[35px] rounded-[4px] outline-none ${isEmpty? "border-[#f00]" : ""}`}
          />
          {isEmpty ? (
            <p className=" text-[14px] text-[#f00]">
              Không được để trống ô input
            </p>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="w-[90%] h-[35px] rounded-[4px] bg-blue-500 text-center text-white"
        >
          Thêm công việc
        </button>
      </form>
    </>
  );
}
