import { rootReducer } from "../store/store";

export interface ProfileInterface {
  id: number;
  name: string;
  gender: string;
  birthOfDate: string;
  address: Address;
}

export interface Address {
  district: string;
  city: string;
}

export interface ActionInterface {
  type: string;
  payload?: any;
}

export type RootType = ReturnType<typeof rootReducer>;

export interface FruitInterface{
  id: number,
  name: string,
  price: number,
  stock: number,
}