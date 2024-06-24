import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../interface/interface";
import { decrement, increment, reset } from "../store/reducers/countReducer";

export const B1: React.FC = () => {
  const count = useSelector((state: RootType) => state.countReducer);
  const dispatch = useDispatch();
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
      <button onClick={() => dispatch(reset())}>Làm lại</button>
    </>
  );
};
