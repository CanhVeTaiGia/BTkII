import { useDispatch, useSelector } from "react-redux"
import { RootType } from "../interface/interface"
import { action } from "../action/action";

export default function B5() {
    const randomNumber: number[] = useSelector((state: RootType) => {
        return state.randomNumberReducer
    });
    const dispatch = useDispatch();
    const addRandom = () => {
        dispatch(action("GRN", Math.floor(Math.random() * 100)))
    }
  return (
    <>
    <p>[{randomNumber.join(", ")}]</p>
    <button onClick={addRandom}>Genderate Random Number</button>
    </>
  )
}
