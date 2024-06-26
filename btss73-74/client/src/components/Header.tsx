import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Job, RootType } from "../interface/interface";
import { addJob, updateJob } from "../store/reducers/jobSlice";

interface Props {
  isEdit: boolean;
  handleEdit: () => void;
  editJob: Job | null;
}

const Header: React.FC<Props> = ({ isEdit, handleEdit, editJob }) => {
  const data = useSelector((state: RootType) => {
    return state.jobs;
  });

  const [showEmptyWarning, setShowEmptyWarning] = useState<boolean>(false);

  const [job, setJob] = useState<Job>({
    id: 0,
    name: "",
    status: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isEdit && editJob) {
      setJob(editJob);
    }
  }, [isEdit, editJob]);

  const handleAddJob = () => {
    if (job.name === "") {
      return setShowEmptyWarning(true);
    }
    const found = data.jobs.filter((item) => {
      return item.name === job.name && item.id !== job.id;
    });
    if (found.length !== 0) {
      return alert("Không được trùng");
    }
    if (isEdit) {
      dispatch(updateJob(job));
    } else {
      dispatch(addJob(job));
    }
    setJob({
      id: 0,
      name: "",
      status: false,
    });
    handleEdit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newJob = {
      ...job,
      id: isEdit ? job.id : Math.floor(Math.random() * 10000000),
      [name]: value,
    };
    setJob(newJob);
  };

  const handleCancelEdit = () => {
    setJob({
      id: 0,
      name: "",
      status: false,
    });
    handleEdit();
  };

  return (
    <>
      <div className="w-[100%] flex gap-[10px]">
        <input
          value={job.name}
          name="name"
          onChange={handleChange}
          placeholder="Nhập tên công việc"
          type="text"
          className="pl-[10px] border-[1px] w-[100%] h-[40px] outline-none rounded-[3px]"
        />
        <button
          onClick={handleAddJob}
          className="w-[120px] border-[1px] rounded-[5px] shadow-md bg-[#08f] text-white"
        >
          {isEdit ? "Cập nhật" : "Thêm"}
        </button>
        {isEdit && (
          <button
            onClick={handleCancelEdit}
            className="w-[120px] border-[1px] rounded-[5px] shadow-md bg-[#f00] text-white"
          >
            Hủy
          </button>
        )}
      </div>
      {showEmptyWarning && (
        <p className="text-red-500">Tên công việc không được để trống!</p>
      )}
    </>
  );
};

export default Header;
