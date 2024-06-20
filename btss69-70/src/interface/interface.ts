import { rootReducer } from "../store/store"

export interface ProductInterface{
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    stock: number
}

export interface ProductCart{
    id: number,
    name: string,
    price: number,
    quantity: number
}

export interface ActionInterface{
    type: string,
    payload?: any,
}

export type RootType = ReturnType<typeof rootReducer>