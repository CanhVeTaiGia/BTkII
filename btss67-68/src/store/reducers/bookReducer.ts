import { ActionInterface, BookInterface } from "../../interface/interface";
import { setLocal } from "../../setLocal/setLocal";

const initialBooks: BookInterface[] = JSON.parse(localStorage.getItem("books") || '[]');

export const bookReducer = (state = initialBooks, action: ActionInterface) => {
    let updatedState;
    switch(action.type) {
        case "PAYBOOK":
            updatedState = state.filter((item) => item.status);
            setLocal("books", updatedState);
            return [...updatedState];
        case "UNPAYBOOK":
            updatedState = state.filter((item) => !item.status);
            setLocal("books", updatedState);
            return [...updatedState];
        case "ADDBOOK":
            updatedState = [...state, action.payload];
            setLocal("books", updatedState);
            return [...updatedState];
        case "DELETEBOOK":
            updatedState = state.filter((item) => item.id !== action.payload);
            setLocal("books", updatedState);
            return [...updatedState];
        case "EDITBOOK":
            updatedState = state.map((item) => 
                item.id === action.payload.id 
                    ? { ...item, ...action.payload, status: false }
                    : item
            );
            setLocal("books", updatedState);
            return [...updatedState];
        case "CHANGESTATUS":
            updatedState = state.map((item) => item.id === action.payload.id ? 
            { ...item, status: !item.status } : item
            );
            setLocal("books", updatedState);
            return [...updatedState];
        case "DELETEBOOK":
            updatedState = state.filter((item) => item.id !== action.payload);
            setLocal("books", updatedState);
            return [...updatedState];
        default:
            return state;
    }
}
