import { useDispatch, useSelector } from "react-redux"
import { RootType } from "../interface/interface"
import { action } from "../action/action";

export default function B6() {
    const state: string = useSelector((state: RootType) => {
        return state.changeStateReducer
    });
    const dispatch = useDispatch();
    const changeState = () => {
      return dispatch(action("CS", 1));
    }
  return (
    <>
        <p>{state}</p>
        <button onClick={changeState}>Change state</button>
    </>
  )
}
