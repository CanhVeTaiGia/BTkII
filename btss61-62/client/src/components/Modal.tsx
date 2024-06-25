import { useEffect, useState } from "react";
import { getAllTask, TaskType } from "./TaskService";

interface ModalProps {
  showModal: boolean;
  accept: () => void;
  cancel: () => void;
}
export function ConfirmDelete({ showModal, accept, cancel }: ModalProps) {
  return (
    <>
      {showModal ? (
        <div className="absolute flex justify-center items-center w-[100%] h-[100vh] bg-[#00000052] top-0 left-0">
          <div className=" p-[10px] border-[1px] bg-white rounded-[5px]">
            <h2 className="w-[100%] font-[500] text-[20px] mb-[10px] text-center">
              Bạn có chắc muốn xóa
            </h2>
            <div className="flex gap-[10px]">
              <button
                onClick={accept}
                className="w-[120px] h-[40px] bg-red-500 text-white rounded-[3px]"
              >
                Xác nhận
              </button>
              <button
                onClick={cancel}
                className="w-[120px] h-[40px] bg-white border-[1px] rounded-[3px]"
              >
                Từ chối
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export function CompletedAllTask({ tasks }: { tasks: TaskType[] }) {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const handleCancel = () => {
    setIsCompleted(false);
  };

  useEffect(() => {
    if (tasks.every((task) => !task.status)) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, []);
  return (
    <>
      {isCompleted ? (
        <div className="absolute flex justify-center items-center w-[100%] h-[100vh] bg-[#00000052] top-0 left-0">
          <div className=" p-[10px] border-[1px] bg-white rounded-[5px]">
            <h2 className="w-[100%] font-[500] text-[20px] mb-[10px] text-center">
              Bạn đã hoàn thành tất cả công việc
            </h2>
            <div className="flex gap-[10px] justify-center">
              <button
                onClick={handleCancel}
                className="w-[120px] h-[40px] bg-[#00f] border-[1px] rounded-[3px]"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
