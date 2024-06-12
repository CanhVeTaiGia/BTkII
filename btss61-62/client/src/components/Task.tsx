import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { changeStatus, deleteTaskById, TaskType } from "./TaskService";
import { useState } from "react";
import { ConfirmDelete } from "./Modal";

export default function Task({
  fetchTasks,
  task,
  refresh,
}: {
  task: TaskType;
  refresh: () => void;
  fetchTasks: () => Promise<void>;
}) {
  // State lưu trữ ẩn, hiện modal
  const [showModal, setShowModal] = useState<boolean>(false);

  // Hàm hiện modal
  const handleDelete = () => {
    setShowModal(true);
  };

  // Hàm cho checkbox
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    changeStatus(task.id, "status", !task.status);
    refresh();
  };

  // Hàm xác nhận
  const handleAccept = () => {
    deleteTaskById(task.id as number);
    setShowModal(false);
    refresh();
  };

  // Hàm từ chối
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="shadow-md flex-row flex w-[100%] rounded-[5px] h-[50px] border-[1px] justify-between items-center pr-[20px] pl-[5px] ">
        <div className="flex items-center">
          <div className="flex gap-4 w-max">
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="blue"
              >
                <input
                  onChange={handleChange}
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                  id="blue"
                  defaultChecked={task.status}
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </label>
            </div>
          </div>
          {task.status ? <s>{task.name}</s> : <p>{task.name}</p>}
        </div>
        <div className="flex gap-[20px]">
          <FontAwesomeIcon
            className="text-orange-500 cursor-pointer hover:text-orange-600"
            icon={faPen}
          />
          <FontAwesomeIcon
            className="text-red-500 cursor-pointer hover:text-red-600"
            onClick={handleDelete}
            icon={faTrash}
          />
        </div>
      </div>
      <ConfirmDelete
        showModal={showModal}
        accept={handleAccept}
        cancel={handleCancel}
      />
    </>
  );
}
