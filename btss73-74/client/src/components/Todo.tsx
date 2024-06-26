import { Checkbox } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Job } from "../interface/interface";
import { changeStatus, deletejob } from "../store/reducers/jobSlice";
import { useDispatch } from "react-redux";

interface Props {
  item: Job;
  onEdit: () => void
}
const Todo: React.FC<Props> = ({ item, onEdit }) => {
  const dispatch = useDispatch()
  const eraseJob = (id: number) => {
    dispatch(deletejob(id));
  };
  const editStatus = (job: Job) => {
    const newJob = {
      ...job,
      status: !job.status
    }
    dispatch(changeStatus(newJob));
  }
  return (
    <div className="w-[100%] mt-5 bg-[#eee] h-[40px] flex rounded p-[10px] pr-[20px] justify-between">
      <div className="h-full flex items-center">
        <Checkbox onChange={() => editStatus(item)} checked={item.status} />
        {item.status ? (
          <s className="block">{item.name}</s>
        ) : (
          <p className="block">{item.name}</p>
        )}
      </div>
      <div className="h-full flex items-end">
        <FontAwesomeIcon
        
          className="text-[#f80] cursor-pointer"
          icon={faPenToSquare}
        />
        <FontAwesomeIcon
          onClick={() => eraseJob(item.id)}
          className="text-[#f00] ml-[20px] cursor-pointer"
          icon={faTrashCan}
        />
      </div>
    </div>
  );
};

export default Todo;
