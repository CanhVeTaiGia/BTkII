import { store } from "../store/store"

export interface User {
    id: number,
    name: string
}

export type RootType = ReturnType<typeof store.getState>