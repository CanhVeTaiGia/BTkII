import { ActionInterface } from "../interface/interface";

export const action = (type: string, payload?: any)=> {
    return { type: type, payload: payload }
}