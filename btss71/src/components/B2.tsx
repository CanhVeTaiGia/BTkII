import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../interface/interface";
import { genarateRandomNumber } from "../store/reducers/randomNumberArrayReducer.ts";

export const B2: React.FC = () => {
  const randomNums = useSelector(
    (state: RootType) => state.randomNumberArrayReducer
  );
  const dispatch = useDispatch();
  return (
    <>
      <p>List number: [ {randomNums.join(", ")} ]</p>
      <button onClick={() => dispatch(genarateRandomNumber())}>
        Thêm số vào mảng
      </button>
    </>
  );
};
