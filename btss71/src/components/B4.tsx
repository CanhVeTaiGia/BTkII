import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../interface/interface";
import { toggleDisplay } from "../store/reducers/displayReducer";

export const B4: React.FC = () => {
    const display = useSelector((state: RootType) => state.displayReducer);
    const dispatch = useDispatch();
    
    return (
        <>
            <button onClick={() => dispatch(toggleDisplay())}>
                {display ? "List" : "Grid"} Mode
            </button>
            <div style={{ display: "flex", flexDirection: display ? "column" : "row", gap: "10px" }}>
                <div style={{ width: "200px", height: "40px", background: "#f00", display: "flex", justifyContent: "center", alignItems: "center" }}>1</div>
                <div style={{ width: "200px", height: "40px", background: "#f00", display: "flex", justifyContent: "center", alignItems: "center" }}>2</div>
                <div style={{ width: "200px", height: "40px", background: "#f00", display: "flex", justifyContent: "center", alignItems: "center" }}>3</div>
                <div style={{ width: "200px", height: "40px", background: "#f00", display: "flex", justifyContent: "center", alignItems: "center" }}>4</div>
            </div>
        </>
    );
}
