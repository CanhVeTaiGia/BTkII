export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

interface RegisterUserAction {
  type: typeof REGISTER_USER;
  payload: { email: string; password: string };
}

interface LoginUserAction {
  type: typeof LOGIN_USER;
  payload: { email: string };
}

export const registerUser = (user: { email: string; password: string }): RegisterUserAction => ({
  type: REGISTER_USER,
  payload: user,
});

export const loginUser = (email: string): LoginUserAction => ({
  type: LOGIN_USER,
  payload: { email },
});

export type UserActionTypes = RegisterUserAction | LoginUserAction;
