import { store } from "../store/store";

export type RootType = ReturnType<typeof store.getState>

export interface ThemeInterface {
    value: string
}

export interface MenuInterface {
    status: boolean,
    interface: {
        title: string,
        icon: string
    }
}

export interface ContentMapping {
    en: Content;
    vi: Content;
}

export interface Content {
    welcome: string;
    dashboard: string;
}

export interface FavoriteInterface{
    id: number
    name: string,
    status: boolean
}

export interface User{
    id: number,
    username: string,
    password: string,
}