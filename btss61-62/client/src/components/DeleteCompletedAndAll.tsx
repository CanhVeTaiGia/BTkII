import { useState } from "react";
import {ConfirmDelete} from "./Modal";
import { deleteAllTask, deleteCompletedTask } from "./TaskService";

export default function DeleteCompletedAndAll() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [actionType, setActionType] = useState<string>("");

  // Hàm xóa công việc hoàn thành
  const handleDeleteCompleted = () => {
    setActionType("deleteCompleted");
    setShowModal(true);
  };

  // Hàm xóa tất cả các công việc
  const handleDeleteAll = () => {
    setActionType("deleteAll");
    setShowModal(true);
  };

  // Chấp nhận xóa
  const handleAccept = () => {
    if (actionType === "deleteCompleted") {
      deleteCompletedTask();
    } else if (actionType === "deleteAll") {
      deleteAllTask();
    }
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="w-[100%] h-[40px] flex justify-between mt-[20px]">
        <button
          onClick={handleDeleteCompleted}
          className="w-[200px] h-[100%] rounded-[5px] hover:bg-red-600 bg-red-500 justify-center items-center flex text-white"
        >
          Xóa công việc hoàn thành
        </button>
        <button
          onClick={handleDeleteAll}
          className="w-[200px] h-[100%] rounded-[5px] hover:bg-red-600 bg-red-500 justify-center items-center flex text-white"
        >
          Xóa tất cả công việc
        </button>
      </div>
      <ConfirmDelete
        showModal={showModal}
        accept={handleAccept}
        cancel={handleCancel}
      />
    </>
  );
}
