export interface IAuthenticationUserData {
  id: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IInputUserDTO {
  name: string;
  email: string;
  password: string;
}
