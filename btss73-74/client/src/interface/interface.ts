import store from "../store/store"

export interface Job{
    id: number,
    name: string,
    status: boolean
};

export type RootType = ReturnType<typeof store.getState>