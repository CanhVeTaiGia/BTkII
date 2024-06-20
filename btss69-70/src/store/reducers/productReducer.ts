import { ActionInterface, ProductInterface } from "../../interface/interface";
import { getLocal } from "../../localstorage/getLocal";
import { setLocal } from "../../localstorage/setLocal";

export const initialProduct: ProductInterface[] = JSON.parse(getLocal("products") || "[]");

export const productReducer = ((state = initialProduct, action: ActionInterface) => {
    let updateState;
    switch (action.type){
        case "DECREASESSTOCK":
            updateState = state.map((item) => {
                if(item.id === action.payload.id){
                    return item.stock - action.payload.quantity
                }
            })
            setLocal("products", updateState);
            return [...updateState];
        case "INCREASESTOCK":
            updateState = state.map((item) => {
                if(item.id === action.payload.id){
                    return item.stock + action.payload.quantity
                }
            })
            setLocal("products", updateState);
            return [...updateState];
        default: 
            return state;
    }
})