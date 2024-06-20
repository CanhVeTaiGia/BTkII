import { ActionInterface, ProductCart } from "../../interface/interface";
import { getLocal } from "../../localstorage/getLocal";
import { setLocal } from "../../localstorage/setLocal";

export const initialCart: ProductCart[] = JSON.parse(getLocal("carts") || '[]');

export const cartReducer = (state = initialCart, action: ActionInterface) => {
    let updateState: ProductCart[] = [];
    switch (action.type) {
        case "ADDTOCART":
            const productIndex = state.findIndex(product => product.id === action.payload.id);
            if (productIndex !== -1) {
                updateState = state.map(product => 
                    product.id === action.payload.id 
                        ? { ...product, quantity: product.quantity + action.payload.quantity }
                        : product
                );
            } else {
                updateState = [...state, {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: action.payload.quantity++
                }];
            }
            setLocal("carts", updateState);
            return [...updateState];
        default:
            return state;
    }
}
