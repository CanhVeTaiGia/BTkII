import { ActionInterface } from "../../interface/interface";

const initialChangeState: string = "Rikkei Academy";

export const changeStateReducer = (state = initialChangeState, action: ActionInterface) => {
    switch(action.type){
        case "CS":
            return "RikkeiSoft";
        default:
            return state;
    }
}