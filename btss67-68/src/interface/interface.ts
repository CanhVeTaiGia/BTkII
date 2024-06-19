import { rootReducer } from "../store/store"

export interface BookInterface{
    id: number,
    name: string,
    studentName: string,
    loanDate: string,
    payDate: string
    status: boolean
}

export interface ActionInterface{
    type: string,
    payload?: any,
}

export type RootType = ReturnType<typeof rootReducer>
