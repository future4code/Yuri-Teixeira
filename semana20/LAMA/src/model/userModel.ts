export interface IAuthenticationUserData {
  id: string;
}

export enum EUserRole {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export interface IInputUserDTO {
  name: string;
  email: string;
  password: string;
  role: EUserRole;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: EUserRole;
}

export interface IInputLogin {
  email: string;
  password: string;
}
