import { ActionInterface } from "../../interface/interface";

const initialCounter: number = 0;

export const counterReducer = (state=initialCounter, action: ActionInterface) => {
    switch(action.type){
        case "INCREASE":
            return state + action.payload;
        case "DECREASE":
            return state - action.payload;
        default:
            return state;
    }
}