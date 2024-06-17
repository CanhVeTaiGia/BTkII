import { ActionInterface, ProfileInterface } from "../../interface/interface";

const initialProfile: ProfileInterface[] = [
    {
        id: 1,
        name: "Nguyễn Văn Nam",
        gender: "Nam",
        birthOfDate: "29-06-2013",
        address: {
            district: "Thanh Xuân",
            city: "Hà Nội",
        }
    }
]

export const profileReducer = (state=initialProfile, action: ActionInterface) => {
    switch(action.type){
        default:
            return state;
    }
}