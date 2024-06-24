import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../interface/interface";
import { toggleTheme } from "../store/reducers/themeReducer";

export const B3: React.FC = () => {
  const theme = useSelector((state: RootType) => state.themeReducer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "";
  }, [theme]);
  return (
    <>
      <button onClick={() => dispatch(toggleTheme())}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </>
  );
};
