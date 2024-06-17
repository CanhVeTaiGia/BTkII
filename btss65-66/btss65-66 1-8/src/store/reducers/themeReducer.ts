import { ActionInterface } from "../../interface/interface";

const initialTheme: boolean = false;

export const themeReducer = (state = initialTheme, action: ActionInterface) => {
    switch (action.type) {
        case 'TOGGLETHEME':
            return !state;
        default:
            return state
    }
}