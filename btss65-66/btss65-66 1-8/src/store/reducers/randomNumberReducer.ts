import { ActionInterface } from "../../interface/interface";

const initialRandomNumber: number[] = [];

export const randomNumberReducer = (state = initialRandomNumber, action: ActionInterface) => {
    switch(action.type){
        case "GRN":
            return [...state, action.payload] as number[];
        default:
            return state;
    }
}