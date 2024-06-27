import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export const CartHeader: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-[600]">Cart List</h2>
        <FontAwesomeIcon
          onClick={() => navigate("/")}
          className="text-[20px] text-[#f00] cursor-pointer"
          icon={faAngleLeft}
        />
      </div>
    </>
  );
};
