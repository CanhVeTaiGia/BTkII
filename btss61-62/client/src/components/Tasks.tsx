import { useEffect, useState } from "react";
import AddStudent from "./AddAndEditStudent";
import Task from "./Task";
import TaskFilter from "./TaskFilter";
import { getAllTask, TaskType } from "./TaskService";
import DeleteCompletedAndAll from "./DeleteCompletedAndAll";
import Loading from "./Loading";
import { CompletedAllTask } from "./Modal";

export default function Tasks() {
  // Hàm lưu trữ công việc
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [toggle, setToggle] = useState<boolean>(true);

  // Hàm thay đối status
  const refresh = () => {
    const prevTask = [...tasks];
    setTasks(prevTask);
    return;
  };
  // Hàm lấy dữ liệu
  const fetchTasks = async () => {
    try {
      const allTask = await getAllTask();
      setTasks(allTask);
    } catch (error) {
      console.error("Lỗi, không thể lấy task");
    }
  };

  // Hàm re-render
  useEffect(() => {
    fetchTasks();
  }, []);

  // useEffect(() => {
    // fetchTasks();
  // }, [tasks]);

  useEffect(() => {
    setTimeout(() => {
      setToggle(false);
    }, 1000);
  }, [toggle]);
  return (
    <>
      {toggle ? <Loading /> : ""}
      <div className="w-[500px] p-[20px] border-[1px] rounded-[4px] shadow-sm">
        <h1 className="mb-[10px] w-[100%] text-center text-[24px] font-[600]">
          Quản lí công việc
        </h1>
        <AddStudent />
        <TaskFilter />
        <div
          className="
          mt-[20px] w-[100%]
        "
        >
          <div className="w-[100%] flex flex-col gap-[20px] overflow-y-auto  max-h-[320px]">
            {tasks.map((task: TaskType) => {
              return <Task key={task.id} fetchTasks={fetchTasks} refresh={refresh} task={task} />;
            })}
          </div>
        </div>
        <DeleteCompletedAndAll />
      </div>
      <CompletedAllTask tasks={tasks}/>
    </>
  );
}
