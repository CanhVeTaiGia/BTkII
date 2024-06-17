import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../interface/interface";

export default function B7() {
  const theme = useSelector((state: RootType) => {
    return state.themeReducer;
  });
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return dispatch({ type: "TOGGLETHEME", payload: e.target.value });
  };
  return (
    <>
      {theme ? (
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "black",
            border: "1px solid black",
          }}
        >
          <input
            style={{ display: "inline-block" }}
            type="checkbox"
            onChange={handleChange}
          />
          <p style={{ color: "#fff" }}>Tối</p>
        </div>
      ) : (
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "white",
            border: "1px solid black",
            borderColor: "#000",
          }}
        >
          <input
            style={{ display: "inline-block" }}
            type="checkbox"
            onChange={handleChange}
          />
          <p>Sáng</p>
        </div>
      )}
    </>
  );
}
