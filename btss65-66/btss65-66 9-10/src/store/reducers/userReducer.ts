import { LOGIN_USER, REGISTER_USER, UserActionTypes } from "../../action/action";


interface UserState {
  registeredUser: { email: string; password: string } | null;
  loggedInUser: { email: string } | null;
}

const initialState: UserState = {
  registeredUser: null,
  loggedInUser: null,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        registeredUser: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
