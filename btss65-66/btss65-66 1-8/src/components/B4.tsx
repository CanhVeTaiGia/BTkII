import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../interface/interface";
import { action } from "../action/action";

export default function B4() {
  const counter = useSelector((state: RootType) => {
    return state.counterReducer;
  });
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(action("INCREASE", 1));
  };
  const decrease = () => {
    dispatch(action("DECREASE", 1));
  };
  return (
    <>
      <p>Giá trị của counter: {counter}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={decrease}>Giảm</button>
    </>
  );
}
