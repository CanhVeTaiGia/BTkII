import store from "../store/store"

export interface ProductType{
    id: number,
    name: string,
    price: number,
    description: string,
    stock: number,
    image: string
}

export interface CartType{
    id: number,
    product: ProductType
    quantity: number
}

export type RootState = ReturnType<typeof store.getState>