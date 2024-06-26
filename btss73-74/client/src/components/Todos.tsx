import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Navbar from "./Navbar";
import Todo from "./Todo";
import { Job, RootType } from "../interface/interface";
import { useEffect, useState } from "react";
import { getJobs } from "../store/reducers/jobSlice";

const Todos: React.FC = () => {
  const getData = useSelector((state: RootType) => state.jobs);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editJob, setEditJob] = useState<Job | null>(null);

  const handleEdit = () => {
    setIsEdit(true);
  }
  const handleEdit = (job: Job) => {
    setEditJob(job);
    setIsEdit(true);
  };
  const clearEdit = () => {
    setEditJob(null);
    setIsEdit(false);
  };

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  return (
    <>
      <div className="w-[700px] p-[20px] border-t-[1px] rounded-[5px] shadow-lg">
        <Header isEdit={isEdit} handleEdit={clearEdit} editJob={editJob} />
        <Navbar />
        {getData.jobs.map((item: Job) => {
          return <Todo key={item.id} item={item} onEdit={handleEdit} />;
        })}
      </div>
    </>
  );
};
export default Todos;
